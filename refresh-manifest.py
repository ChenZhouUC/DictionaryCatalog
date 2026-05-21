#!/usr/bin/env python3
"""Regenerate MANIFEST.md, a one-line-per-file inventory of the working tree.

The manifest deliberately includes files that .gitignore excludes (large
dictionary payloads such as .dict / .mdx / .mdd) so that Git history can
detect content changes via SHA-256 even when the binaries themselves never
leave the local machine. Lines are sorted alphabetically by path with
fixed-width columns so a `git diff` of this file shows exactly which
dictionary file changed.

A size+mtime cache (.manifest-cache.tsv, gitignored) avoids re-hashing
unchanged multi-GiB files between runs and preserves the full 64-char
SHA-256 even though the manifest itself shows a 16-char prefix for
readability.

Usage:
    ./refresh-manifest.py
"""

from __future__ import annotations

import datetime as _dt
import hashlib
import os
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent
MANIFEST_FILE = REPO_ROOT / "MANIFEST.md"
CACHE_FILE = REPO_ROOT / ".manifest-cache.tsv"

HASH_PREFIX_LEN = 16  # chars of SHA-256 shown in the human-readable manifest

# Three-state classification:
#   - ALLOW  : file is under one of TRACKED_DIRS AND ends with a TRACKED_SUFFIX
#              -> included in MANIFEST.md
#   - DENY   : file path matches a DENY_* rule below
#              -> silently skipped (known noise / files Git already tracks)
#   - UNKNOWN: anything else
#              -> not in the manifest, but warned about (yellow) so each run
#                 surfaces newcomers that need a triage decision (add to
#                 TRACKED_* if a new dict format, or DENY_* if intentional).
TRACKED_DIRS = (
    "StarDict",
    "MDict",
    "EudicTranslationEngine",
)
TRACKED_SUFFIXES = (
    # StarDict
    ".ifo",
    ".idx",
    ".cdi",
    ".euidx",
    ".dict",
    ".dict.dz",
    # MDict
    ".mdx",
    ".mdd",
    # DSL (defensive — none currently in the repo)
    ".dsl",
    ".dsl.dz",
    # Styling and imagery
    ".css",
    ".png",
    # Eudic translation engine plugins
    ".eudb",
    ".eudic",
)
DENY_DIRS = (
    ".git",
    ".githooks",
    ".ruff_cache",
    "__pycache__",
    ".mypy_cache",
    ".idea",
    ".vscode",
)
DENY_NAMES = (
    ".DS_Store",
    "Thumbs.db",
    ".gitignore",
    ".prettierignore",
    "README.md",
    "MANIFEST.md",
    "refresh-manifest.py",
    ".manifest-cache.tsv",
    ".manifest-cache.tsv.tmp",
)
DENY_SUFFIXES = (
    ".pyc",
    ".swp",
)


def load_cache() -> dict[str, tuple[int, int, str]]:
    """Map path -> (size, mtime, full-sha256). Keeps full hash for re-use."""
    cache: dict[str, tuple[int, int, str]] = {}
    if not CACHE_FILE.exists():
        return cache
    with CACHE_FILE.open("r", encoding="utf-8") as fh:
        for line in fh:
            parts = line.rstrip("\n").split("\t")
            if len(parts) != 4:
                continue
            path, size, mtime, sha = parts
            try:
                cache[path] = (int(size), int(mtime), sha)
            except ValueError:
                continue
    return cache


def save_cache(entries: list[tuple[str, int, int, str]]) -> None:
    tmp = CACHE_FILE.with_suffix(CACHE_FILE.suffix + ".tmp")
    with tmp.open("w", encoding="utf-8") as fh:
        for path, size, mtime, sha in entries:
            fh.write(f"{path}\t{size}\t{mtime}\t{sha}\n")
    tmp.replace(CACHE_FILE)


