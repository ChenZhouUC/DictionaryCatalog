# DictionaryCatalog

我把这个仓库维护为一个公开的**词典目录与元数据索引**，而不是词典二进制镜像。这里按词典格式/生态整理 StarDict、MDict 和 Eudic Translation Engine 三类资源，方便使用者了解每套词典的格式、兼容软件、可维护元数据，以及公开使用时需要注意的版权边界。

> 本仓库默认不直接托管完整词典主体文件。若你需要获取某套词典文件，请通过我的 GitHub 个人资料页公开邮箱联系我；我会根据来源、授权状态和合理用途判断是否提供。

## Repository Scope

我会保留目录结构、格式说明、索引文件、展示元数据、封面图标、样式文件和维护说明；我不会把完整词典主体作为公开 Git 内容提交。

当前 `.gitignore` 会排除：

- StarDict 词典正文：`.dict`、`.dict.dz`
- MDict 主体和大型资源包：`.mdx`、`.mdd`
- DSL 词典主体：`.dsl`、`.dsl.dz`
- macOS/系统噪声文件：`.DS_Store`、`Thumbs.db`、`__MACOSX/`

当前仓库可以跟踪：

- `README.md`、`.gitignore`
- `StarDict/`、`MDict/`、`EudicTE/` 下的目录结构
- `.ifo`、`.idx`、`.cdi`、`.euidx`、`.css`、`.js`、`.png`、`.eudb`、`.eudic` 等元数据、索引、外观资源或插件文件
- `MANIFEST.md`：记录本地完整工作区（含未上传大文件）的快照

## Local Manifest

为了在 Git 历史里隐式记录那些不会被上传的词典主体文件（`.dict/.mdx/.mdd` 等）的变化，我用 `refresh-manifest.py` 在根目录生成 `MANIFEST.md`。每个文件占一行，按路径字典序排序，列出：

- SHA-256 前 16 位（碰撞空间 64 bit；完整哈希落在本地的 `.manifest-cache.tsv` 缓存里，不上传）
- 文件大小（human-readable，B/KiB/MiB/GiB）
- 创建时间、最近修改时间（本地时区，秒级）
- `G` 列：`Y` 进了 Git，`-` 被 `.gitignore` 忽略但本地仍在

这样换了某套词典的 `.mdd`，`git diff MANIFEST.md` 会精确高亮那一行，远端虽然没有大文件也能知道"哪个词典动过"。

脚本采用**正向白名单 + 反向黑名单 + 未知告警**的三态分类：

- 白名单：`TRACKED_DIRS`（顶层目录）和 `TRACKED_SUFFIXES`（扩展名），同时命中才进入清单
- 黑名单：`DENY_DIRS / DENY_NAMES / DENY_SUFFIXES`，命中即静默忽略（如 `.git`、`.DS_Store`、README、脚本自身等）
- 既不在白名单也不在黑名单的，会以**黄色警告**打印到 stderr，提醒我新出现的文件需要归类——加入 `TRACKED_*` 或 `DENY_*`

刷新工作流：

```bash
./refresh-manifest.py           # 全量扫一次；带 size+mtime 缓存，重复运行只对变化文件重新哈希
```

可选启用 pre-commit 钩子（每次 `git commit` 自动刷新并 stage 清单）：

```bash
git config core.hooksPath .githooks
```

如果不想在本仓库启用任何钩子（既不要这里的 pre-commit，也不要全局 `core.hooksPath` 指向的其他钩子，例如审批流程），把仓库本地的 hooksPath 指到一个空目录即可：

```bash
git config core.hooksPath /dev/null   # 本仓库内禁用所有钩子；要恢复用 git config --unset core.hooksPath
```

## Catalog

| Directory   | Format / Ecosystem                      |          Local Inventory | Purpose                              |
| ----------- | --------------------------------------- | -----------------------: | ------------------------------------ |
| `StarDict/` | StarDict `.ifo/.idx/.dict`              |     约 230 MB，14 套词典 | 离线词典查询，中英/汉英/汉语词典     |
| `MDict/`    | MDict `.mdx/.mdd`                       |     约 9.1 GB，21 套词典 | HTML 词典，适配多种 MDict 兼容阅读器 |
| `EudicTE/`  | Eudic Translation Engine `.eudb/.eudic` | 约 340 KB，10 个插件文件 | 欧路词典在线翻译源配置               |

