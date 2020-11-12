/*********************************************************
  Accordion
*********************************************************/

(function($) {
  'use strict';

  var data_bg_arr = [];

  // Adjust height of accordion below header down (due to 'position: fixed') on header
  /*
  var header_height = $('.header').outerHeight();
  var accordion_height = $('.accordion').outerHeight();
  var new_height = accordion_height - header_height;
  $('.accordion').css('height', new_height);
  */

  $('.accordion-bg-img').each(function(index) {
    $(this).attr("data-id", index);
    var bg_images = $(this).attr("src");
    data_bg_arr.push(bg_images);
  });


  $('.accordion-cell').each(function(index) {
    $(this).attr("data-id", index);
    var slide_title = $(this).find('.accordion-cell-content > .accordion-cell-title').text();
    $(this).attr('data-title', slide_title);
  });

  $('.accordion-cell').click(function() {
    $('.accordion-cell-outer').toggle();
  
    if ($(this).hasClass('collapsed')) {
      $('.accordion-cell-outer').toggle();
      var data_id = $(this).attr('data-id');
      $('.accordion-overlay').css('background-image', 'url(' + data_bg_arr[data_id] + ')');
      $(this).removeClass ('collapsed');
      $(this).siblings().removeClass('expanded');
      $(this).addClass('expanded');
      $(this).siblings().addClass('collapsed');
      
    }
    else {
      var data_id = $(this).attr('data-id');
      $('.accordion-overlay').css('background-image', 'url(' + data_bg_arr[data_id] + ')');
      $('.accordion-overlay').toggleClass('active');
      $(this).toggleClass('expanded');
      $(this).siblings().toggleClass('collapsed');
    }
  });

})(jQuery);