def sha256_of(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as fh:
        for chunk in iter(lambda: fh.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def _is_denied(rel: str, name: str) -> bool:
    if name in DENY_NAMES:
        return True
    if name.endswith(DENY_SUFFIXES):
        return True
    parts = rel.split("/")
    return any(seg in DENY_DIRS for seg in parts)


def classify_tree() -> tuple[list[Path], list[str]]:
    """Walk the whole repo and split files into (allowed, unknown).

    Denied files are silently dropped. Unknown files are returned so the
    caller can surface them as warnings — each unknown is a hint that the
    user should add the file to either TRACKED_* (include) or DENY_* (skip).
    """
    allowed: list[Path] = []
    unknown: list[str] = []
    for dirpath, dirnames, filenames in os.walk(REPO_ROOT):
        dirnames[:] = [d for d in dirnames if d not in DENY_DIRS]
        for name in filenames:
            full = Path(dirpath) / name
            rel = full.relative_to(REPO_ROOT).as_posix()
            if _is_denied(rel, name):
                continue
            top = rel.split("/", 1)[0]
            if top in TRACKED_DIRS and name.endswith(TRACKED_SUFFIXES):
                allowed.append(full)
            else:
                unknown.append(rel)
    allowed.sort(key=lambda p: p.relative_to(REPO_ROOT).as_posix())
    unknown.sort()
    return allowed, unknown


def human_size(num: int) -> str:
    units = ["B", "KiB", "MiB", "GiB", "TiB"]
    value = float(num)
    idx = 0
    while value >= 1024 and idx < len(units) - 1:
        value /= 1024
        idx += 1
    if idx == 0:
        return f"{int(value)} B"
    return f"{value:.2f} {units[idx]}"


def human_time(ts: float) -> str:
    return _dt.datetime.fromtimestamp(ts).strftime("%Y-%m-%d %H:%M:%S")


def birth_time(stat_result: os.stat_result) -> float:
    # macOS / BSD expose true creation time as st_birthtime. On filesystems or
    # platforms where it is unavailable we fall back to st_ctime (which on
    # POSIX is the inode-change time, the closest portable proxy).
    return getattr(stat_result, "st_birthtime", stat_result.st_ctime)


def git_ignored_set(rel_paths: list[str]) -> set[str] | None:
    """Paths .gitignore would exclude. Returns None if not inside a Git repo."""
    try:
        subprocess.run(
            ["git", "rev-parse", "--is-inside-work-tree"],
            check=True,
            capture_output=True,
            cwd=REPO_ROOT,
        )
    except (FileNotFoundError, subprocess.CalledProcessError):
        return None
    if not rel_paths:
        return set()
    proc = subprocess.run(
        ["git", "check-ignore", "--stdin", "-z"],
        input="\0".join(rel_paths).encode("utf-8"),
        capture_output=True,
        cwd=REPO_ROOT,
    )
    if proc.returncode not in (0, 1):
        sys.stderr.write(proc.stderr.decode("utf-8", "replace"))
        return None
    ignored = proc.stdout.decode("utf-8", "replace").split("\0")
    return {p for p in ignored if p}


USE_COLOR_STDOUT = sys.stdout.isatty()
USE_COLOR_STDERR = sys.stderr.isatty()


def _paint(stream_is_tty: bool, code: str, msg: str) -> str:
    return f"\033[{code}m{msg}\033[0m" if stream_is_tty else msg


def info(msg: str) -> None:
    print(_paint(USE_COLOR_STDOUT, "36", msg))  # cyan


def ok(msg: str) -> None:
    print(_paint(USE_COLOR_STDOUT, "32", msg))  # green


def warn(msg: str) -> None:
    print(_paint(USE_COLOR_STDERR, "33", msg), file=sys.stderr)  # yellow


def main() -> int:
    os.chdir(REPO_ROOT)
    info(f"Scanning {REPO_ROOT}")
    info(f"  tracked dirs    : {', '.join(TRACKED_DIRS)}")
    info(f"  tracked suffixes: {', '.join(TRACKED_SUFFIXES)}")

    cache = load_cache()
    files, unknown = classify_tree()
    info(f"  classified      : {len(files)} tracked / {len(unknown)} unknown")

    if unknown:
        warn(f"WARNING: {len(unknown)} file(s) not in allowlist nor denylist — review and add to TRACKED_* or DENY_*:")
        for u in unknown:
            warn(f"  ? {u}")

    rows: list[tuple[str, int, float, float, str]] = []  # rel, size, ctime, mtime, full_sha
    new_cache: list[tuple[str, int, int, str]] = []
    total_bytes = 0
    n_hashed = 0
    n_cached = 0

    for path in files:
        rel = path.relative_to(REPO_ROOT).as_posix()
        stat = path.stat()
        size = stat.st_size
        mtime = stat.st_mtime
        ctime = birth_time(stat)
        cached = cache.get(rel)
        if cached and cached[0] == size and cached[1] == int(mtime):
            sha = cached[2]
            n_cached += 1
        else:
            info(f"  hashing {human_size(size):>10}  {rel}")
            sha = sha256_of(path)
            n_hashed += 1
        new_cache.append((rel, size, int(mtime), sha))
        rows.append((rel, size, ctime, mtime, sha))
        total_bytes += size

    info(f"  hashes          : {n_hashed} computed, {n_cached} reused from cache")

    save_cache(new_cache)

    ignored = git_ignored_set([r[0] for r in rows])

    size_strs = [human_size(r[1]) for r in rows]
    size_col = max((len(s) for s in size_strs), default=4)
    size_col = max(size_col, len("SIZE"))

    timestamp = _dt.datetime.now().astimezone().strftime("%Y-%m-%dT%H:%M:%S%z")
    bytes_with_commas = f"{total_bytes:,}"

    lines: list[str] = []
    lines.append("# Repository Manifest")
    lines.append("")
    lines.append("_Auto-generated by `refresh-manifest.py`. Do not edit by hand._")
    lines.append("")
    lines.append(f"- Generated: `{timestamp}`")
    lines.append(f"- Tracked dirs: {', '.join(f'`{d}/`' for d in TRACKED_DIRS)}")
    lines.append(f"- Tracked suffixes: {', '.join(f'`{s}`' for s in TRACKED_SUFFIXES)}")
    lines.append(f"- Files in manifest: **{len(rows)}**")
    lines.append(f"- Total size: **{human_size(total_bytes)}** ({bytes_with_commas} bytes)")
    lines.append(
        f"- `HASH` shows the first {HASH_PREFIX_LEN} hex chars of SHA-256; full hashes live in `.manifest-cache.tsv`."
    )
    if ignored is None:
        lines.append("- `G` column: blank — not inside a Git repo at refresh time.")
    else:
        lines.append("- `G` column: `Y` tracked by Git, `-` ignored by `.gitignore` (still present locally).")
    lines.append("")
    lines.append("```")
    header = f"{'HASH':<{HASH_PREFIX_LEN}}  {'SIZE':>{size_col}}  {'CREATED':<19}  {'MODIFIED':<19}  G  PATH"
    lines.append(header)
    lines.append("-" * len(header))
    for (rel, size, ctime, mtime, sha), size_str in zip(rows, size_strs):
        if ignored is None:
            mark = " "
        elif rel in ignored:
            mark = "-"
        else:
            mark = "Y"
        lines.append(
            f"{sha[:HASH_PREFIX_LEN]}  {size_str:>{size_col}}  {human_time(ctime)}  {human_time(mtime)}  {mark}  {rel}"
        )
    lines.append("```")
    lines.append("")

    MANIFEST_FILE.write_text("\n".join(lines), encoding="utf-8")
    ok(f"Wrote {MANIFEST_FILE.name} ({len(rows)} files, {human_size(total_bytes)}).")
    if unknown:
        warn(f"Reminder: {len(unknown)} unknown file(s) above were NOT recorded in the manifest.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
