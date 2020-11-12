<?php
/**
 * Customizer ACF CSS Output, for hovers, CSS needed for DOM manipluations and such
 *
 * @author Brian O'Toole <brian@progressivedental.com>
 *
 */
function pd_acf_style_output() {
  $output;

	if (get_field('nav_link_color', 'option')) {
    // logo size desktop
    $output .= '@media (min-width: 1025px) {.header__logo img {width: '. get_field('logo_size_desktop', 'option') .'%} }';
    // logo size mobile
    $output .= '@media (max-width: 1025px) {.header__logo img {width: '. get_field('logo_size_mobile', 'option') .'%} }';
    // nav link color
    $output .= '.nav__inner li a {color: '. get_field('nav_link_color', 'option') .'}';
    // nav link color on hover
		$output .= '.nav__inner li a:hover {color: '. get_field('nav_link_color_hover', 'option') .'}';
    // nav mobile opened, icon color
    $output .= '.nav-mobile li.menu-item-has-children i {color: '. get_field('nav_link_color', 'option') .'}';
    // nav toggle (hamburger) color
    $output .= '.nav-toggle > div {background: '. get_field('nav_link_color', 'option') .'}';
    // header mobile link color
    $output .= '.header-mobile > div a {color: '. get_field('nav_link_color', 'option') .'}';
    // nav mobile bg color + sub menu bg color
    $output .= '.nav-mobile,.nav-mobile .sub-menu {background: '. get_field('header_bg_color', 'option') .'}';
    // nav dropdown link color
    $output .= '.nav-desktop .sub-menu li a {background: '. get_field('nav_dropdown_bg_color', 'option') .'}';
    // nav dropdown link color on hover
		$output .= '.nav-desktop .sub-menu li a:hover {color: '. get_field('nav_dropdown_bg_color_hover', 'option') .'}';
  }
  //"$output .= '.site-header { height: ' . esc_attr( $header_height ) . 'px; };"
  echo '<style type="text/css">' . $output . '</style>';
}
add_action( 'wp_footer', 'pd_acf_style_output', 99 );