<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'footer' ) ) {
	get_template_part( 'template-parts/footer' );
}
?>

<?php wp_footer(); ?>
<script>
// Form Goals
var $ = jQuery;

// below tablet, auto open first pw-tabs item on home page only
if ($(window).width() < 1025 && ($('body.home').length)) {
  $('.pw-tabs__title:eq(0)').trigger('click');
}

// below tablet, push hero image down
$(document).ready(function () {
	pushDownHero();
	$(window).resize(function() {
		pushDownHero();
	});
});

function pushDownHero() {
  if ($(window).width() < 1025) { // landscape orientation
    $('section .elementor-image:eq(0)').addClass('hero-push-down-sm');
  } else {
	$('section .elementor-image:eq(0)').removeClass('hero-push-down-sm');
  }
}

// attach magnific popup to button for popup
$('.video-modal .elementor-icon').addClass('popup-youtube');
</script>

</body>
</html>
