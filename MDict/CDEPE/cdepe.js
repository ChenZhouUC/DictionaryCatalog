/* ********用户自定义配置区开始******** */
// 可直接在词典里搜索以下任意词头，进入配置界面，常用配置无需修改此js文件。
// “cdepeconfig”、“cdepecfg”、“cdecfg”、“cpcfg”、“cdeconfig”、“cpconfig”、“cdepe”、“剑桥配置”、“剑桥设置”、“配置”和“设置”。

var cdepeCfg = {
    // 【配置项1：中文翻译选项】（点击"词性导航"白色块可显示/隐藏中文翻译）
    // 选项（默认为0）：0-全部隐藏，1-全部显示，2-仅隐藏例句中文，3-仅显示例句中文，4-仅隐藏义项中文，5-仅显示义项中文
    showTranslation: 0,

    // 【配置项2：是否显示词性导航栏】（自动添加二级导航栏：词典导航栏）
    // 选项（默认为true）：false=不显示，true=显示
    showNavbar: true,

    // 【配置项3：是否显示义项导航栏】
    // 选项（默认为true）：false=不显示，true=显示
    showNavbarSense: true,

    // 【配置项4：是否选中词性导航all】
    // 选项（默认为true）：false=否，true=是
    selectNavbarAll: true,

    // 【配置项5：是否选中词典导航all】（词性导航栏下的二级导航栏）
    // 选项（默认为true）：false=否，true=是
    selectNavbarDictAll: true,

    // 【配置项6：是否选中义项导航all】
    // 选项（默认为true）：false=否，true=是
    selectNavbarSenseAll: true,

    // 【配置项7：是否不展示只有一个选项的义项导航】
    // 选项（默认为true）：false=否，true=是
    SkipOneOptNavSense: true,

    // 【配置项8：是否在词性导航栏每个选项首尾加宽留白】（方便双击或单击时不会点到文字而触发查词功能）
    // 选项（默认为true）：true=是，false=否
    NavbarMargin: true,

    // 【配置项9：是否启用英文点译功能】（单句显示/隐藏中文）
    // 选项（默认为true）：false=否，true=是
    touchToTranslate: true,

    // 【配置项10：是否启用在线TTS发音】（需要高版本浏览器内核。发音图标为灰色。Mdict暂不支持。）
    // 选项（默认为true）：false=否，true=是
    enableOnlineTTS: true,

    // 【配置项11：TTS英音发音配置】
    // 选项（默认为英音男1）：英音男1，英音男2，英音女1，英音女2，英音女3
    britishTTS: "英音男1",

    // 【配置项12：TTS美音发音配置】
    // 选项（默认为美音女1）：美音男1，美音男2，美音男3，美音男4，美音男5，美音女1，美音女2，美音女3，美音女4
    americanTTS: "美音女1",

    // 【配置项13：是否展开义项】
    // 选项（默认为false）：false=否，true=是
    unfoldSense: false,

    // 【配置项14：是否在手机欧路词典里使用更大的屏宽】
    // 选项（默认为true）：false=否，true=是
    widerScreenEudic: true,

    // 【配置项15：是否隐藏手机欧路自带的hr标签】
    // 选项（默认为true）：true=是，false=否
    hideEudicAPPHr: true,

    // 【配置项16：是否例句中文独占一行】
    // 选项（默认为true）：false=否，true=是
    examplesChineseBeAlone: true,

    // 【配置项17：是否禁用配置词头】（深蓝词典用户需要禁用，因为不兼容）
    // 选项（默认为false）：false=否，true=是
    disableConfigWord: false,

    // 【配置项18：是否展开折叠块1】（紫色粗线折叠块）
    // 选项（默认为true）：false=不展开，true=展开
    unfoldBox1: true,

    // 【配置项19：是否展开折叠块2】（浅米色折叠块：More examples、SMART Vocabulary）
    // 选项（默认为false）：false=不展开，true=展开
    unfoldBox2: false,

    // 【配置项20：是否展开折叠块3】（蓝色折叠块）
    // 选项（默认为false）：false=不展开，true=展开
    unfoldBox3: false,

    // 【配置项21：是否展开折叠块4】（黄色折叠块：Grammar、Idioms、Phrasal verbs）
    // 选项（默认为false）：false=不展开，true=展开
    unfoldBox4: false,

    // 【配置项22：是否展开折叠块5】（橙色折叠块：American Dictionary、Business English）
    // 选项（默认为false）：false=不展开，true=展开
    unfoldBox5: false,

    // 【配置项23：在词典导航栏选择新词典时，如果内容折叠，则自动展开内容】
    // 选项（默认为true）：false=不自动展开，true=自动展开
    dictAutoUnfold: true,

    // 【配置项24：点击义项导航栏时，如果内容折叠，则自动展开内容】
    // 选项（默认为true）：false=不自动展开，true=自动展开
    senseAutoUnfold: true,

    // 【配置项25：简化黄色折叠块标题】
    // 简化SMART Vocabulary: related words and phrases为Smart vocabulary
    // 简化Thesaurus: synonyms, antonyms, and examples为Thesaurus
    // 选项（默认为true）：false=不简化，true=简化
    simpleFoldBox4Title: true,

    // 【配置项26：隐藏例句来源】
    // 隐藏Examples from literature中的图书图标
    // 隐藏Examples of xxx中的例句来源
    // 隐藏Collocations with xxx中的例句来源
    // 选项（默认为true）：false=不隐藏，true=隐藏
    hideSentenceOrigin: true,

    // 【配置项27：义项导航栏隐藏数字导航】
    // 选项（默认为true）：false=不隐藏，true=隐藏
    hideNavNum: true,

    // 【配置项28：预设主题选项】（此设置可能会覆盖某些配置项）
    // 选项（默认为0）：0-默认主题（不做任何修改），1-官网主题，2-欢迎大家分享自己的主题，后续更新可以加上。
    applyPresetTheme: 0,


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
    if ($(".cdepe #is-cdepe-loaded").length) {
        return;
    } else {
        $('<div id="is-cdepe-loaded" style="display: none;"></div>').appendTo('.cdepe');
    }


    // variable declaration area
    const CDEPE_NAVBAR_CLASS = "cdepe-nav";
    const CDEPE_NAVBAR_CLASS_DICT = "cdepe-nav-dict";
    const CDEPE_NAVBAR_CLASS_SENSE = "cdepe-nav-sense";
    const CDEPE_NAVBAR_CLASS_SENSE_TITLE = "cdepe-nav-sense-title";
    const CDEPE_NAVBAR_SELECTOR = "." + CDEPE_NAVBAR_CLASS;
    const CDEPE_NAVBAR_SELECTOR_DICT = "." + CDEPE_NAVBAR_CLASS_DICT;
    const CDEPE_NAVBAR_SELECTOR_SENSE = "." + CDEPE_NAVBAR_CLASS_SENSE;
    const CDEPE_NAVBAR_SELECTOR_SENSE_TITLE = "." + CDEPE_NAVBAR_CLASS_SENSE_TITLE;
    
    const CDEPE_BRITISH_TTS_OPTION = ["英音男1", "英音男2", "英音女1", "英音女2", "英音女3"];
    const CDEPE_AMERICAN_TTS_OPTION = ["美音男1", "美音男2", "美音男3", "美音男4", "美音男5", "美音女1", "美音女2", "美音女3", "美音女4"];

    const CDEPE_PREFIX_LOCALSTORAGE = "CDEPE_"

    const CDEPE_POS = {
    "noun": "n.",
    "adjective": "adj.",
    "adverb": "adv.",
    "abbreviation": "abbr.",
    "adverb, adjective": "adv., adj.",
    "verb": "v.",
    "phrasal verb": "phr. v.",
    "exclamation": "interj.",
    "idiom": "idiom",
    "conjunction": "conj.",
    "preposition": "prep.",
    "modal verb": "modal v.",
    "combining form": "comb. form",
    "prefix": "prefix",
    "linking verb": "link. v.",
    "suffix": "suffix",
    "number": "num.",
    "pronoun": "pron.",
    "ordinal number": "ordinal num.",
    "determiner": "det.",
    "auxiliary verb": "aux. v.",
    "indefinite article": "indef. a.",
    "definite article": "def. a.",
    "infinitive marker": "inf. marker",
    "symbol": "symbol",
}

    var globalAudio = new Audio();
    var conciseMeaning = !cdepeCfg.unfoldSense;

    var cdepeCfgDuplicate = Object.assign({}, cdepeCfg);


    // main

    initialize();

    fnHideEudicAPPHr(cdepeCfg.hideEudicAPPHr);

    fnShowTranslation(cdepeCfg.showTranslation);

    fnWiderScreenEudic(cdepeCfg.widerScreenEudic);

    fnUnfoldBox1(cdepeCfg.unfoldBox1);

    fnUnfoldBox2(cdepeCfg.unfoldBox2);

    fnUnfoldBox3(cdepeCfg.unfoldBox3);

    fnUnfoldBox4(cdepeCfg.unfoldBox4);

    fnUnfoldBox5(cdepeCfg.unfoldBox5);

    fnUnfoldSense(cdepeCfg.unfoldSense);

    fnShowNavbar(cdepeCfg.showNavbar);

    fnShowNavbarSense(cdepeCfg.showNavbarSense);

    fnTouchToTranslate(cdepeCfg.touchToTranslate);

    cdepeClickEvent();

    fnSelectNavbarAll(cdepeCfg.selectNavbarAll);

    fnSelectNavbarDictAll(cdepeCfg.selectNavbarDictAll);

    fnSelectNavbarSenseAll(cdepeCfg.selectNavbarSenseAll);

    fnSimpleFoldBox4Title(cdepeCfg.simpleFoldBox4Title);

    fnHideSentenceOrigin(cdepeCfg.hideSentenceOrigin);

    fnImgClickEvent();

    cdepeConfigEvent();

    fnApplyPresetTheme(cdepeCfg.applyPresetTheme);

    // fnDisableConfigWord(cdepeCfg.disableConfigWord);





    // main end

    function fnHideSentenceOrigin(itemValue) {
        itemValue && $(".cdepe .dexamp .egsource, .cdepe .lbb > .dsource").hide();
    }


    function fnApplyPresetTheme(itemValue) {
        if (itemValue === 1) {
            $(".cdepe .dsense").css({"border-top": "solid 2px #5d2fc1"});
            $(".cdepe .dsense_h").css({"color": "#5d2fc1", "border-bottom": "none"});
        }
    }

    function fnImgClickEvent() {
        $(".cdepe .dimg").click(function(e){
            if ($(this).attr("expanded") !== undefined) {
                $(this).removeAttr("expanded");
                $(this).css({"width": "", "height": ""});
            } else {
                $(this).attr("expanded", "");
                $(this).css({"width": "100%", "height": "auto"});
            }
        });
    }


    // function declaration area
    function replaceWithAbbreviations(text) {
        // 将文本拆分成单词数组
        let words = text.split(', ');

        // 替换每个单词
        let replacedWords = words.map(word => {
            // 去除单词两边的空格
            word = word.trim();
            // 检查单词是否在映射表中
            if (CDEPE_POS.hasOwnProperty(word)) {
                // 替换为映射表中的缩写
                return CDEPE_POS[word];
            }
            // 如果单词不在映射表中，则返回原单词
            return word;
        });

        // 将替换后的单词数组重新组合成字符串
        return replacedWords.join(', ');
        }

    function fnUnfoldBox1(itemValue) {
        if (itemValue) {
            $(".cdepe .pr.dsense .dsense_h").nextAll().show();
            $(".cdepe .pr.dsense .dsense_h").parent().attr("expanded", "");
        } else {
            $(".cdepe .pr.dsense .dsense_h").nextAll().hide();
            $(".cdepe .pr.dsense .dsense_h").parent().removeAttr("expanded");
        }
    }

    function fnUnfoldBox2(itemValue) {
        if (itemValue) {
            $(".cdepe section > header.ca_h").next().show();
            $(".cdepe section > header.ca_h").parent().attr("expanded", "");
        } else {
            $(".cdepe section > header.ca_h").next().hide();
            $(".cdepe section > header.ca_h").parent().removeAttr("expanded");
        }
    }

    function fnUnfoldBox3(itemValue) {
        if (itemValue) {
            $(".cdepe div.sense-body .phrase-body").show();
            $(".cdepe div.sense-body .phrase-head").parent().attr("expanded", "");
        } else {
            $(".cdepe div.sense-body .phrase-body").hide();
            $(".cdepe div.sense-body .phrase-head").parent().removeAttr("expanded");
        }
    }


    function fnUnfoldBox4(itemValue) {
        if (itemValue) {
            $(".cdepe div.xref > h3.bb").next().show();
            $(".cdepe div.xref > h3.bb").parent().attr("expanded", "");
        } else {
            $(".cdepe div.xref > h3.bb").next().hide();
            $(".cdepe div.xref > h3.bb").parent().removeAttr("expanded");
        }
    }

    function fnUnfoldBox5(itemValue) {
        if (itemValue) {
            $(".cdepe .dataset div.cpexamps .cpexamps-head, .cdepe div#dataset-example .c_h, .cdepe div.link .di-head").next().show();
            $(".cdepe .dataset div.cpexamps .cpexamps-head, .cdepe div#dataset-example .c_h, .cdepe div.link .di-head").parent().attr("expanded", "");
        } else {
            $(".cdepe .dataset div.cpexamps .cpexamps-head, .cdepe div#dataset-example .c_h, .cdepe div.link .di-head").next().hide();
            $(".cdepe .dataset div.cpexamps .cpexamps-head, .cdepe div#dataset-example .c_h, .cdepe div.link .di-head").parent().removeAttr("expanded");
        }
    }

    function fnDisableConfigWord(itemValue) {
        if (itemValue) {
            $("#cdepe-config .config-item, #cdepe-config button").remove();
            $("#cdepe-config .head-title").text("配置词头已被禁用");
        }
    }

    function configDataConvertToCfg(cdepeCfgKey, localStorageKey) {
        _localStorageValue = localStorage.getItem(localStorageKey);
        _cdepeCfgValue = cdepeCfg[cdepeCfgKey];
        if (cdepeCfgKey === "britishTTS") {
            return CDEPE_BRITISH_TTS_OPTION[parseInt(_localStorageValue)]
        } else if (cdepeCfgKey === "americanTTS") {
            return CDEPE_AMERICAN_TTS_OPTION[parseInt(_localStorageValue)]
        }

        if (typeof _cdepeCfgValue === "number") {
            return parseInt(_localStorageValue);
        } else if (typeof _cdepeCfgValue === "boolean") {
            return _localStorageValue === "1";
        } else {
            return _localStorageValue;
        }
    }

    function configDataConvertToUI(cdepeCfgKey) {
        _cdepeCfgValue = cdepeCfg[cdepeCfgKey];
        if (cdepeCfgKey === "britishTTS") {
            return CDEPE_BRITISH_TTS_OPTION.indexOf(_cdepeCfgValue);
        } else if (cdepeCfgKey === "americanTTS") {
            return CDEPE_AMERICAN_TTS_OPTION.indexOf(_cdepeCfgValue);
        }

        if (typeof _cdepeCfgValue === "number") {
            return _cdepeCfgValue.toString();
        } else if (typeof _cdepeCfgValue === "boolean") {
            return _cdepeCfgValue ? "1" : "0";
        } else {
            return _cdepeCfgValue;
        }
    }

    function cdepeConfigEvent() {
        if (cdepeCfg.disableConfigWord)
            return

        // 默认收起选项
        foldConfigOption();

        // 选项展开或选中事件
        $("#cdepe-config .config-item .select").click(function(e) {
            e.stopPropagation();
            if (!$(this).hasClass("unfolded") && $(e.target).is(".option")) {
                // console.log("ddddddd");
                $(this).attr("cfg-selected", $(e.target).index().toString());
            }
            cfgSelectToggleFold($(this));
        });

        // 高亮选项
        $('#cdepe-config .config-item .select .option').mouseover(function(){
            if (!$(this).parent().hasClass("unfolded"))
                $(this).addClass('highlighted');
        }).mouseout(function(){
            $(this).removeClass('highlighted');
        });

        // 保存配置
        $('#cdepe-config button[type="submit"]').click(function() {
            foldConfigOption();


            $("#cdepe-config .config-item").each(function() {
                _id = $(this).attr("id");
                _value = $(this).find(".select").attr("cfg-selected");
                localStorage.setItem(CDEPE_PREFIX_LOCALSTORAGE + _id, _value);
            })

            $(this).text("保存配置完毕！");

            _$this = $(this)
            $('#cdepe-config button[type="reset"]').text("重置配置")
            setTimeout(function() {
                _$this.text("保存配置");
            }, 1000);
        });

        // 重置配置
        $('#cdepe-config button[type="reset"]').click(function() {

            removeKeysStartingWith(CDEPE_PREFIX_LOCALSTORAGE);
            cdepeCfg = cdepeCfgDuplicate;
            updateConfigToUI();
            foldConfigOption();

            $(this).text("重置配置完毕！");
            _$this = $(this)

            $('#cdepe-config button[type="submit"]').text("保存配置")
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
        $("#cdepe-config .config-item .select").each(function() {
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
        if (cdepeCfg.showTranslation === 1) {
            $(".cdepe .zh").fadeOut("fast");
        } else {
            $(".cdepe .zh").fadeIn("fast");
        }

        cdepeCfg.showTranslation = cdepeCfg.showTranslation === 1 ? 0 : 1;
    }

    function fnHideEudicAPPHr(itemValue) {
        itemValue && isEudicAPP() && $(".cdepe").parent().find("hr").not('.cdepe hr').hide();
    }

    function fnPhrasesAddUnderline(itemValue) {
        if (itemValue) {
            $('.cdepe h2.dre').addClass('underline');
        } else {
            $('.cdepe h2.dre').removeClass('underline');
        }
    }

    function cdepeClickEvent() {
        // 义项按钮展开与折叠事件
        $(".cdepe .senseButton").click(function(e) {
            e.stopPropagation();
            if ($(this).parent().attr("expanded") !== undefined) {
                $(this).parent().siblings(".def-body").slideUp("fast");
                $(this).parent().removeAttr("expanded");
            } else {
                $(this).parent().siblings(".def-body").slideDown("fast");
                $(this).parent().attr("expanded", "");
            }
        });



        // 橙色折叠块展开与折叠事件
        $(".cdepe div.cpexamps .cpexamps-head, .cdepe div#dataset-example .c_h, .cdepe div.link .di-head").click(function(e) {
            e.stopPropagation();
            if ($(this).parent().attr("expanded") !== undefined) {
                $(this).next().slideUp("fast");
                $(this).parent().removeAttr("expanded");
            } else {
                $(this).next().slideDown("fast");
                $(this).parent().attr("expanded", "");
            }
        });


        // 黄色折叠块展开与折叠事件
        $(".cdepe div.xref > h3.bb").click(function(e) {
            e.stopPropagation();
            if ($(this).parent().attr("expanded") !== undefined) {
                $(this).next().slideUp("fast");
                $(this).parent().removeAttr("expanded");
            } else {
                $(this).next().slideDown("fast");
                $(this).parent().attr("expanded", "");
            }
        });

        // 浅蓝色折叠块展开与折叠事件
        $(".cdepe div.sense-body .phrase-head").click(function(e) {
            e.stopPropagation();
            if ($(this).parent().attr("expanded") !== undefined) {
                $(this).next().slideUp("fast");
                $(this).parent().removeAttr("expanded");
            } else {
                $(this).next().slideDown("fast");
                $(this).parent().attr("expanded", "");
            }
        });


        // 浅米色折叠块展开与折叠事件
        $(".cdepe section > header.ca_h").click(function(e) {
            e.stopPropagation();
            if ($(this).parent().attr("expanded") !== undefined) {
                $(this).next().slideUp("fast");
                $(this).parent().removeAttr("expanded");
            } else {
                $(this).next().slideDown("fast");
                $(this).parent().attr("expanded", "");
            }
        });


        // 一级释义折叠块展开与折叠事件
        $(".cdepe .pr.dsense .dsense_h").click(function(e) {
            e.stopPropagation();
            if ($(this).parent().attr("expanded") !== undefined) {
                $(this).nextAll().slideUp("fast");
                $(this).parent().removeAttr("expanded");
            } else {
                $(this).nextAll().slideDown("fast");
                $(this).parent().attr("expanded", "");
            }
        });

    }

    function fnTouchToTranslate(itemValue) {
        if (!itemValue) 
            return;

        // examples
        $(".cdepe .examp, .cdepe .dexamp").click(function(e) {
            e.stopPropagation();
            if ($(this).find(".zh").is(":visible")) {
                $(this).find(".zh").slideUp("fast");
            } else {
                $(this).find(".zh").slideDown("fast");
            }
        });

       // 项义点击事件：显示和隐藏中文
        $(".cdepe div.def").click(function(event){
            event.stopPropagation();
            if ($(this).find(".zh").length) {
                $(this).find(".zh").fadeToggle("fast");
            } 
            // else {
            //     $(this).siblings("span.def_text, span.isyns").find(".mw_zh").fadeToggle("fast");
            // }
        });

       //  // Usage用法释义
       //  $(".cdepe span.ud_text").click(function(e){
       //      e.stopPropagation();
       //      $(this).find(".mw_zh").fadeToggle("fast");
       //  });

       //  // 固定搭配释义
       //  $(".cdepe span.un_text").click(function(e){
       //      e.stopPropagation();
       //      $(this).find(".mw_zh").fadeToggle("fast");
       //  }); 
    }

    function addNavClickEvent() {

        var doubleClickTimer;
        $(CDEPE_NAVBAR_SELECTOR).find("span")
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

                // const _selectors = {
                //     allExpand: [
                //         ".cdepe .sense .vis_w",
                //         ".cdepe .sense .usageref_block",
                //         ".cdepe .sense .dxs.dxs_nonl",
                //         ".cdepe .sense .usage_par",
                //     ],
                // };

                if (conciseMeaning) {
                    // 全部展开
                    // $(_selectors.allExpand.join(", ")).slideDown("fast");

                    // fnUnfoldBox1
                    // $(".cdepe .pr.dsense .dsense_h").nextAll().slideDown("fast"); 
                    $(".cdepe .pr.dsense .dsense_h").nextAll().each(function(e) {
                        if (!$(this).hasClass("daccord")) {
                            $(this).slideDown("fast");
                        }
                    });
                    $(".cdepe .pr.dsense .dsense_h").parent().attr("expanded", "");

                    // fnUnfoldBox2
                    $(".cdepe section > header.ca_h").next().slideDown("fast");
                    $(".cdepe section > header.ca_h").parent().attr("expanded", "");

                    // fnUnfoldBox3
                    $(".cdepe div.sense-body .phrase-body").slideDown("fast");
                    $(".cdepe div.sense-body .phrase-head").parent().attr("expanded", "");

                    // fnUnfoldBox4
                   $(".cdepe div.xref > h3.bb").next().slideDown("fast");
                    $(".cdepe div.xref > h3.bb").parent().attr("expanded", "");

                    // fnUnfoldBox5
                    $(".cdepe div.cpexamps .cpexamps-head, .cdepe div#dataset-example .c_h, .cdepe div.link .di-head").next().slideDown("fast");
                    $(".cdepe div.cpexamps .cpexamps-head, .cdepe div#dataset-example .c_h, .cdepe div.link .di-head").parent().attr("expanded", "");

                    // fnUnfoldSense
                    $(".cdepe .senseButton").parent().siblings(".def-body").slideDown("fast");
                    $(".cdepe .senseButton").parent().attr("expanded", "");


                } else {
                    // 全部折叠
                    // $(_selectors.allExpand.join(", ")).slideUp("fast");

                    // fnUnfoldBox2
                    $(".cdepe section > header.ca_h").next().slideUp("fast");
                    $(".cdepe section > header.ca_h").parent().removeAttr("expanded");

                    // fnUnfoldBox3
                    $(".cdepe div.sense-body .phrase-body").slideUp("fast");
                    $(".cdepe div.sense-body .phrase-head").parent().removeAttr("expanded");

                    // fnUnfoldBox4
                    $(".cdepe div.xref > h3.bb").next().slideUp("fast");
                    $(".cdepe div.xref > h3.bb").parent().removeAttr("expanded");

                    // fnUnfoldBox5
                    $(".cdepe div.cpexamps .cpexamps-head, .cdepe div#dataset-example .c_h, .cdepe div.link .di-head").next().slideUp("fast");
                    $(".cdepe div.cpexamps .cpexamps-head, .cdepe div#dataset-example .c_h, .cdepe div.link .di-head").parent().removeAttr("expanded");

                    // fnUnfoldSense
                    $(".cdepe .senseButton").parent().siblings(".def-body").slideUp("fast");
                    $(".cdepe .senseButton").parent().removeAttr("expanded");


                }
                conciseMeaning = !conciseMeaning;
            }
        });
    }

    function addNavSenseClickEvent() {

        $(CDEPE_NAVBAR_SELECTOR_SENSE).find("span")
        .click(function(e) {
            console.log("navbar: index is changed");
            _is_white_block = $(this).hasClass("active");
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            showHideSense($(this).text() === "All" ? -1 : Number($(this).attr("index")), $(this).parent().parent(), true, _is_white_block);
        });

    }

    function fnShowNavbar(itemValue) {
        if (!itemValue)
            return;

        addOrUpdateNavigation();


        // // 词典导航(即二级导航栏)单击事件
        // $(CDEPE_NAVBAR_SELECTOR_DICT).find("span")
        // .click(function(e) {
        //     console.log("navbar: index is changed");
        //     _is_white_block = $(this).hasClass("active");
        //     $(this).siblings().removeClass('active');
        //     $(this).addClass('active');
        //     showHidePage($(this).text() === "All" ? -1 : $(this).index(), true, _is_white_block);

        //     // 刷新主导航对应的entry
        //     _$hostNavbarActive = $(".cdepe-nav span.active");
        //     showHideEntry(_$hostNavbarActive.text() === "All" ? -1 : _$hostNavbarActive.index());

        //     // 刷新主导航选项
        //     addOrUpdateNavigation();
        // })

        // 词典导航(即二级导航栏)单击事件
        var doubleClickTimer;
        $(CDEPE_NAVBAR_SELECTOR_DICT).find("span")
        .on("click", function() {
            var _time_limit = $(this).hasClass("active") ? 250 : 0;
            clearTimeout(doubleClickTimer);
            _$thisObj = $(this);
            doubleClickTimer = setTimeout(function() {
                console.log("navbar: index is changed");
                _is_white_block = _$thisObj.hasClass("active");
                _$thisObj.siblings().removeClass('active');
                _$thisObj.addClass('active');
                showHidePage(_$thisObj.text() === "All" ? -1 : _$thisObj.index(), true, _is_white_block);

                // 刷新主导航对应的entry
                _$hostNavbarActive = $(".cdepe-nav span.active");
                showHideEntry(_$hostNavbarActive.text() === "All" ? -1 : _$hostNavbarActive.index());

                // 刷新主导航选项
                addOrUpdateNavigation();
            }, _time_limit);
        })
        .on("dblclick", function() {
            if ($(this).hasClass("active")) {
                _$cdepe_nav_dict = $(CDEPE_NAVBAR_SELECTOR_DICT);
                clearTimeout(doubleClickTimer);
                console.log("navbar: doubleClick");
                if (_$cdepe_nav_dict.attr("hide_box2") === undefined) {
                    _$cdepe_nav_dict.attr("hide_box2", "");
                    $(".cdepe .daccord").slideUp();
                    console.log("隐藏");
                } else {
                    _$cdepe_nav_dict.removeAttr("hide_box2");
                    $(".cdepe .daccord").slideDown();
                    console.log("显示");
                }                
                conciseMeaning = !conciseMeaning;
            }
        });

    }


    function fnShowNavbarSense(itemValue) {
        if (!itemValue)
            return;

        addNavigationSense();


    }

    function removeParentheses(str) {
        if (typeof str !== 'string') {
            return "0";
        }

        // 去掉首尾的空白字符
        str = str.trim();
        // 如果字符串的首尾字符是括号，则去掉它们
        if (str.startsWith('(') && str.endsWith(')')) {
            return str.slice(1, -1);
        }
        return str;
    }

    function addNavigationSense() {
        // 已添加则返回
        if ($(CDEPE_NAVBAR_CLASS_SENSE).length) {
            return;
        }


        $(".cdepe .entry-body .entry-body__el").each(function(e) {

            var container = $("<div></div>").addClass(CDEPE_NAVBAR_CLASS_SENSE);
            var _title_text = ": " + $(this).find(".pos-header .posgram .pos").text()
            var containerTitle = $(`<div>content${_title_text}</div>`).addClass(CDEPE_NAVBAR_CLASS_SENSE_TITLE);
            $(this).prepend(container);
            $(this).prepend(containerTitle);

            // 标题点击事件，展开/折叠
            containerTitle.click(function(e) {
                if ($(this).next().attr("expanded") !== undefined) {
                    $(this).next().css({"display": "flex", "white-space": "nowrap"});
                    $(this).next().removeAttr("expanded");
                } else {
                    $(this).next().css({"display": "block", "white-space": "normal"});
                    $(this).next().attr("expanded", "");
                }
            });


            var _$eles = $(this).find(".pos-body > .dsense, .pos-body > .xref");

            for (var i = 0; i < _$eles.length; i++) {
                var _$sp = $("<span></span>");
                var _$pos = _$eles.eq(i).find(".guideword").eq(0);
                _$pos = _$pos.length && _$pos.text();
                _label = removeParentheses(_$pos).toLowerCase();
                if (_label === "0") {
                    _$pos = _$eles.eq(i).children(".phrase-title").eq(0);
                    _$pos = _$pos.length && _$pos.text();
                    _label = _$pos;
                    console.log(_label);
                };

                if (_label === 0) {
                    _label = _$eles.eq(i).children("h3.bb").text();
                };

                if (_label === "") {
                    if (cdepeCfg.hideNavNum) {
                        continue
                    } else {
                        _label = _$eles.eq(i).index();
                    }
                };

                _$sp.attr("index", _$eles.eq(i).index())
                _$sp.text(_label);

                if (!cdepeCfg.selectNavbarSenseAll && i === 0) {
                    _$sp.addClass("active");
                };
                container.append(_$sp);
            }

            // 没有entry不添加
            if (container.children().length < 1 || (container.children().length === 1 && cdepeCfg.SkipOneOptNavSense)) {
                $(this).children(CDEPE_NAVBAR_SELECTOR_SENSE).remove();
                $(this).children(CDEPE_NAVBAR_SELECTOR_SENSE_TITLE).remove();
                return;
            }

            // 添加All
            var _$spAll = $("<span>All</span>");
            cdepeCfg.selectNavbarSenseAll && _$spAll.addClass('active');
            container.append(_$spAll);
            // 只有一个all的情况下，默认选中all
            ($(".cdepe-nav-sense").children().length === 1) && _$spAll.addClass('active');    
            
            showHideSense(cdepeCfg.selectNavbarSenseAll ? -1 : 0, $(this));


        });


        // 义项导航点击事件
        addNavSenseClickEvent();        

    }

    function addOrUpdateNavigation() {
        // 已添加则清空重新读取选项
        if ($(".cdepe-nav").length) {
            container = $(".cdepe-nav");
            container.empty();
            var _dataId = $(".cdepe-nav-dict span.active").text().toLowerCase();
            _dataId = _dataId === "all" ? $(".cdepe .page").children().eq(0).attr("data-id") : _dataId;
        } else {
            var container = $("<div></div>").addClass(CDEPE_NAVBAR_CLASS);
            container.insertBefore($(".cdepe").eq(0));   
            var _dataId = $(".cdepe .page").children().eq(0).attr("data-id");
        }

        var _$eles = $(`.cdepe [data-id="${_dataId}"] .entry-body__el`);
        // 没有entrye且无词性子导航，不添加
        if (_$eles.length < 1 && !$(".cdepe-nav-dict").length)
            return;

        for (var i = 0; i < _$eles.length; i++) {
            var _$sp = $("<span></span>");
            var _pos = _$eles.eq(i).children(".pos-header.dpos-h").eq(0).find(".pos.dpos").map(function(){
                return $(this).text();
            }).get().join(', ');
            _pos = CDEPE_POS[_pos] ? CDEPE_POS[_pos] : _pos;
            _pos = replaceWithAbbreviations(_pos);
            _$sp.text(_pos);

            if (!cdepeCfg.selectNavbarAll && i === 0) {
                _$sp.addClass("active");
            }
            container.append(_$sp);
        }

        // 添加All
        var _$spAll = $("<span>All</span>");
        cdepeCfg.selectNavbarAll && _$spAll.addClass('active');
        container.append(_$spAll);
        // 只有一个all的情况下，默认选中all
        ($(".cdepe-nav").children().length === 1) && _$spAll.addClass('active');    
        
        showHideEntry(cdepeCfg.selectNavbarAll ? -1 : 0);

        if (cdepeCfg.NavbarMargin)
            $(".cdepe-nav span").css({"padding": ".2rem 1.2rem"});

        // 主导航点击事件
        addNavClickEvent();

        // 已添加不添加
        if ($(".cdepe-nav-dict").length)
            return;

        // 添加二级导航栏
        var containerSub = $("<div></div>").addClass(CDEPE_NAVBAR_CLASS_DICT);
        _$pages = $(".cdepe .page").children()
        for (var i = 0; i < _$pages.length; i++) {
            var _$sp = $("<span></span>");
            _label = _$pages.eq(i).attr("data-id").toUpperCase();
            _label = _label === "COMBINATIONS" ? "COLLOCATIONS" : _label;
            _$sp.text(_label);

            if (!cdepeCfg.selectNavbarDictAll && i === 0) {
                _$sp.addClass("active");
            }

            containerSub.append(_$sp);
        }

        // 添加All
        var _$spSubAll = $("<span>All</span>");
        cdepeCfg.selectNavbarDictAll && _$spSubAll.addClass('active');
        containerSub.append(_$spSubAll);
        
        showHidePage(cdepeCfg.selectNavbarDictAll ? -1 : 0);

        containerSub.insertBefore($(".cdepe").eq(0));
    }

    function fnSelectNavbarAll(itemValue) {
        // 词性导航滚动到最右边
        if (itemValue && cdepeCfg.showNavbar) {
            var _$navbar = $(".cdepe-nav");
            // 由于手机欧路滚动失效，所以加10000个像素
            _$navbar.scrollLeft(_$navbar.scrollLeft() + _$navbar.width() + 10000);
        }
    }

    
    function fnSelectNavbarDictAll(itemValue) {
        // 词性导航滚动到最右边
        if (itemValue && cdepeCfg.showNavbar) {
            var _$navbar = $(".cdepe-nav-dict");
            // 由于手机欧路滚动失效，所以加10000个像素
            _$navbar.scrollLeft(_$navbar.scrollLeft() + _$navbar.width() + 10000);
        }
    }



    function fnSelectNavbarSenseAll(itemValue) {
        // 词性导航滚动到最右边
        if (itemValue && cdepeCfg.showNavbarSense) {
            var _$navbar = $(".cdepe-nav-sense");
            // 由于手机欧路滚动失效，所以加10000个像素
            _$navbar.scrollLeft(_$navbar.scrollLeft() + _$navbar.width() + 10000);
        }
    }

    function showHideEntry(index) {
        if ($(".cdepe-nav-dict").length) {
            var _dataId = $(".cdepe-nav-dict span.active").text().toLowerCase();
        } else {
            var _dataId = $(".cdepe .page").children().eq(0).attr("data-id")
        }

        _dataId = _dataId === "all" ? $(".cdepe .page").children().eq(0).attr("data-id") : _dataId;

        var _$eles = $(`.cdepe [data-id="${_dataId}"] .entry-body__el`);
        // console.log(`.cdepe [data-id="${_dataId}"] .entry-body__el`);
        for (var i = 0; i < _$eles.length; i++) {
            if (index === i || index < 0) {
                _$eles.eq(i).show();
                if (i === 0) {
                    _$eles.eq(i).parents(".di-body").siblings(".pr.x.lbb.lb-cm").show();
                } else {
                    _$eles.eq(i).siblings(".pr.x.lbb.lb-cm").show();
                }
                // console.log("show" + _$eles.eq(i).parents(".di-body").siblings(".pr.x.lbb.lb-cm").length);

            } else {
                _$eles.eq(i).hide();
                if (i === 0) {
                    _$eles.eq(i).parents(".di-body").siblings(".pr.x.lbb.lb-cm").hide();
                } else {
                    _$eles.eq(i).siblings(".pr.x.lbb.lb-cm").hide();
                }

                // console.log("hide" + _$eles.eq(i).parents(".di-body").siblings(".pr.x.lbb.lb-cm").length);
            }
        }
    }

    function showHidePage(index, flag = false, _is_white_block = false) {
        var _$eles = $('.cdepe .page').children();
        var _isAll = $(".cdepe-nav-dict > span.active").text() === "All";
        var _$cdepe_nav_dict = $(".cdepe-nav-dict");

        // 非重复点击白块，清空切换标记
        if (!_is_white_block) {
            _$cdepe_nav_dict.removeAttr("expanded");
        }

        for (var i = 0; i < _$eles.length; i++) {
            if (index === i || index < 0) {
                _$eles.eq(i).show();

                // 自动展开内容
                if (flag) {
                    if ((!_is_white_block && cdepeCfg.dictAutoUnfold) || (_is_white_block && _$cdepe_nav_dict.attr("expanded") === undefined)) {
                        console.log("aaaaaaaaaaa");
                        if ((_isAll && i + 1 === _$eles.length) || (!_isAll)) {
                            _$cdepe_nav_dict.attr("expanded", "");
                            console.log("33333333");
                        }
                        _$eles.eq(i).find("div.cpexamps .cpexamps-head, div#dataset-example .c_h, div.link .di-head").next().slideDown("fast");
                        _$eles.eq(i).find("div.cpexamps .cpexamps-head, div#dataset-example .c_h, div.link .di-head").parent().attr("expanded", "");
                    } else if (_is_white_block && _$cdepe_nav_dict.attr("expanded") !== undefined) {
                        console.log("bbbbbbbbbb");
                        if ((_isAll && i + 1 === _$eles.length) || (!_isAll)) {
                            _$cdepe_nav_dict.removeAttr("expanded");
                        }
                        _$eles.eq(i).find("div.cpexamps .cpexamps-head, div#dataset-example .c_h, div.link .di-head").next().slideUp("fast");
                        _$eles.eq(i).find("div.cpexamps .cpexamps-head, div#dataset-example .c_h, div.link .di-head").parent().removeAttr("expanded");
                    }
                }

            } else {
                _$eles.eq(i).hide();
            }
        }
    }


    function showHideSense(index, _$ele, flag = false, _is_white_block = false) {
        var _$eles = _$ele.find(".pos-body > .pr, .pos-body > .xref");
        var _isAll = _$ele.find(".cdepe-nav-sense > span.active").text() === "All";
        var _$cdepe_nav_sense = _$ele.find(".cdepe-nav-sense");

        // 非重复点击白块，清空切换标记
        if (!_is_white_block) {
            _$cdepe_nav_sense.removeAttr("expanded");
        }

        for (var i = 0; i < _$eles.length; i++) {
            if (index === i || index < 0) {
                _$eles.eq(i).show();

                // 自动展开（黄色折叠块：Grammar、Idioms、Phrasal verbs）
                if (flag && _$eles.eq(i).hasClass("xref")) {
                    if ((!_is_white_block && cdepeCfg.senseAutoUnfold) || (_is_white_block && _$cdepe_nav_sense.attr("expanded") === undefined)) {
                        if ((_isAll && i + 1 === _$eles.length) || (!_isAll)) {
                            _$cdepe_nav_sense.attr("expanded", "");
                        }
                        _$eles.eq(i).children(".hax").slideDown("fast");
                        _$eles.eq(i).attr("expanded", "");
                    } else if (_is_white_block && _$cdepe_nav_sense.attr("expanded") !== undefined) {
                        if ((_isAll && i + 1 === _$eles.length) || (!_isAll)) {
                            _$cdepe_nav_sense.removeAttr("expanded");
                        }
                        _$eles.eq(i).children(".hax").slideUp("fast");
                        _$eles.eq(i).removeAttr("expanded");
                    }
                }

                // 自动展开一级释义、义项、蓝色折叠块
                if (flag && _$eles.eq(i).hasClass("pr")) {
                    if ((!_is_white_block && cdepeCfg.senseAutoUnfold) || (_is_white_block && _$cdepe_nav_sense.attr("expanded") === undefined)) {
                        if ((_isAll && i + 1 === _$eles.length) || (!_isAll)) {
                            _$cdepe_nav_sense.attr("expanded", "");
                        }
                        // 一级释义
                        // _$eles.eq(i).find(".dsense_h").nextAll().slideDown("fast");
                        _$eles.eq(i).find(".dsense_h").nextAll().each(function(e) {
                            if (!$(this).hasClass("daccord")) {
                                $(this).slideDown("fast");
                            }
                        });
                        _$eles.eq(i).find(".dsense_h").parent().attr("expanded", "");
                        // 义项
                        _$eles.eq(i).find(".senseButton").parent().siblings(".def-body").slideDown("fast");
                        _$eles.eq(i).find(".senseButton").parent().attr("expanded", "");
                        // 蓝色折叠块
                        _$eles.eq(i).find("div.sense-body .phrase-body").slideDown("fast");
                        _$eles.eq(i).find("div.sense-body .phrase-head").parent().attr("expanded", "");
                    } else if (_is_white_block && _$cdepe_nav_sense.attr("expanded") !== undefined) {
                            if ((_isAll && i + 1 === _$eles.length) || (!_isAll)) {
                                _$cdepe_nav_sense.removeAttr("expanded");
                            }
                            // 一级释义不收起，方便浏览义项
                            // _$eles.eq(i).find(".dsense_h").nextAll().slideUp("fast");
                            // _$eles.eq(i).find(".dsense_h").parent().removeAttr("expanded");
                            // 义项
                            _$eles.eq(i).find(".senseButton").parent().siblings(".def-body").slideUp("fast");
                            _$eles.eq(i).find(".senseButton").parent().removeAttr("expanded");
                            // 蓝色折叠块
                            _$eles.eq(i).find("div.sense-body .phrase-body").slideUp("fast");
                            _$eles.eq(i).find("div.sense-body .phrase-head").parent().removeAttr("expanded");
                    }
                }
            } else {
                _$eles.eq(i).hide();
            }
        }
    }

    function fnUnfoldSense(itemValue) {
        if (itemValue) {
            $(".cdepe .senseButton").parent().siblings(".def-body").show();
            $(".cdepe .senseButton").parent().attr("expanded", "");
        } else {
            $(".cdepe .senseButton").parent().siblings(".def-body").hide();
            $(".cdepe .senseButton").parent().removeAttr("expanded");
        }

    } 

    function fnShowTraditional(itemValue) {
        if (itemValue) {
            $(".cdepe .mw_zh.simple").remove();
        } else {
            $(".cdepe .mw_zh.traditional").remove();
        }
    }

    function fnWiderScreenEudic(itemValue) {
        itemValue && isEudicAPP() && $(".cdepe").parent().css({
            "margin": "5px",
            "padding": "0"
        });
    }

    function fnExamplesChineseBeAlone(itemValue) {
        if (!itemValue)
            $(".cdepe .eg > .zh.trans").css({"display": "inline", "margin-left": "5px"});
    }

    function initialize() {
        $(".cdepe").show();

        // 添加义项展开按钮
        ($(".cdepe div.ddef_h")).prepend($('<span></span>').addClass("senseButton"));

        // 将蓝色折叠块的more移到内部
        $('.dbtn').each(function(e) {
            $(this).appendTo($(this).prev());
        });

        updateConfigFromLocalStorage();

        updateConfigToUI();

        fnExamplesChineseBeAlone(cdepeCfg.examplesChineseBeAlone);

        // 有中文翻译的例句，前面的项目符号显示为绿色
        $(".cdepe .eg").each(function(e) {
            if ($(this).find(".zh").length) {
                $(this).parent().addClass("has-zh");
            }
        });

    }

    function updateConfigFromLocalStorage() {
        if (cdepeCfg.disableConfigWord)
            return

        // 从LocalStorage更新配置
        for (var i = localStorage.length - 1; i >= 0; i--) {
            var _key = localStorage.key(i);
            if (_key.startsWith(CDEPE_PREFIX_LOCALSTORAGE)) {
                var _cdepeCfgKey = _key.replace(CDEPE_PREFIX_LOCALSTORAGE, "");
                cdepeCfg[_cdepeCfgKey] = configDataConvertToCfg(_cdepeCfgKey, _key);
            }
        }

        // 需要重新更新以下变量
        conciseMeaning = !cdepeCfg.unfoldSense;
    }

    function updateConfigToUI() {
        if (cdepeCfg.disableConfigWord)
            return

        // 更新配置到配置词头
        Object.keys(cdepeCfg).forEach(function(key) {
            $("#cdepe-config > #" + key + " .select")
                .attr("cfg-selected", configDataConvertToUI(key));            
        })
    }

    function fnHideEudicAPPHr(itemValue) {
        itemValue && isEudicAPP() && $(".cdepe").parent().find("hr").not('.cdepe hr').hide();
    }

    function fnShowTranslation(itemValue) {
        // !itemValue && $(".cdepe .mw_zh").hide();
    // 选项（默认为0）：0-全部隐藏，1-全部显示，2-仅隐藏例句中文，3-仅显示例句中文，4-仅隐藏义项中文，5-仅显示义项中文
        (itemValue === 0) && $(".cdepe .zh").hide();
        (itemValue === 1) && $(".cdepe .zh").show();
        (itemValue === 2) && $(".cdepe .zh").show() && $(".cdepe .eg .zh").hide();
        (itemValue === 3) && $(".cdepe .zh").hide() && $(".cdepe .eg .zh").show();
        (itemValue === 4) && $(".cdepe .zh").show() && $(".cdepe .def .zh").hide();
        (itemValue === 5) && $(".cdepe .zh").hide() && $(".cdepe .def .zh").show();

    }

    function fnSimpleFoldBox4Title(itemValue) {
        if (!itemValue) {
            return;
        }

        // 简化SMART Vocabulary: related words and phrases为Smart vocabulary
        // 简化Thesaurus: synonyms, antonyms, and examples为Thesaurus
        $(".cdepe section > header.ca_h").each(function(e) {
            if ($(this).text().indexOf("SMART Vocabulary") !== -1) {
                _$iClone = $(this).children("i").clone(true);
                $(this).children("i").remove();
                _text = $(this).text().replace(" SMART Vocabulary: related words and phrases", "Smart vocabulary");
                $(this).empty();
                $(this).text(_text);
                $(this).prepend(_$iClone);
            }
            if ($(this).text().indexOf("Thesaurus") !== -1) {
                _$iClone = $(this).children("i").clone(true);
                $(this).children("i").remove();
                _text = $(this).text().replace(" Thesaurus: synonyms, antonyms, and examples ", "Thesaurus");
                $(this).empty();
                $(this).text(_text);
                $(this).prepend(_$iClone);
            }
        });


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
        cdepeCfg.enableOnlineTTS && $(".cdepe .eg.deg, .cdepe .eg-wrapper > .eg").after('<example-audio-ai><a class="audio_uk" href="##"></a><a class="audio_us" href="##"></a></example-audio-ai>'); 
        cdepeCfg.enableOnlineTTS && $(".cdepe example-audio-ai a.audio_uk, .cdepe example-audio-ai a.audio_us").click(function(e){
            e.stopPropagation();
            e.preventDefault();
            globalAudio.src = ""; // 在ios上TTS要先把src设置为空，第一次播放才会发音

            selectedTTS = $(this).hasClass("audio_uk") ? cdepeCfg.britishTTS : cdepeCfg.americanTTS;
            eleExText = $(this).parent().siblings(".eg").clone();
            eleExText.find(".zh").remove();
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