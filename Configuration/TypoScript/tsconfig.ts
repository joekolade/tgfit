/**
 * INCLUDE EXTENSION TYPOSCRIPT
 */
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/tsconfig.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:mask/Configuration/TypoScript/page.ts">


tx_gridelements {
  excludeLayoutIds = tabsSimple,tabs4,tabs6,accordion,slider
}

tx_gridelements {
  setup.3colsSpec < tx_gridelements.setup.3cols
  setup.3colsSpec {
      title = 3 Spalten (blauer Hintergrund)
      description = normaler 3-Spalter mit Hintergrundfarbe
      icon = EXT:bootstrap_grids/Resources/Public/Icons/gridlayout_col3.gif
      frame = 3
      topLevelLayout = 0
      
      config {
          colCount = 3
          rowCount = 1
          rows.1 {
              columns {
                  1 {
                      name = LLL:EXT:bootstrap_grids/Resources/Private/Language/locallang_db.xlf:celayout.leftColumn
                      colPos = 101
                  }
                  2 {
                      name = LLL:EXT:bootstrap_grids/Resources/Private/Language/locallang_db.xlf:celayout.centerColumn
                      colPos = 102
                  }
                  3 {
                      name = LLL:EXT:bootstrap_grids/Resources/Private/Language/locallang_db.xlf:celayout.rightColumn
                      colPos = 103
                  }
              }
          }
      }
  }

  setup.kursuebersicht < tx_gridelements.setup.3cols
  setup.kursuebersicht {
    title = Kursübersicht-Box
    description = Übersichtsbox mit 3 Spalten für Kursbeschreibungen
    icon = EXT:bootstrap_grids/Resources/Public/Icons/gridlayout_col3.gif
    frame = 3
    topLevelLayout = 0
    config >
    config {
      colCount = 3
      rowCount = 2
      rows {
       1 {
         columns {
           1 {
             name = Teaser
             colPos = 11
             colSpan = 3
           }
         }
       }
       2 {
         columns {
           1 {
             name = Spalte links
             colPos = 21
           }
           2 {
             name = Spalte mitte
             colPos = 22
           }
           3 {
             name = Spalte rechts
             colPos = 23
           }
         }
       }
      }
    }
  }
  flexformDS = FILE:EXT:tgfit/Configuration/Flexforms/kursuebersicht.xml
}
