/** ------------------------------------------------
 * Grid definitions
 */
lib.bootstrap_grids {

  # Column grids
  3colsSpec < lib.bootstrap_grids.3cols
  3colsSpec {
    wrap = <div class="row bg-blau">|</div>
  }
}


/** ------------------------------------------------
* Assign grid rendering to layout ids (names)
*/
tt_content.gridelements_pi1.20.10.setup {
  3colsSpec < lib.bootstrap_grids.3colsSpec
}
