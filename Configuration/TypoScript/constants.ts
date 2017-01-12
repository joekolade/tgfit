/**
 * INCLUDE EXTENSION TYPOSCRIPT
 */
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/constants.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/constants.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/constants.ts">
# <INCLUDE_TYPOSCRIPT: source="FILE:EXT:mask/Configuration/TypoScript/constants.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/constants.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/constants.txt">



tgfit {
  # domain = tgfit.de/typo3_dev
  domain = tgfit.local
}


pageIds {
  root = 1
  infoRoot = 4
}


styles.content.loginform.pid = 0
styles.content.textmedia.maxW = 870
styles.content.textmedia.maxWInText = 870
styles.content.textmedia.linkWrap.width = 1200m
styles.content.textmedia.linkWrap.height = 720m

/**
 * EXT:scriptmerger
 */
plugin.tx_scriptmerger {
  css {
    enable = 0
    minify.enable = 1
    #minify.ignore = .min.

    compress.enable = 0
    #compress.ignore = .gz.

    merge.enable = 1
    #merge.ignore = empty
  }
  javascript {
    enable = 1
    parseBody = 0

    minify.enable = 1
    #minify.ignore = ?,.min.

    compress.enable = 0
    #compress.ignore = ?,.gz.

    merge.enable = 1
    #merge.ignore
  }
}
