/* ********用户自定义配置区开始******** */
// 可直接在词典里搜索以下任意词头，进入配置界面，常用配置无需修改此js文件。
// “maldpeconfig”、“maldpecfg”、“maldcfg”、“mpcfg”、“maldconfig”、“mpconfig”、“mpc”、“maldpe”、“韦氏配置”、“韦氏设置”、“配置”和“设置”。

var maldpeCfg = {
    // 【配置项1：中文翻译选项】（点击"词性导航"白色块可显示/隐藏中文翻译）
    // 选项（默认为0）：0-全部隐藏，1-全部显示，2-仅隐藏例句中文，3-仅显示例句中文，4-仅隐藏义项中文，5-仅显示义项中文
    showTranslation: 0,

    // 【配置项2：是否使用台湾繁体中文翻译】
    // 选项（默认为false）：false=否，true=是
    showTraditional: false,

    // 【配置项3：是否显示词性导航栏】
    // 选项（默认为true）：false=不显示，true=显示
    showNavbar: true,

    // 【配置项4：是否选中词性导航all】
    // 选项（默认为true）：false=否，true=是
    selectNavbarAll: true,

    // 【配置项5：是否启用英文点译功能】（单句显示/隐藏中文）
    // 选项（默认为true）：false=否，true=是
    touchToTranslate: true,

    // 【配置项6：是否启用在线TTS发音】（需要高版本浏览器内核。发音图标为灰色。Mdict暂不支持。）
    // 选项（默认为true）：false=否，true=是
    enableOnlineTTS: true,

    // 【配置项7：TTS英音发音配置】
    // 选项（默认为英音男1）：英音男1，英音男2，英音女1，英音女2，英音女3
    britishTTS: "英音男1",

    // 【配置项8：TTS美音发音配置】
    // 选项（默认为美音女1）：美音男1，美音男2，美音男3，美音男4，美音男5，美音女1，美音女2，美音女3，美音女4
    americanTTS: "美音女1",

    // 【配置项9：是否展开义项】
    // 选项（默认为true）：false=否，true=是
    unfoldSense: true,

    // 【配置项10：给粗体固定句式添加荧光笔下划线】
    // 选项（默认为true）：false=不添加，true=添加
    phrasesAddUnderline: true,

    // 【配置项11：是否在手机欧路词典里使用更大的屏宽】
    // 选项（默认为true）：false=否，true=是
    widerScreenEudic: true,

    // 【配置项12：是否隐藏手机欧路自带的hr标签】
    // 选项（默认为true）：true=是，false=否
    hideEudicAPPHr: true,

    // 【配置项13：是否在导航栏每个选项首尾加宽留白】（方便双击或单击时不会点到文字而触发查词功能）
    // 选项（默认为true）：true=是，false=否
    NavbarMargin: true,

    // 【配置项14：是否例句中文独占一行】
    // 选项（默认为true）：false=否，true=是
    examplesChineseBeAlone: true,

    // 【配置项15：是否禁用配置词头】（深蓝词典用户需要禁用，因为不兼容）
    // 选项（默认为false）：false=否，true=是
    disableConfigWord: false,
};
/* ********用户自定义配置区结束******** */


var dict_entry_index = {};


(function () {
    var _userAgent = navigator.userAgent.toLowerCase();
    if ((/windows\snt/.test(_userAgent)
        && /chrome|firefox/.test(_userAgent)) || jQuery('.gdarticle').css('-webkit-column-gap') == '1px') {
        console.log('Windows Chrome/firefox detected.');
        if (/windows\snt/.test(_userAgent) && /chrome|firefox/.test(_userAgent))
            $("a.speaker").click(function () {
                fSound = $(this).attr('href');
                fSound = fSound.replace('sound://', '');
                (new Audio(fSound)).play();
            });
        return jQuery;
    } else {
        return jQuery.noConflict(true)
    }
})()

