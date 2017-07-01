/**
* INCLUDE EXTENSION TYPOSCRIPT
*/

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/setup.txt">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:mask/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tgfit/Configuration/TypoScript/Extensions/gridelements_setup.ts">


/**
* Fix missing styles.content.get
*/
lib.content.get = CONTENT
lib.content.get {
    table = tt_content
    select {
        orderBy = sorting
        where = colPos=0
    }
}

/**
 * Base and setup
 *
 */
config.baseURL = http://{$tgfit.domain}/
#config.tx_frontend_editing = 1

# Realurl aktivieren
config.tx_realurl_enable = 1

page = PAGE
page {
    10 = FLUIDTEMPLATE
    10 {
        templateName = Default

        templateRootPaths {
            10 = EXT:tgfit/Resources/Private/Templates
        }

        partialRootPaths {
            10 = EXT:tgfit/Resources/Private/Partials
        }

        layoutRootPaths {
            10 = EXT:tgfit/Resources/Private/Layouts
        }
    }
}
config.meta {
    # Viewport
    viewport = width=device-width, initial-scale=1
    #viewport = width=device-width, initial-scale=1.0, minimal-ui, user-scalable=no, maximum-scale=1.0

    X-UA-Compatible = IE=edge
    X-UA-Compatible.httpEquivalent = 1
}


/**
* Favicons
*
*/

page.headerData {
    301 = COA
    301.1 = TEXT
    301.1.value (
<link rel="apple-touch-icon" sizes="57x57" href="typo3conf/ext/tgfit/Resources/Public/Favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="typo3conf/ext/tgfit/Resources/Public/Favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="typo3conf/ext/tgfit/Resources/Public/Favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="typo3conf/ext/tgfit/Resources/Public/Favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="typo3conf/ext/tgfit/Resources/Public/Favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="typo3conf/ext/tgfit/Resources/Public/Favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="typo3conf/ext/tgfit/Resources/Public/Favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="typo3conf/ext/tgfit/Resources/Public/Favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="typo3conf/ext/tgfit/Resources/Public/Favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="typo3conf/ext/tgfit/Resources/Public/Favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="typo3conf/ext/tgfit/Resources/Public/Favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="typo3conf/ext/tgfit/Resources/Public/Favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="typo3conf/ext/tgfit/Resources/Public/Favicon/favicon-16x16.png">
<link rel="manifest" href="typo3conf/ext/tgfit/Resources/Public/Favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="typo3conf/ext/tgfit/Resources/Public/Favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
    )
}

/**
 * Styles and scripts
 *
 */
page {
    includeCSS {
        vendor = EXT:tgfit/Resources/Public/Css/vendor.css
        style = EXT:tgfit/Resources/Public/Css/main.css
    }

    includeJS {
        modernizr = EXT:tgfit/Resources/Public/JavaScript/vendor/modernizr.js
    }

    includeJSFooterlibs {
        vendors = EXT:tgfit/Resources/Public/JavaScript/vendor.js
    }

    includeJSFooter {
        plugins = EXT:tgfit/Resources/Public/JavaScript/plugins.js
        main = EXT:tgfit/Resources/Public/JavaScript/main.js
        scheduler = EXT:tgfit/Resources/TemplateDevelopment/app/bricks/schedule/schedule_script.js
    }
}

/**
* Template Variables
*
*/
page.10.variables {
    sitename = TEXT
    sitename.value = TG Fit

    rootPage = TEXT
    rootPage.value = {$pageIds.root}

    logo = IMG_RESOURCE
    logo {
        file = EXT:tgfit/Resources/Public/Images/tgfit_logo.svg
    }

    tglogo = IMG_RESOURCE
    tglogo {
        file = EXT:tgfit/Resources/Public/Images/TGLogo.svg
    }

    pagelayout = TEXT
    pagelayout.data = levelfield:-2,backend_layout_next_level,slide
    pagelayout.override.field = backend_layout

    pageareacolor = TEXT
    pageareacolor {
        data = levelfield:-2,tx_mask_page_area,slide
        override.field = tx_mask_page_area
        #override.if.isTrue.field = tx_mask_page_area
    }

    /**
    * Menu-Prototype
    *
    */
    navigation = HMENU
    navigation {
        # entryLevel = 1
        # special = directory
        # special.value = pid

        1 = TMENU
        1 {
            wrap = <ul class="list-inline">|</ul>
            expAll = 1
            noBlur = 1
            NO = 1
            NO {
                ATagTitle {
                    field = title
                    fieldRequired = nav_title
                }

                wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
                # HTML-encode special characters according to the PHP-function htmlSpecialChars
                stdWrap.htmlSpecialChars = 1
            }

            ACT < .NO
            ACT {
                wrapItemAndSub = <li class="active first">|</li> |*| <li class="active">|</li> |*| <li class="active last">|</li>
            }

            CUR < .ACT
        }

        2 < .1
        2.wrap = <ul class="subnav">|</ul>
    }

    /**
    * Footercontent (Start)
    *
    */
    footer = COA
    footer {
        wrap = <footer class="container"><div class="row">|</div></footer>

        10 = FILES
        10 {
            references {
                table = pages
                fieldName = tx_mask_tglogo
                uid = {$pageIds.root}
            }

            renderObj = IMAGE
            renderObj {
                file.import.data = file:current:originalUid // file:current:uid
                altText.field = Turngemeinde Biberach 1847 e.V.
                titleText.field = Webseite der Turngemeinde Biberach 1847 e.V.
                params = class="img-responsive"

                stdWrap.typolink.parameter.field = tx_mask_tghome
                stdWrap.typolink.extTarget = _blank
                stdWrap.outerWrap = <div class="col-sm-4">|</div>
            }
        }

        20 = CONTENT
        20 {
            table = pages
            select {
                pidInList = 0
                uidInList = {$pageIds.root}
            }

            renderObj = COA
            renderObj {
                wrap = <div class="col-sm-4">|</div>
                10 = TEXT
                10 {
                    field = tx_mask_tginfo
                    #parseFunc = < lib.parseFunc_RTE
                }
            }
        }

        30 = COA
        30 {
            wrap = <div class="col-sm-4">|</div>
            10 = TEXT
            10.value = <b>Info-Themen</b>

            20 = HMENU
            20 {
                special = directory
                special.value = {$pageIds.infoRoot}
                1 = TMENU
                1 {
                    wrap = <ul class="list-unstyled">|</ul>
                    NO = 1
                    NO {
                        wrapItemAndSub = <li>|</li>
                    }
                }
            }
        }
    }
}

# Libs

lib {
    //
    // stage
    // colPos 11
    stage < lib.content.get
    stage.select.where = colPos = 11

    //
    // Pagecontent
    // colPos 21
    contentarea < lib.content.get
    contentarea.select.where = colPos = 21
}

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/setup.txt">