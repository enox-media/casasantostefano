<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>
<div class="header-wrap">

<?php if ( has_nav_menu( 'top-bar' ) ) : ?>
<div class="header__topbar container-fluid u-visible-desktop">
  <?php
    wp_nav_menu( array(
      'theme_location'  => 'top-bar',
      'menu_class'      => 'header__topbar-wrap',
      'container'       => false,
    ));
	?>
</div><!--/.header__topbar-->
<?php endif; ?>

<div class="header__logobar">
	<div class="header__logobar-wrap container-fluid">

		<div class="header__logo">
		  <?php if ( get_theme_mod('header_logo')) : ?>
		  <a href="<?php echo home_url(); ?>">
		    <img src="<?php echo get_theme_mod('header_logo'); ?>" class="header__logo--desktop" alt="<?php bloginfo('name'); ?> logo" rel="logo">
			</a>
			<?php endif; ?>
		</div><!--/.header__logo-->

		<div class="header__cta-wrap u-visible-desktop">
		  <a href="<?php echo home_url() .'/'. get_post_field( 'post_name', get_theme_mod( 'header_cta_link')); ?>" class="elementor-button-link elementor-button elementor-size-md"><!--<i class="" aria-hidden="true"></i>--> <?php echo get_theme_mod( 'header_cta_text', 'Book Now' ); ?></a>
		</div><!--/.header__cta-wrap-->

	</div>
</div>


<header id="header" class="header" role="banner">
  <div class="container">
		<nav class="nav nav-desktop u-visible-desktop" role="navigation">
		<?php
      wp_nav_menu( array(
        'theme_location'  => 'primary',
        'menu_class'      => 'nav__inner',
        'container'       => false,
      ));
    ?>
		</nav><!-- /.nav-desktop -->
		<nav id="js-nav-mobile" class="row nav-mobile u-hidden-desktop">
		<?php
      wp_nav_menu( array(
        'theme_location'  => 'primary',
        'menu_class'      => 'nav__inner',
        'container'       => false,
      ));
    ?>
		</nav><!--/.nav-mobile-->
  </div>

	<div class="header-mobile u-hidden-desktop" style="">
	  <div class="header-mobile__toggle u-hidden-desktop">
	    <div class="nav-toggle u-hidden-desktop" id="js-nav-toggle">
			  <div></div>
		  </div><!--/.nav-toggle-->
		</div><!--/.header-mobile__toggle-->

		<?php
			$nav_mobile_items = get_theme_mod( 'nav_mobile_links');
			$count = 0;
		?>
	  <?php foreach( $nav_mobile_items as $item ) : ?>
	  <div class="header-mobile__item">
		  <?php if ($item['link_type_external']) : ?>
			<a href="<?php echo $item['link_type_external'] ?>">
			<?php else : ?>
			<a href="<?php echo home_url() .'/'. get_post_field( 'post_name', $item['link_url']); ?>">
			<?php endif; ?>
				<i class="fa fas <?php echo $item['link_text']; ?>"></i>
			</a>
		</div><!--/.header-mobile__item-->

		<?php if ($count == 0) : ?>
		<div class="header-mobile__schedule elementor-heading-title">
		  <a href="<?php echo home_url() .'/'. get_post_field( 'post_name', get_theme_mod( 'header_cta_link')); ?>">
			  <span><?php echo get_theme_mod( 'header_cta_text', 'Book Now' ); ?></span>
			</a>
		</div>
		<?php endif; ?>
		<?php $count++; ?>
		<?php endforeach; ?>



		<?php
			$nav_mobile_phones = get_theme_mod( 'nav_mobile_phones');
			$phone_count = 0;
			$total = count($nav_mobile_phones);
		?>
		<?php foreach( $nav_mobile_phones as $phone ) : ?>
			<?php if ($total == 1) : ?>
			  <div class="header-mobile__item">
				<a href="tel:+1-<?php echo $phone['phone_link']; ?>" title="<?php echo $phone['phone_text']; ?>"><i class="fa fas fa-phone"></i></a>
			  </div>
			<?php endif; ?>
			<?php $phone_count++; ?>
			<?php endforeach; ?>

			<?php if ($total > 1) : ?>
			  <div class="header-mobile__item">
			    <a class="dropdown__toggle" href="#"><i class="fa fas fa-phone"></i></a>
				<ul class="dropdown">
				    <?php foreach( $nav_mobile_phones as $phone ) : ?>
					  <li><a href="tel:+1-<?php echo $phone['phone_link']; ?>"><?php echo $phone['phone_text']; ?></a></li>
					<?php endforeach; ?>
				</ul>
			  </div>
			<?php else: ?>
			<?php endif; ?>




	</div><!--/.header-mobile-->
</header>
</div>

<div id="js-header-height" class="header-push">