/**
 * INCLUDE EXTENSION TYPOSCRIPT
 */
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:mask/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/setup.txt">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tgfit/Configuration/TypoScript/Extensions/gridelements_setup.ts">



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

  /**
   * stage
   *
   * colPos 11
   */
  stage = TEXT
  stage.value = <div class="stage__item"><img src="typo3conf/ext/tgfit/Resources/Public/Images/tgfit_header_komplett.jpg" class="img-responsive"> <span class="sr-only">Herzsport, Gymnastik; Baby in Bewegung, Rückenfitness, Kettlebell, Lungensport, Pilates, Nordic Walking, Workout, Sport nach Krebs, Prävention</span></div>
  stage < styles.content.get
  stage.select.where = colPos = 11

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
   * Pagecontent
   *
   * colPos 21
   */
  content < styles.content.get
  content.select.where = colPos = 21

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
          NO  = 1
          NO  {
            wrapItemAndSub = <li>|</li>
          }
        }
      }
    }
  }
}
