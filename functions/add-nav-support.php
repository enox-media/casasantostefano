<?php
/**
 * Nav Registration and Extends
 */


/**
 * Register Nav Menus
 */
register_nav_menus( array(
	'primary' => esc_html__( 'Primary', 'elementor-hello-theme' ),
	'top-bar' => esc_html__( 'Top-Bar', 'elementor-hello-theme' ),
 ));


/**
 * Get menu description as global variable
 */
function add_menu_description( $item_output, $item, $depth, $args ) {
	global $description;
	$description = $item->post_content;
	return $item_output;
}
add_filter( 'walker_nav_menu_start_el', 'add_menu_description', 10, 4);


/**
 * Register Custom Walker Nav Menu
 */
class PD_Mega_Menu extends Walker_Nav_Menu {


	function start_lvl( &$output, $depth = 0, $args = array() ) {

		global $description;

		$indent = str_repeat("\t", $depth);
		$output .= "<ul class='sub-menu'><div class='sub-menu__feat-image'><span class='sub-menu__feat-title'></span><img src='$description' alt='menu-image'></div><div class='sub-menu__links'>";
	}
	function end_lvl( &$output, $depth = 0, $args = array() ) {
			$indent = str_repeat("\t", $depth);
			$cta_text = get_theme_mod('theme_four_header_cta_text');
			$cta_btn_link = get_theme_mod('theme_four_header_cta_btn_link');
			$cta_btn_text = get_theme_mod('theme_four_header_cta_btn_text');

			$output .= "$indent</div>
			<div class='sub-menu__footer'>
				<span class='sub-menu__footer-title'>$cta_text</span>
				<a href='$cta_btn_link' class='btn btn--header elementor-button'>$cta_btn_text</a>
			</div>
			</ul>\n";
	}


 }

 ?>