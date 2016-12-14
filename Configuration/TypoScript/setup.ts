/**
 * Base and setup
 *
 */
config.baseURL = http://{$tgfit.domain}/

page = PAGE
page {
  10 = FLUIDTEMPLATE
  10 {
      templateName = Default
      templateRootPaths {
          10 = EXT:tgfit/Resources/Private/Templates
      }
      layoutRootPaths {
          10 = EXT:tgfit/Resources/Private/Layouts
      }
      partialRootPaths {
          10 = EXT:tgfit/Resources/Private/Partials
      }
  }

  includeCSS {
    styles = EXT:tgfit/Resources/Public/Styles.scss
  }
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
    vendor = EXT:tgfit/Resources/Public/JavaScript/vendor.js
    plugins = EXT:tgfit/Resources/Public/JavaScript/plugins.js
 }
 includeJSFooter {
   main = EXT:tgfit/Resources/Public/JavaScript/main.js
 }
}

/**
 * Template Variables
 * 
 */
page.10.variables {
  
  sitename = TEXT
  sitename.value = TG Fit

  logo = IMG_RESOURCE
  logo {
    file = EXT:tgfit/Resources/Public/Images/tgfit_logo.svg
  }

  tglogo = IMG_RESOURCE
  tglogo {
    file = EXT:tgfit/Resources/Public/Images/TGLogo.svg
  }

  stage = TEXT
  stage.value = <div class="stage__item"><img src="typo3conf/ext/tgfit/Resources/Public/Images/tgfit_header_komplett.jpg" class="img-responsive"> <span class="sr-only">Herzsport, Gymnastik; Baby in Bewegung, Rückenfitness, Kettlebell, Lungensport, Pilates, Nordic Walking, Workout, Sport nach Krebs, Prävention</span></div>
  navigation
  content
}