## Format Guide

这里的“可维护元数据”采用较宽口径：凡是不属于查询结果正文/释义本身，但会影响词典在软件中的展示、来源说明、版权说明、封面图标、入口说明或外观样式的内容，都算可维护元数据。没有这类可维护信息的文件标为 `~~不适用~~`。

### StarDict

StarDict 是胡正（Hu Zheng）自 2003 年发起的开源词典项目（最初在 Linux/Unix 桌面环境），名称取自"星际词典"的意境。它沿用 Unix 风格把元数据、索引、正文拆成多个小文件协同工作：`.ifo` 是 _info_（文本元数据头），`.idx` 是 _index_（按字典序排列的词条→偏移表），`.dict` 是 _dictionary body_（释义正文，可选 gzip 压缩为 `.dict.dz`）。这种纯文件式结构便于人工编辑 `.ifo`、易被各类软件读写，也是 PyGlossary、GoldenDict 等通用工具的"中转格式"之一。`.cdi`/`.euidx` 是部分客户端（如欧路词典）追加的二级索引，与原三件套并存以加速查询。

常见兼容软件：GoldenDict、GoldenDict-ng、StarDict、QStarDict、ColorDict，以及 PyGlossary 等转换工具。

| Suffix              | Role                  | Open With                                       | Maintainable Metadata                                           |
| ------------------- | --------------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| `.ifo`              | StarDict 词典信息文件 | 文本编辑器、VS Code                             | `bookname`、`author`、`email`、`website`、`description`、`date` |
| `.dict`、`.dict.dz` | 词典正文数据          | GoldenDict、GoldenDict-ng、StarDict、PyGlossary | ~~不适用~~                                                      |
| `.idx`              | 词条索引              | 词典软件自动读取                                | ~~不适用~~                                                      |
| `.cdi`、`.euidx`    | 附属索引/兼容数据     | 词典软件自动读取                                | ~~不适用~~                                                      |

#### Rename Safety (StarDict)

**结论：4–5 件套同主名同步改名 100% 安全。** 客户端（GoldenDict 等）通过"扫到 `Foo.ifo` 就在同目录找 `Foo.{idx,dict,cdi,euidx}`"的同主名约定组装一套词典；任何一个文件之间都没有硬编码的文件名引用。

扫描结果（本仓库 `find StarDict -name '*.ifo'` 全量 grep）：

- 没有任何 `.ifo` 文件含 `*.dict / *.idx / *.cdi / *.euidx / *.dz` 字样
- `bookname` 与文件主名独立——如 `朗道汉英字典.ifo` 的 bookname 是 `朗道汉英字典5.0`、`DrEye译典通.ifo` 的 bookname 是 `Dr. Eye 译典通`，磁盘上的主名怎么改，客户端里显示什么完全看 `.ifo` 里的 `bookname` 字段
- `.idx / .dict / .cdi / .euidx` 是二进制索引/正文，被动被 `.ifo` 同主名串起，不主动引用任何外部文件名

| 操作                                                                            | 是否安全                                              |
| ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `Foo.{ifo,idx,dict,cdi[,euidx]}` → `Bar.{ifo,idx,dict,cdi[,euidx]}`（全部同步） | ✅                                                    |
| 只改其中一个文件名                                                              | ❌ 拆套，客户端识别不全                               |
| 修改 `.ifo` 里的 `bookname`、`description`、`author`、`date`                    | ✅ 不影响文件识别，只更新软件里的展示                 |
| 修改 `.ifo` 里的 `wordcount` / `idxfilesize` / `sametypesequence`               | ❌ 与 `.idx / .dict` 内部结构绑定，错值会导致打开失败 |

### MDict

MDict 格式来自 Octopus Studio 在 2003 年前后开发的同名词典软件，名字即 _Mobile Dictionary_——最初为 PDA / Windows Mobile / Pocket PC 上的离线词典阅读器服务。`.mdx` 是主词典文件，承载词条 HTML 与文件头元数据；`.mdd` 是资源包，存图片、音频、CSS、JS 等附件；两者均采用专有压缩，并支持 `Encrypted=2` 的作者加密。文件头部以 XML 风格的键值对暴露 `Title`、`Description`、`Encrypted`、`StyleSheet`、`Encoding`、`CreationDate` 等字段——`Encrypted=2` 时直接二进制改文本就会破坏内部偏移和校验，必须借助 MDict Builder / MdxBuilder / mdict-utils / PyGlossary 等工具拆解重建。生态上 MDict 被 MDict 官方客户端、GoldenDict、欧路词典、深蓝词典等广泛兼容，是当前中文圈最主流的 HTML 词典容器格式。