(function ($) {    
    // avoiding repeated loading
    if ($(".maldpe #is-maldpe-loaded").length) {
        return;
    } else {
        $('<div id="is-maldpe-loaded" style="display: none;"></div>').appendTo('.maldpe');
    }

    // variable declaration area
    const MALDPE_NAVBAR_CLASS = "maldpe-nav";
    const MALDPE_NAVBAR_SELECTOR = "." + MALDPE_NAVBAR_CLASS;
    
    const MALDPE_BRITISH_TTS_OPTION = ["英音男1", "英音男2", "英音女1", "英音女2", "英音女3"];
    const MALDPE_AMERICAN_TTS_OPTION = ["美音男1", "美音男2", "美音男3", "美音男4", "美音男5", "美音女1", "美音女2", "美音女3", "美音女4"];

    const MALDPE_PREFIX_LOCALSTORAGE = "MALDPE_"

    const MALDPE_POS = {
        "noun": "n.",
        "adjective": "adj.",
        "adverb": "adv.",
        "abbreviation": "abbr.",
        "adverb, adjective": "adv., adj.",
        "verb": "v.",
        "phrasal verb": "phrasal v.",
        "exclamation": "interj.",
        "idiom": "idiom",
        "conjunction": "conj.",
        "preposition": "prep.",
        "modal verb": "modal v.",
        "combining form": "combining form",
        "prefix": "prefix",
        "linking verb": "linking v.",
        "suffix": "suffix",
        "number": "num.",
        "pronoun": "pron.",
        "ordinal number": "ordinal num.",
        "determiner": "det.",
        "auxiliary verb": "aux. v.",
        "indefinite article": "indefinite a.",
        "definite article": "definite a.",
        "infinitive marker": "infinitive marker",
        "symbol": "symbol",
        "adjective, adverb": "adj., adv.",
        "adverb, preposition": "adv., prep.",
        "noun, adjective": "n., adj.",
        "short form": "short form",
        "noun, exclamation": "n., interj.",
        "exclamation, noun": "interj., n.",
        "determiner, pronoun": "det., pron.",
        "preposition, adverb": "prep., adv.",
        "adjective, exclamation": "adj., interj.",
        "preposition, conjunction, adverb": "prep., conj., adv.",
        "adjective, adverb, exclamation": "adj., adv., interj.",
        "adjective, noun": "adj., n.",
        "adverb, exclamation": "adv., interj.",
        "noun, determiner": "n., det.",
        "determiner, pronoun, adverb": "det., pron., adv.",
        "conjunction, preposition": "conj., prep.",
        "adverb, pronoun, conjunction": "adv., pron., conj.",
        "determiner, adjective": "det., adj.",
        "determiner, ordinal number": "det., ordinal num.",
        "noun, abbreviation": "n., abbr.",
        "exclamation, adjective": "interj., adj.",
        "conjunction, adverb": "conj., adv.",
        "adjective, pronoun": "adj., pron.",
        "number, determiner": "num., det.",
        "noun, verb": "n., v.",
        "pronoun, determiner": "pron., det.",
        "preposition, conjunction": "prep., conj.",
        "exclamation, adverb, pronoun": "interj., adv., pron.",
        "adverb, conjunction": "adv., conj.",
        "adverb, noun": "adv., n.",
    }

    var globalAudio = new Audio();
    var conciseMeaning = !maldpeCfg.unfoldSense;

    var maldpeCfgDuplicate = Object.assign({}, maldpeCfg);


    // main

    initialize();

    fnHideEudicAPPHr(maldpeCfg.hideEudicAPPHr);

    fnShowTranslation(maldpeCfg.showTranslation);

    fnWiderScreenEudic(maldpeCfg.widerScreenEudic);

    fnShowTraditional(maldpeCfg.showTraditional);

    fnUnfoldSense(maldpeCfg.unfoldSense);

    fnShowNavbar(maldpeCfg.showNavbar);

    fnTouchToTranslate(maldpeCfg.touchToTranslate);

    termNumberClickEvent();

    fnPhrasesAddUnderline(maldpeCfg.phrasesAddUnderline);

    fnSelectNavbarAll(maldpeCfg.selectNavbarAll);

    maldpeConfigEvent();

    fnDisableConfigWord(maldpeCfg.disableConfigWord);

    // main end

    // function declaration area
    function fnDisableConfigWord(itemValue) {
        if (itemValue) {
            $("#maldpe-config .config-item, #maldpe-config button").remove();
            $("#maldpe-config .head-title").text("配置词头已被禁用");
        }
    }

    function configDataConvertToCfg(maldpeCfgKey, localStorageKey) {
        _localStorageValue = localStorage.getItem(localStorageKey);
        _maldpeCfgValue = maldpeCfg[maldpeCfgKey];
        if (maldpeCfgKey === "britishTTS") {
            return MALDPE_BRITISH_TTS_OPTION[parseInt(_localStorageValue)]
        } else if (maldpeCfgKey === "americanTTS") {
            return MALDPE_AMERICAN_TTS_OPTION[parseInt(_localStorageValue)]
        }

        if (typeof _maldpeCfgValue === "number") {
            return parseInt(_localStorageValue);
        } else if (typeof _maldpeCfgValue === "boolean") {
            return _localStorageValue === "1";
        } else {
            return _localStorageValue;
        }
    }

    function configDataConvertToUI(maldpeCfgKey) {
        _maldpeCfgValue = maldpeCfg[maldpeCfgKey];
        if (maldpeCfgKey === "britishTTS") {
            return MALDPE_BRITISH_TTS_OPTION.indexOf(_maldpeCfgValue);
        } else if (maldpeCfgKey === "americanTTS") {
            return MALDPE_AMERICAN_TTS_OPTION.indexOf(_maldpeCfgValue);
        }

        if (typeof _maldpeCfgValue === "number") {
            return _maldpeCfgValue.toString();
        } else if (typeof _maldpeCfgValue === "boolean") {
            return _maldpeCfgValue ? "1" : "0";
        } else {
            return _maldpeCfgValue;
        }
    }

    function maldpeConfigEvent() {
        if (maldpeCfg.disableConfigWord)
            return

        // 默认收起选项
        foldConfigOption();

        // 选项展开或选中事件
        $("#maldpe-config .config-item .select").click(function(e) {
            e.stopPropagation();
            if (!$(this).hasClass("unfolded") && $(e.target).is(".option")) {
                // console.log("ddddddd");
                $(this).attr("cfg-selected", $(e.target).index().toString());
            }
            cfgSelectToggleFold($(this));
        });

        // 高亮选项
        $('#maldpe-config .config-item .select .option').mouseover(function(){
            if (!$(this).parent().hasClass("unfolded"))
                $(this).addClass('highlighted');
        }).mouseout(function(){
            $(this).removeClass('highlighted');
        });

        // 保存配置
        $('#maldpe-config button[type="submit"]').click(function() {
            foldConfigOption();


            $("#maldpe-config .config-item").each(function() {
                _id = $(this).attr("id");
                _value = $(this).find(".select").attr("cfg-selected");
                localStorage.setItem(MALDPE_PREFIX_LOCALSTORAGE + _id, _value);
            })

            $(this).text("保存配置完毕！");

            _$this = $(this)
            $('#maldpe-config button[type="reset"]').text("重置配置")
            setTimeout(function() {
                _$this.text("保存配置");
            }, 1000);
        });

        // 重置配置
        $('#maldpe-config button[type="reset"]').click(function() {

            removeKeysStartingWith(MALDPE_PREFIX_LOCALSTORAGE);
            maldpeCfg = maldpeCfgDuplicate;
            updateConfigToUI();
            foldConfigOption();

            $(this).text("重置配置完毕！");
            _$this = $(this)

            $('#maldpe-config button[type="submit"]').text("保存配置")
            setTimeout(function() {
                _$this.text("重置配置");
            }, 1000);
        });
    }

    function removeKeysStartingWith(prefix) {
        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);
            if (key.startsWith(prefix)) {
                localStorage.removeItem(key);
            }
        }
    }

    function foldConfigOption() {
        $("#maldpe-config .config-item .select").each(function() {
            $(this).removeClass("unfolded");
            cfgSelectToggleFold($(this));
        })
    }

    function refreshOptions($obj) {
        // 刷新选项
        _selectedIndex = $obj.attr("cfg-selected");
        $obj.find(".option").each(function() {
            if ($(this).index().toString() !== _selectedIndex) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    }

    function cfgSelectToggleFold($obj) {
        var _foldHeight = 0;
        var _objectHeight = $obj.find(".option").eq(0).outerHeight();
        $obj.find(".option").each(function() {
            _foldHeight = _foldHeight + $(this).outerHeight();
            if ($obj.attr("cfg-selected") === $(this).index().toString())
                _objectHeight = $(this).outerHeight();

        })

        _objectHeight = _objectHeight.toString() + "px"
        if ($obj.hasClass("unfolded")) {
                $obj.find(".option").show();
                $obj.animate({height: _foldHeight.toString() + "px"
            }, {
                duration: 300,
                complete: function() {  
                    // 完全展开时
                }
            });

        } else {
            $obj.animate({height: _objectHeight
                }, {
                duration: 300,
                complete: function() {  
                    // 完全收起时
                    refreshOptions($obj);
                }
            });
        }
        $obj.toggleClass("unfolded");
    }

    function chineseToggle() {
        if (maldpeCfg.showTranslation === 1) {
            $(".maldpe .mw_zh").fadeOut("fast");
        } else {
            $(".maldpe .mw_zh").fadeIn("fast");
        }

        maldpeCfg.showTranslation = maldpeCfg.showTranslation === 1 ? 0 : 1;
    }

    function fnHideEudicAPPHr(itemValue) {
        itemValue && isEudicAPP() && $(".maldpe").parent().find("hr").not('.maldpe hr').hide();
    }

    function fnPhrasesAddUnderline(itemValue) {
        if (itemValue) {
            $('.maldpe h2.dre').addClass('underline');
        } else {
            $('.maldpe h2.dre').removeClass('underline');
        }
    }

    function termNumberClickEvent() {
        $(".sense > .sn_letter").click(function(e){
            e.stopPropagation();
            $(this).siblings(".vis_w").slideToggle('fast');
        });

        $(".maldpe .sn_block_num, .maldpe h2.dre").click(function(e) {
            e.stopPropagation(); 
            if ($(this).hasClass("sn_block_num")) {
                var _$objEle = $(this).parents(".sblock.sblock_entry, .sblock.sblock_dro");
            } else {
                var _$objEle = $(this).parents(".dro");
            }

            var _isVisible = _$objEle.find(".sense .vis_w, .sense .usageref_block, .sense .dxs_nonl, .sense .usage_par").is(":visible");
            if (_isVisible) {
                _$objEle.find(".sense .vis_w, .sense .usageref_block, .sense .dxs_nonl, .sense .usage_par").slideUp("fast");
            } else {
                _$objEle.find(".sense .vis_w, .sense .usageref_block, .sense .dxs_nonl, .sense .usage_par").slideDown("fast");
            }
        });
    }

    function fnTouchToTranslate(itemValue) {
        if (!itemValue) 
            return;

        // examples
        $(".maldpe ul.vis > li.vi").click(function(e) {
            e.stopPropagation();
            if ($(this).find(".mw_zh").is(":visible")) {
                $(this).find(".mw_zh").slideUp("fast");
            } else {
                $(this).find(".mw_zh").slideDown("fast");
            }
        });

       // 项义点击事件：显示和隐藏中文
        $(".maldpe span.def_text, .maldpe .both_text, .maldpe .syn_par_t").click(function(event){
            event.stopPropagation();
            if ($(this).find(".mw_zh").length) {
                $(this).find(".mw_zh").fadeToggle("fast");
            } else {
                $(this).siblings("span.def_text, span.isyns").find(".mw_zh").fadeToggle("fast");
            }
        });

        // Usage用法释义
        $(".maldpe span.ud_text").click(function(e){
            e.stopPropagation();
            $(this).find(".mw_zh").fadeToggle("fast");
        });

        // 固定搭配释义
        $(".maldpe span.un_text").click(function(e){
            e.stopPropagation();
            $(this).find(".mw_zh").fadeToggle("fast");
        }); 
    }

    function fnShowNavbar(itemValue) {
        if (!itemValue)
            return;

        addNavigation();

        var doubleClickTimer;
        $(MALDPE_NAVBAR_SELECTOR).find("span")
        .on("click", function() {
            if ($(this).hasClass("active")) {
                clearTimeout(doubleClickTimer);
                _$thisObj = $(this);
                doubleClickTimer = setTimeout(function() {
                    console.log("navbar: chinese_toggle");
                    chineseToggle();
                }, 250);
            } else {
                console.log("navbar: index is changed");
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                showHideEntry($(this).text() === "All" ? -1 : $(this).index());
            }
        })
        .on("dblclick", function() {
            if ($(this).hasClass("active")) {
                clearTimeout(doubleClickTimer);
                console.log("navbar: doubleClick");

                const _selectors = {
                    allExpand: [
                        ".maldpe .sense .vis_w",
                        ".maldpe .sense .usageref_block",
                        ".maldpe .sense .dxs.dxs_nonl",
                        ".maldpe .sense .usage_par",
                    ],
                };

                if (conciseMeaning) {
                    // 全部展开
                    $(_selectors.allExpand.join(", ")).slideDown("fast");
                } else {
                    // 全部折叠
                    $(_selectors.allExpand.join(", ")).slideUp("fast")
                }
                conciseMeaning = !conciseMeaning;
            }
        });
    }

    function addNavigation() {
        // 已添加不添加
        if ($(".maldpe-nav").length)
            return;


        var _$eles = $(".maldpe .entry");
        // 没有entry不添加
        if (_$eles.length < 1)
            return;

        var container = $("<div></div>").addClass(MALDPE_NAVBAR_CLASS);
        for (var i = 0; i < _$eles.length; i++) {
            var _$sp = $("<span></span>");
            var _$pos = _$eles.eq(i).find(".hw_d .fl").eq(0);
            _$pos = _$pos.length && _$pos.text();
            // _$pos = !_$pos ? _$eles.eq(i).find(".headword").text() : _$pos;
            _$sp.text(MALDPE_POS[_$pos] ? MALDPE_POS[_$pos] : _$pos);
            
            _$cl = _$eles.children(".cxs").find(".cl");
            if (_$cl.length >= 1) {
                _$sp.text(_$cl.text() === "past tense of" ? "past tense" : _$sp.text());
                _$sp.text(_$cl.text() === "past participle of" ? "past participle" : _$sp.text());
            }

            if (!maldpeCfg.selectNavbarAll && i === 0) {
                _$sp.addClass("active");
            }
            container.append(_$sp);
        }

        // 添加All
        var _$spAll = $("<span>All</span>");
        maldpeCfg.selectNavbarAll && _$spAll.addClass('active');
        container.append(_$spAll);
        
        showHideEntry(maldpeCfg.selectNavbarAll ? -1 : 0);

        // 不能加在.maldpe里
        // $(".maldpe").prepend(container);
        container.insertBefore($(".maldpe").eq(0));

        if (maldpeCfg.NavbarMargin)
            $(".maldpe-nav span").css({"padding": ".2rem 1.2rem"})
    }

    function fnSelectNavbarAll(itemValue) {
        // 词性导航滚动到最右边
        if (itemValue && maldpeCfg.showNavbar) {
            var _$navbar = $(".maldpe-nav");
            // 由于手机欧路滚动失效，所以加10000个像素
            _$navbar.scrollLeft(_$navbar.scrollLeft() + _$navbar.width() + 10000);
        }
    }

    function showHideEntry(index) {
        var _$eles = $(".maldpe .entry");
        for (var i = 0; i < _$eles.length; i++) {
            if (index === i || index < 0) {
                _$eles.eq(i).show();
                _$eles.eq(i).children(".hw_d").css({"border-top-left-radius": "10px", "border-top-right-radius": "10px"});
            } else {
                _$eles.eq(i).hide();
            }
        }
        if (index < 0)
            _$eles.children(".hw_d").css({"border-top-left-radius": "", "border-top-right-radius": ""});
            
    }
    
    function fnUnfoldSense(itemValue) {
        !itemValue && $(".maldpe .sense .vis_w, .maldpe .sense .usage_par, .maldpe .sense .dxs").hide();
    } 

    function fnShowTraditional(itemValue) {
        if (itemValue) {
            $(".maldpe .mw_zh.simple").remove();
        } else {
            $(".maldpe .mw_zh.traditional").remove();
        }
    }

    function fnWiderScreenEudic(itemValue) {
        itemValue && isEudicAPP() && $(".maldpe").parent().css({
            "margin": "5px",
            "padding": "0"
        });
    }

    function fnExamplesChineseBeAlone(itemValue) {
        if (!itemValue)
            $(".maldpe .vi_content .mw_zh").css({"display": "inline", "margin-left": "0"});
    }

    function initialize() {
        $(".maldpe").show();

        updateConfigFromLocalStorage();

        updateConfigToUI();

        fnExamplesChineseBeAlone(maldpeCfg.examplesChineseBeAlone);

        // 去掉义项数字的空格
        $(".entry_v2 .sblocks>.sblock>.sblock_c>.sn_block_num").each(function(){
            $(this).text($(this).text().trim());
        })
    }

    function updateConfigFromLocalStorage() {
        if (maldpeCfg.disableConfigWord)
            return

        // 从LocalStorage更新配置
        for (var i = localStorage.length - 1; i >= 0; i--) {
            var _key = localStorage.key(i);
            if (_key.startsWith(MALDPE_PREFIX_LOCALSTORAGE)) {
                var _maldpeCfgKey = _key.replace(MALDPE_PREFIX_LOCALSTORAGE, "");
                maldpeCfg[_maldpeCfgKey] = configDataConvertToCfg(_maldpeCfgKey, _key);
            }
        }

        // 需要重新更新以下变量
        conciseMeaning = !maldpeCfg.unfoldSense;
    }

    function updateConfigToUI() {
        if (maldpeCfg.disableConfigWord)
            return

        // 更新配置到配置词头
        Object.keys(maldpeCfg).forEach(function(key) {
            $("#maldpe-config > #" + key + " .select")
                .attr("cfg-selected", configDataConvertToUI(key));            
        })
    }

    function fnHideEudicAPPHr(itemValue) {
        itemValue && isEudicAPP() && $(".maldpe").parent().find("hr").not('.maldpe hr').hide();
    }

    function fnShowTranslation(itemValue) {
        // !itemValue && $(".maldpe .mw_zh").hide();
    // 选项（默认为0）：0-全部隐藏，1-全部显示，2-仅隐藏例句中文，3-仅显示例句中文，4-仅隐藏义项中文，5-仅显示义项中文
        (itemValue === 0) && $(".maldpe .mw_zh").hide();
        (itemValue === 1) && $(".maldpe .mw_zh").show();
        (itemValue === 2) && $(".maldpe .mw_zh").show() && $(".maldpe li.vi .mw_zh").hide();
        (itemValue === 3) && $(".maldpe .mw_zh").hide() && $(".maldpe li.vi .mw_zh").show();
        (itemValue === 4) && $(".maldpe .mw_zh").show() && $(".maldpe .def_text .mw_zh, .maldpe .un_text .mw_zh, .maldpe .sense > .mw_zh, .maldpe .syn_par_t > .mw_zh, .maldpe .isyns > .mw_zh").hide();
        (itemValue === 5) && $(".maldpe .mw_zh").hide() && $(".maldpe .def_text .mw_zh, .maldpe .un_text .mw_zh, .maldpe .sense > .mw_zh, .maldpe .syn_par_t > .mw_zh, .maldpe .isyns > .mw_zh").show();

    }

    function isEudic() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1;
    }

    function isEudicAPP() {
        var ua = navigator.userAgent.toLowerCase();
        return (ua.indexOf("eudic") > -1) && (ua.indexOf("android") > -1 || ua.indexOf("iphone") > -1);
    }

    function isEudicAPPIphone() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1 && ua.indexOf("iphone") > -1;
    }

    function isEudicAPPAndroid() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1 && ua.indexOf("android") > -1;
    }

    function isEudicPC() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("eudic") > -1 && ua.indexOf("windows") > -1;
    }

    // the end

    /** godwin668@qq.com 提供支持**/
    // TTS 相关
    const ttsConfig = {
        '美音女1': { locale: 'en-US', voice: 'en-US-MichelleNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '美音女2': { locale: 'en-US', voice: 'en-US-AriaNeural', pitch: '+0Hz', rate: '+20%', volume: '+0%' },
        '美音女3': { locale: 'en-US', voice: 'en-US-AnaNeural', pitch: '+0Hz', rate: '+20%', volume: '+0%' },
        '美音女4': { locale: 'en-US', voice: 'en-US-JennyNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '美音男1': { locale: 'en-US', voice: 'en-US-ChristopherNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '美音男2': { locale: 'en-US', voice: 'en-US-EricNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '美音男3': { locale: 'en-US', voice: 'en-US-GuyNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '美音男4': { locale: 'en-US', voice: 'en-US-RogerNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '美音男5': { locale: 'en-US', voice: 'en-US-SteffanNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '英音女1': { locale: 'en-GB', voice: 'en-GB-SoniaNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '英音女2': { locale: 'en-GB', voice: 'en-GB-MaisieNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '英音女3': { locale: 'en-GB', voice: 'en-GB-LibbyNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '英音男1': { locale: 'en-GB', voice: 'en-GB-RyanNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' },
        '英音男2': { locale: 'en-GB', voice: 'en-GB-ThomasNeural', pitch: '+0Hz', rate: '+0%', volume: '+0%' }
    };

    (async function initTTS() {
        const ttsService = createEdgeTTS();

        maldpeCfg.enableOnlineTTS && $(".maldpe div.vi_content").after('<example-audio-ai><a class="audio_uk" href="##"></a><a class="audio_us" href="##"></a></example-audio-ai>'); 
        maldpeCfg.enableOnlineTTS && $(".maldpe example-audio-ai a.audio_uk, .maldpe example-audio-ai a.audio_us").click(function(e){
            e.stopPropagation();
            e.preventDefault();
            globalAudio.src = ""; // 在ios上TTS要先把src设置为空，第一次播放才会发音

            selectedTTS = $(this).hasClass("audio_uk") ? maldpeCfg.britishTTS : maldpeCfg.americanTTS;
            eleExText = $(this).parent().siblings("div.vi_content").clone();
            eleExText.find(".mw_zh").remove();
            speak_text = eleExText.text().replace(/\(.*?\)/g, "");
            if (speak_text.includes("/")) {
                slash_word = speak_text.match(/\w+(?:\/\w+)+/)[0];
                splited_word = slash_word.split("/");
                list_result = [];
                for (each of splited_word) {
                    list_result.push(speak_text.replace(slash_word, each));
                }
                speak_text = list_result.join("\nor ");
            }
            ttsService.playText(speak_text, ttsConfig[selectedTTS]);
        });
    })();

    function createEdgeTTS() {
        const TRUSTED_CLIENT_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
        const SYNTH_URL = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}`;
        const AUDIO_FORMAT = 'audio-24khz-48kbitrate-mono-mp3';

        const BINARY_DELIM = 'Path:audio\r\n';
        const CONTENT_TYPE_JSON = 'Content-Type:application/json\r\nPath:speech.config\r\n\r\n';
        const CONTENT_TYPE_SSML = 'Content-Type:application/ssml+xml\r\nPath:ssml\r\n\r\n';

        let socket = null, requests = {};

        const createSSML = (inputText, { locale, voice, pitch, rate, volume }) =>
                `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${locale}">
                    <voice name="${voice}"><prosody pitch="${pitch}" rate="${rate}" volume="${volume}">${inputText}</prosody></voice>
                </speak>`;

        function generateSecMsGecToken() {
            // Get the current time in Windows file time format (100ns intervals since 1601-01-01)
            let ticks = BigInt((Date.now() / 1000 + 11644473600) * 10000000);

            // Round down to the nearest 5 minutes (3,000,000,000 * 100ns = 5 minutes)
            ticks -= ticks % BigInt(3000000000);

            // Create the string to hash by concatenating the ticks and the trusted client token
            const strToHash = `${ticks}${TRUSTED_CLIENT_TOKEN}`;

            // Compute the SHA256 hash
            const hash = CryptoJS.SHA256(strToHash);

            // Return the hexadecimal representation of the hash
            return hash.toString(CryptoJS.enc.Hex).toUpperCase();
        }

        async function ensureSocketReady() {
            if (!socket || socket.readyState === WebSocket.CLOSED) {
                const reopened = !!socket; // Check if the socket existed before

                const Sec_MS_GEC = generateSecMsGecToken();
                const Sec_MS_GEC_VERSION = '1-130.0.2849.68';

                socket = new WebSocket(`${SYNTH_URL}&Sec-MS-GEC=${Sec_MS_GEC}&Sec-MS-GEC-Version=${Sec_MS_GEC_VERSION}`);
                socket.onmessage = onSocketMessage;
                socket.onclose = () => console.warn('WebSocket closed.');
                socket.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    socket.close();
                };
                await new Promise((resolve) => {
                    socket.onopen = () => {
                        console.log(reopened ? 'WebSocket reopened.' : 'WebSocket opened.');
                        setAudioOutputFormat();
                        resolve();
                    };
                });
            } else if (socket.readyState === WebSocket.CONNECTING) {
                await new Promise((resolve) => socket.addEventListener('open', resolve, { once: true }));
            }
        }

        async function sendWhenReady(message) {
            await ensureSocketReady();
            socket.send(message);
        }

        async function setAudioOutputFormat(format = AUDIO_FORMAT) {
            const messagePayload = JSON.stringify({ context: { synthesis: { audio: { outputFormat: format } } } });
            await sendWhenReady(`${CONTENT_TYPE_JSON}${messagePayload}`);
        }

        async function onSocketMessage(event) {
            if (!(event.data instanceof Blob)) return;

            const dataText = await event.data.text();
            const requestId = dataText.match(/X-RequestId:(.*?)\r\n/)[1];
            const request = requests[requestId];
            if (!request) return;

            const arrayBuffer = await event.data.arrayBuffer();
            const dataView = new DataView(arrayBuffer);

            /* Check if the audio fragment is the last one */
            if (dataView.getUint8(0) === 0x00 && dataView.getUint8(1) === 0x67 && dataView.getUint8(2) === 0x58) {
                if (request.audioDataChunks.length) {
                    const audioBlob = new Blob(request.audioDataChunks, { type: 'audio/mp3' });
                    request.resolve(URL.createObjectURL(audioBlob));
                    delete requests[requestId];
                }
            } else {
                const audioStartIndex = dataText.indexOf(BINARY_DELIM) + BINARY_DELIM.length;
                const audioData = new Blob([arrayBuffer.slice(audioStartIndex)]);
                request.audioDataChunks.push(audioData);
            }
        }

        async function sendSSMLRequest(inputText, config) {
            const ssml = createSSML(inputText, config);
            const requestId = uuidv4().replace(/-/g, '');
            const requestMessage = `X-RequestId:${requestId}\r\n${CONTENT_TYPE_SSML}${ssml}`;

            requests[requestId] = { audioDataChunks: [], resolve: null, reject: null };
            await sendWhenReady(requestMessage);

            return new Promise((resolve, reject) => {
                requests[requestId].resolve = resolve;
                requests[requestId].reject = reject;
            });
        }

        function uuidv4() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        }

        async function playText(inputText, config) {
            try {
                const audioUrl = await sendSSMLRequest(inputText, config);
                if (!globalAudio.paused) globalAudio.pause();
                globalAudio.src = audioUrl;

                const cleanup = () => URL.revokeObjectURL(audioUrl);
                globalAudio.addEventListener('ended', cleanup, { once: true });
                globalAudio.play();
            } catch (error) {
                console.error('Failed to play audio:', error);
            }
        }

        return { playText };
    }

});