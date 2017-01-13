<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

// --- Get extension configuration ---
$extConf = array();
if ( strlen($_EXTCONF) ) {
  $extConf = unserialize($_EXTCONF);
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tgfit/Configuration/TypoScript/tsconfig.ts">');

$rootlinefields = &$GLOBALS["TYPO3_CONF_VARS"]["FE"]["addRootLineFields"];
if($rootlinefields != '')
{
    $rootlinefields .= ' , ';
}
$rootlinefields .= 'tx_mask_page_area';