常见兼容软件：MDict、Mdict-Android、GoldenDict/GoldenDict-ng、欧路词典、深蓝词典，以及部分支持 `.mdx` 的移动端词典软件。

| Suffix | Role                                         | Open With                                             | Maintainable Metadata                                                                                                                                   |
| ------ | -------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.mdx` | MDict 主词典文件，包含词条数据和头部信息     | MDict、GoldenDict/GoldenDict-ng、欧路词典、深蓝词典等 | `Title`、`Description`、`CreationDate`、`Encoding`、`StyleSheet` 等头部字段；多数文件需用 MDict Builder、MdxBuilder、mdict-utils、PyGlossary 等工具重建 |
| `.mdd` | MDict 资源包，通常存放图片、音频、CSS、JS 等 | MDict 系列软件自动读取                                | 可能包含封面、图标、入口页资源、样式等外观元数据；需要工具提取/重建                                                                                     |
| `.css` | 外置显示样式                                 | 文本编辑器、VS Code                                   | 外观样式，例如字体、颜色、排版、隐藏广告块等                                                                                                            |
| `.js`  | 外置 JavaScript（含 jQuery、crypto-js 等）   | 词典软件嵌入式运行                                    | 渲染逻辑、音频解锁、交互行为；通常随 `.mdx` 头部 `StyleSheet`/外联引入，建议保留上游打包内容不改                                                        |
| `.png` | 图标、封面或说明图片                         | 图片查看器、图片编辑器                                | 图标、封面、软件列表展示图、说明图等                                                                                                                    |

#### Rename Safety (MDict)

**结论：本仓库 21 套词典分两组——18 套是纯素结构（`.mdx + .mdd + .css + .png`），4 件套同主名同步改名安全；3 套 Perfect Edition（OALDPE / CDEPE / MALDPE）的 `.js` 把主名硬编码进了文件名引用、CSS class 前缀和 jQuery 选择器，不能改主名。**

跨文件引用扫描结果（本仓库每个 `.mdx / .css / .js` 全量 grep；`.mdd / .mdx` 加密体除外）：

- 全部 21 个 `.mdx` 头部 `StyleSheet` 字段都是空字串——`.css` 文件名不靠头部锚定，靠客户端"同主名兜底"
- 18 个 `.css` 里看着像同级文件的引用（如 `PrivateA.woff`、`cdoicons.woff`、`oalecd9.ttf`、`image/*.svg`）实际都不在磁盘上，全部解析进 `.mdd` 的虚拟资源包；CSS 对磁盘同级文件**零引用**
- 只有 Perfect Edition 三套带 `.js`，且：
  - `oaldpe.js` 字面硬钉了 `oaldpe.1.mdd / .2.mdd / .3.mdd`（用户配置注释里都列出来了）
  - `cdepe.js / maldpe.js` 没在源码里直接 grep 到分卷文件名（其分卷由 MDict 客户端按 stem 自动序列加载），但三个 .js 都通过 jQuery 操作 `.<stem>-config / .<stem>-nav / #<stem>-config` 这种 DOM 选择器；与之配套的 selector 在 `oaldpe.css` 里 40 个、`cdepe.css` 里 22 个、`maldpe.css` 里 14 个——`.mdx` HTML 正文里的 class 名也必然用同一套前缀

按文件类型总结引用方向：

| 文件                  | 出向（→其它文件）的硬引用                                                                     | 入向（其它文件→）的依赖                                            |
| --------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `.mdx`                | HTML 正文里的资源路径全部指向 `.mdd` 内虚拟路径，不指向磁盘同级                               | 客户端入口，按 stem 找配套 `.mdd / .css`                           |
| `.mdd / .N.mdd`       | 无（被动资源容器）                                                                            | 客户端按 stem 加载；`.1.mdd / .2.mdd` 分卷按自然序自动发现         |
| `.css`                | 0 个磁盘同级引用                                                                              | 客户端按 stem 兜底加载                                             |
| `.js` ⚠️              | 可能硬钉 `<stem>.N.mdd` 分卷名、`.<stem>-*` class 前缀、`<stem>-jquery.min.js` 等 vendor 路径 | `.mdx` HTML 正文里的 `<script src>` 引用、`.css` selector 命名空间 |
| `.png` / `_cover.png` | 无                                                                                            | 客户端按目录扫描；`<stem>.png` 或 `<dir>.png` 都能识别             |

| 操作                                                                   | 是否安全                                                                                           |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 同步把 `Foo.{mdx,mdd,css,png,_cover.png}` 改成 `Bar.{...}`（无 `.js`） | ✅                                                                                                 |
| 同上 + 分卷 `.1.mdd / .2.mdd` 一起同步改                               | ✅ 客户端按序自动加载                                                                              |
| 改带 `.js` 的 Perfect Edition 主名（哪怕 .js 也同步改了名）            | ❌ 还要 patch `.js` 里所有 stem 硬编码、`.css` 里 14–40 个 selector、`.mdx` HTML 正文里的 class 名 |
| 修改 `.mdx` 头部 `Title` / `Description` 等可见字段                    | ✅ 需要工具重新打包 `.mdx`，但不破坏外部引用                                                       |
| 改 `.mdx` 头部 `Encrypted` / `Encoding`                                | ❌ 与正文压缩/加密绑定，会破坏后续偏移                                                             |

### Eudic Translation Engine

欧路词典（Eudic，名字来自 _Euro-dictionary_）由欧路软件团队自 2000 年代后期开发，最初定位 macOS 桌面，后来覆盖 iOS、Android、Windows。它在客户端内提供了一个轻量沙盒，把第三方在线翻译服务（百度、Bing、DeepL、腾讯、火山、有道等）封装成独立插件按需调用——对应文件即 `.eudb`（新版欧路使用）和 `.eudic`（旧版欧路使用）。两种文件都是带 manifest 头（`name`/`desc`/`module.name`/`version`/`author`/`libid`/`enabled`）的容器，紧跟打包后的 JavaScript 调用逻辑。需要注意的是，这并不是离线词典正文，而是依赖网络的翻译适配器；维护时建议通过欧路官方的插件打包工具修改，不直接动二进制字符串，以免破坏 manifest 长度和 JS 完整性。

常见兼容软件：欧路词典/Eudic。该格式属于欧路词典生态的在线翻译引擎插件，不是通用离线词典格式。

| Suffix   | Role                         | Open With    | Maintainable Metadata                                                                                       |
| -------- | ---------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| `.eudb`  | 欧路词典新版在线翻译引擎插件 | 欧路词典新版 | manifest 中的 `name`、`desc`、`author`、`version`、`libid`、`enabled`；建议用打包工具修改，不直接二进制替换 |
| `.eudic` | 欧路词典旧版在线翻译引擎插件 | 欧路词典旧版 | manifest 中的 `name`、`desc`、`author`、`version`、`libid`、`enabled`；建议用打包工具修改，不直接二进制替换 |

## Dictionary Index

### StarDict

这些词库均为 StarDict `2.4.2` 结构，每套通常包含 `.ifo + .idx + .dict + .cdi`，部分还带 `.euidx`。其中 `.ifo` 是最适合维护展示信息的文件。

| Directory                                 | Display Name in `.ifo`  | Entries | Notes                                                |
| ----------------------------------------- | ----------------------- | ------: | ---------------------------------------------------- |
| `StarDict/朗道英汉字典/`                  | 朗道英汉字典 5.0        | 435,468 | 含 `.euidx`                                          |
| `StarDict/朗道汉英字典/`                  | 朗道汉英字典 5.0        | 405,719 | 含 `.euidx`                                          |
| `StarDict/懒虫简明英汉词典/`              | 懒虫简明英汉词典        | 452,185 | 英汉                                                 |
| `StarDict/懒虫简明汉英词典/`              | 懒虫简明汉英词典        | 119,592 | 汉英                                                 |
| `StarDict/21世纪双向辞典/`                | 21 世纪英汉汉英双向词典 | 213,741 | 英汉/汉英双向                                        |
| `StarDict/DrEye译典通/`                   | Dr. Eye 译典通          | 225,226 | 综合词典                                             |
| `StarDict/牛津现代英汉双解词典/Original/` | 牛津现代英汉双解词典    |  39,429 | 英汉双解，date=20060609                              |
| `StarDict/牛津现代英汉双解词典/Polished/` | 牛津现代英汉双解词典    |  39,429 | 英汉双解，date=20070924                              |
| `StarDict/CEDICT/`                        | CEDICT                  |  31,992 | 汉英，原始项目信息见 `.ifo`                          |
| `StarDict/现代汉语词典/`                  | 现代汉语词典            |  57,691 | 汉语释义                                             |
| `StarDict/汉语成语词典/`                  | 汉语成语词典            |  13,001 | 成语                                                 |
| `StarDict/国际标准汉字大辞典/`            | 国际标准汉字大辞典      |  45,053 | 汉字                                                 |
| `StarDict/高级汉语大词典/Original/`       | 高级汉语大词典          |  51,675 | 汉语，原始版（.dict 与 Polished 互异，cdi/idx 共享） |
| `StarDict/高级汉语大词典/Polished/`       | 高级汉语大词典          |  51,675 | 汉语，美化版（同上）                                 |

### MDict

MDict 词库通常以 `.mdx` 为主文件，配套 `.mdd` 资源包、外置 `.css`、封面和图标图片。当前扫描到的 `.mdx` 头部均为 HTML 格式、UTF-8 编码；多数 `Encrypted=2`，不适合直接二进制修改。

| Directory                     | MDX Title                                                            | Encrypted     | Resources                      |
| ----------------------------- | -------------------------------------------------------------------- | ------------- | ------------------------------ |
| `MDict/OALD9/`                | Oxford Advanced Learner's Dictionary 9ed                             | `Encrypted=2` | `.mdd`、`.css`、图片           |
| `MDict/OALECD8/`              | Oxford Advanced Learner's English-Chinese Dictionary 8ed             | `Encrypted=2` | `.mdd`、图片                   |
| `MDict/OALECD9/`              | The Oxford Advanced Learner's English-Chinese Dictionary 9ed         | `Encrypted=0` | `.mdd`、`.css`、图片           |
| `MDict/OALDPE/`               | Oxford Advanced Learner's Dictionary Perf.Ed.                        | `Encrypted=2` | `.mdd` ×4、`.css`、`.js`、图片 |
| `MDict/CALD3/`                | Cambridge Advanced Learner's Dictionary 3ed                          | `Encrypted=2` | `.mdd`、图片                   |
| `MDict/CALD4/`                | Cambridge Advanced Learner's Dictionary 4ed                          | `Encrypted=2` | `.mdd`、图片                   |
| `MDict/CDEPE/`                | Cambridge Dictionary English-Chinese Perf.Ed.                        | `Encrypted=2` | `.mdd` ×3、`.css`、`.js`、图片 |
| `MDict/CCALD8/`               | Collins COBUILD Advanced Learner's Dictinary 8ed                     | `Encrypted=0` | 图片                           |
| `MDict/CCALD9/`               | Collins COBUILD Advanced Learner's Dictinary 9ed                     | `Encrypted=2` | `.css`、图片                   |
| `MDict/MWALED/`               | Merriam-Webster's Advanced Learner's English Dictionary 2016         | `Encrypted=2` | `.mdd`、`.css`、图片           |
| `MDict/MWCD11/Simplified/`    | Merriam-Webster's Collegiate Dictionary 11ed                         | `Encrypted=2` | `.mdd`、图片                   |
| `MDict/MWCD11/Enriched/`      | Merriam-Webster's Collegiate Dictionary 11ed                         | `Encrypted=2` | `.mdd`、图片/声音资源          |
| `MDict/MWALECD/`              | Merriam-Webster's Advanced Learner's English-Chinese Dictionary 2018 | `Encrypted=0` | `.mdd`、`.css`、图片           |
| `MDict/MECDAL/`               | Macmillan English-Chinese Dictionary for Advanced Learners           | `Encrypted=2` | `.mdd`、图片                   |
| `MDict/MALDPE/`               | Macmillan Advanced Learner's Dictionary Perf.Ed.                     | `Encrypted=2` | `.mdd`、`.css`、`.js`、图片    |
| `MDict/LDOCE4/`               | Longman Dictionary of Contemporary English 4ed                       | `Encrypted=2` | `.mdd`、图片                   |
| `MDict/WNWCD5/`               | Webster's New World College Dictionary 5ed                           | `Encrypted=2` | `.mdd`、图片                   |
| `MDict/大辞海/`               | 大辞海（全卷本）                                                     | `Encrypted=2` | `.mdd`、`.css`、图片           |
| `MDict/现代英汉汉英词典/`     | 现代英汉汉英词典（外研社）                                           | `Encrypted=2` | `.mdd`、图片                   |
| `MDict/新牛津英汉双解大词典/` | 新牛津英汉双解大词典（第 2 版）                                      | `Encrypted=2` | `.mdd`、图片                   |
| `MDict/新世纪英汉大词典/`     | 新世纪英汉大词典（外研社）                                           | `Encrypted=2` | `.css`、图片                   |

### Eudic Translation Engine

这是欧路词典在线翻译引擎插件，不是离线词典。文件内部包含 manifest，例如 `name`、`desc`、`module.name`、`version`、`author`、`libid`、`enabled`，后面跟随打包后的 JavaScript 逻辑。

| Directory                     | File                      | Engine Name            |  Version |
| ----------------------------- | ------------------------- | ---------------------- | -------: |
| `EudicTE/new_version_eudb/`   | `oln_trans_baidu.eudb`    | 百度在线翻译引擎       | 20211028 |
| `EudicTE/new_version_eudb/`   | `oln_trans_bing.eudb`     | Bing 在线翻译引擎      | 20211028 |
| `EudicTE/new_version_eudb/`   | `oln_trans_deepl.eudb`    | DeepL 在线翻译引擎     | 20231225 |
| `EudicTE/new_version_eudb/`   | `oln_trans_tencent.eudb`  | 腾讯交互式在线翻译引擎 | 20230918 |
| `EudicTE/new_version_eudb/`   | `oln_trans_volcano.eudb`  | 火山在线翻译引擎       | 20230918 |
| `EudicTE/new_version_eudb/`   | `oln_trans_youdao.eudb`   | 有道在线翻译引擎       | 20230918 |
| `EudicTE/prev_version_eudic/` | `oln_trans_baidu.eudic`   | 百度在线翻译引擎       | 20211028 |
| `EudicTE/prev_version_eudic/` | `oln_trans_bing.eudic`    | Bing 在线翻译引擎      | 20211028 |
| `EudicTE/prev_version_eudic/` | `oln_trans_tencent.eudic` | 腾讯交互式在线翻译引擎 | 20230918 |
| `EudicTE/prev_version_eudic/` | `oln_trans_volcano.eudic` | 火山在线翻译引擎       | 20230918 |

`prev_version_eudic` 中的百度、Bing、腾讯、火山文件与 `new_version_eudb` 对应文件内容哈希一致，仅扩展名不同；新版目录额外包含 DeepL 和有道。

## Usage

### StarDict

可用软件包括 GoldenDict、GoldenDict-ng、StarDict、QStarDict、ColorDict 等。

1. 打开兼容 StarDict 的词典软件，例如 GoldenDict 或 GoldenDict-ng。
2. 进入 `Edit/Preferences` -> `Dictionaries` -> `Sources` -> `Files`。
3. 添加 `StarDict/` 目录，开启递归扫描或分别添加每个词典子目录。
4. 重新扫描后，在词典列表里确认展示名称是否符合预期。

StarDict 词库一般要求 `.ifo`、`.idx`、`.dict` 保持同目录、同前缀。移动或改名时不要只改其中一个文件。

### MDict

可用软件包括 MDict、Mdict-Android、GoldenDict/GoldenDict-ng、欧路词典、深蓝词典等。

1. 将 `.mdx` 与同名或配套的 `.mdd`、`.css`、`.js`、图片放在同一目录。
2. 在阅读器里导入 `.mdx`。
3. 如果样式、图片或发音缺失，优先检查 `.mdd`、`.css`、`.js` 是否与 `.mdx` 放在一起。

不同阅读器对 HTML、CSS、JS、音频资源支持程度不同；同一套 `.mdx` 在不同软件里的显示效果可能不完全一致。

### Eudic Translation Engine

`EudicTE/new_version_eudb/` 面向较新版本欧路词典，`EudicTE/prev_version_eudic/` 面向旧版本。导入方式取决于欧路词典版本和平台，请优先参考欧路词典的插件/翻译引擎导入说明。

这些插件会访问第三方在线翻译服务，公开维护时需要同时尊重服务商条款、接口限制和用户隐私。

## Metadata Maintenance

我只维护词典展示和外观相关的元数据，不维护查询结果正文和释义内容。

### StarDict

最容易维护的是 `.ifo`。可以用 VS Code 或任意 UTF-8 文本编辑器打开，例如：

```ini
bookname=朗道英汉字典5.0
author=上海朗道电脑科技发展有限公司
description=罗小辉破解文件格式，胡正制作转换程序。
date=2003.08.26
```

通常可以调整：

- `bookname`：软件里显示的词典名称。
- `author`、`email`、`website`：作者和来源信息。我会尽量保留真实来源，不冒名替换。
- `description`：词典说明，可清理广告、无关说明、乱码或过时安装提示。
- `date`：整理或来源日期。

不建议随意修改：

- 第一行 `StarDict's dict ifo file`。
- `version`、`wordcount`、`idxfilesize`。
- `sametypesequence`。

### MDict

MDict 的标题和说明在 `.mdx` 头部，例如 `Title`、`Description`、`CreationDate`、`StyleSheet` 等；外观样式和封面图标可能在外置 `.css/.js/.png`，也可能打包在 `.mdd` 中。

如果确实要生成元数据更干净的 `.mdx`，我会遵循这个流程：

1. 使用 MDict Editor、MDict Builder/MdxBuilder、mdict-utils、PyGlossary 等工具读取词库头部或源文件。
2. 只修改 `Title`、`Description`、`CreationDate`、版权/来源说明、封面图标引用、外观样式等元数据。
3. 重新生成 `.mdx`，必要时同时重建 `.mdd` 或替换外置 `.css/.js/.png`。
4. 用目标阅读器重新导入测试。

我不会直接用十六进制编辑器改 `.mdx/.mdd`，因为很多文件是压缩或加密格式，改短文本也可能破坏头部长度、校验或索引。

### Eudic Translation Engine

`.eudb/.eudic` 内部 manifest 中的 `name` 和 `desc` 决定展示名称和说明，但文件还包含打包后的 JavaScript。我只会在能重新打包并测试导入的情况下修改，不直接二进制替换字符串。

## Distribution Policy

为了降低版权和运维风险，我采用以下公开维护策略：

1. **不公开托管完整词典主体文件**：`.dict/.mdx/.mdd` 等主体文件默认不进入 Git。
2. **保留来源和许可证信息**：每套词典会尽量记录 `source`、`license`、`original_author`、`converted_by`、`notes` 等信息。
3. **不声明拥有第三方版权**：本仓库是目录和元数据索引，不代表我拥有词典内容、商标、图片、音频或排版资源的版权。
4. **提供联系和下架通道**：如权利人认为某些元数据、图片或文件不应公开，请通过 Issue 或我的 GitHub 公开邮箱联系我处理。
5. **避免广告和追踪**：我会尽量清理外链脚本、统计代码、推广入口和无关跳转；同时保留必要的版权与来源说明。
6. **避免隐私和凭据**：翻译引擎插件不应包含个人 Cookie、Token、API Key。

## Before Publishing

我在公开维护前会检查：

- `.DS_Store` 等系统文件已被忽略。
- `.dict/.mdx/.mdd` 等词典主体文件不会被提交。
- 每套词典尽量补充来源和授权状态。
- StarDict、MDict、欧路词典中显示名称、封面图标和样式说明尽量清晰。

## Disclaimer

本仓库中的目录、元数据和说明可能涉及不同作者、出版社、社区转换者或网络转载者。我只对自己整理的目录结构、元数据说明和维护说明负责，不声明拥有第三方词典内容、商标、图片、音频或排版资源的版权。

如果你认为本仓库中的某项内容侵犯了你的权利，请通过 Issue 或我的 GitHub 公开邮箱联系我，我会尽快核查并处理。
