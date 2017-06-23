#
# INCLUDE EXTENSION TYPOSCRIPT
#

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/constants.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/constants.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/constants.ts">
# <INCLUDE_TYPOSCRIPT: source="FILE:EXT:mask/Configuration/TypoScript/constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/constants.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/constants.txt">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tgfit/Configuration/TypoScript/Extensions/fluid-styled-content.ts_constants">

tgfit {
    # domain = tgfit.de/typo3_dev
    domain = tgfit.local
}

pageIds {
    root = 1
    infoRoot = 4
}

styles.content.loginform.pid = 0
styles.content.textmedia.maxW = 900
styles.content.textmedia.maxWInText = 900
styles.content.textmedia.linkWrap.width = 1200m
styles.content.textmedia.linkWrap.height = 720m

#
# EXT:scriptmerger
#

plugin.tx_scriptmerger {
    css {
        enable = 1
        minify.enable = 1
        #minify.ignore = .min.

        compress.enable = 0
        #compress.ignore = .gz.

        merge.enable = 1
        #merge.ignore = empty
    }

    javascript {
        enable = 1
        parseBody = 1

        minify.enable = 1
        #minify.ignore = ?,.min.

        compress.enable = 0
        #compress.ignore = ?,.gz.

        merge.enable = 1
        #merge.ignore
    }
}

#
# EXT:cs_seo
#

plugin.tx_csseo.social.defaultImage = typo3conf/ext/tgfit/Resources/Public/Images/TG_RGB.jpg
plugin.tx_csseo.social.openGraph.image.width = 1187
plugin.tx_csseo.social.openGraph.image.height = 658c
plugin.tx_csseo.hreflang.enable = 0
