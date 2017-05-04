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
}

// Not used CEs
TCEFORM.tt_content.CType {
    removeItems = text,textpic,image,login,div
}

# Image orientation setup
TCEFORM.tt_content.imageorient {
    removeItems = 1,2,9,10,17,18,25,26
    altLabels.0 = oben
    altLabels.8 = unten
}