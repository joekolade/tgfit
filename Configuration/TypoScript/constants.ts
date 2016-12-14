tgfit {
  # domain = tgfit.de/typo3_dev
  domain = tgfit.local
}


/**
 * EXT:scriptmerger
 */
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
