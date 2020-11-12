/*********************************************************
  Nav
*********************************************************/

// Headroom.js
// https://wicky.nillia.ms/headroom.js
import Headroom from 'headroom.js/dist/headroom.js';
window.Headroom = Headroom;
import 'headroom.js/dist/jQuery.headroom.js';

(function ($) {
  ('use strict');

  // Push content below header down (due to 'position: fixed') on header via Headroom.js
  // Update css for #js-heder-height el, based on header's dymanic height
  var header_height = $('.header-wrap').outerHeight();

  /*
  if ($('body.logged-in').length) {
    $('#js-header-height').css('margin-top', (header_height - 32));
  } else {
    $('#js-header-height').css('margin-top', header_height);
  }
  */

  // if not homepage
  /*if ($('body.home').length == 0) {
    $('.header').addClass('header--show header--transparent'); 
    var header = new Headroom(document.querySelector(".header"), {
      "offset": 220,
      "tolerance": {
        up: 0,
        down: 0
      },
      "classes": {
        "notTop" : "header--not-transparent",
      }
    });
    header.init();
  }*/

  // Headroom.js scroll
  var header = new Headroom(document.querySelector('.header'), {
    offset: 200,
    tolerance: {
      up: 0,
      down: 0,
    },
    classes: {
      initial: 'header--default',
      //"pinned": "header--fixed",
      //"unpinned": "header--fixed",
      top: 'top',
      notTop: 'not-top',
    },
  });
  header.init();

  // sub menus (ul)
  var lvl1_menu = $('.nav-mobile ul:first-child');
  var lvl2_menu = $('.nav-mobile ul:first-child > li > a + ul');
  var lvl3_menu = $('.nav-mobile ul:first-child > li > a + ul > li > a + ul');
  // sub menu link items (li a)
  var lvl1_links = $('.nav-mobile ul:first-child > li > a');
  var lvl2_links = $('.nav-mobile ul:first-child > li > a + ul > li > a');
  var lvl3_links = $(
    '.nav-mobile ul:first-child > li > a + ul > li > a + ul > li > a'
  );

  // Nav Desktop Dropdown
  var parent = $('.nav-desktop li.menu-item-has-children');
  parent.on({
    mouseenter: function () {
      $(this).find('.sub-menu').addClass('active');
      $(this).find('i').addClass('active');

      // Get top-lvl nav item for featured-nav title
      // Append the parent title into it's location
      var feat_title_el = $('.sub-menu__feat-title');
      var parent_title = $('.nav__inner > li.current-menu-item');
      var the_title = $(this).find('> a').text();
      feat_title_el.html(the_title);
    },
    mouseleave: function () {
      $(this).find('.sub-menu').removeClass('active');
      $(this).find('i').removeClass('active');
    },
  });

  // Nav Desktop Dropdown
  var child = $('.nav-desktop ul:first-child > li > a + ul');
  var gchild = $(
    '.nav-desktop ul:first-child > li > a + ul > li > a + ul > li > a'
  );
  child.on({
    mouseenter: function () {
      $(this).find('.sub-menu').addClass('active');
      $(this).find('i').addClass('active');

      // Get top-lvl nav item for featured-nav title
      // Append the parent title into it's location
      var feat_title_el = $('.sub-menu__feat-title');
      var parent_title = $('.nav__inner > li.current-menu-item');
      var the_title = $(this).find('> a').text();
      feat_title_el.html(the_title);
    },
    mouseleave: function () {
      $(this).find('.sub-menu').removeClass('active');
      $(this).find('i').removeClass('active');
    },
  });

  // Nav setup
  // Append nav markup
  $('.nav-mobile .sub-menu').prepend(
    '<li class="sub-menu__back"><a><i class="fa fa-long-arrow-left"></i> Back</a></li></div>'
  );

  // mobile variables
  var trigger = $('.nav-toggle');
  var parent = $('.nav-mobile li.menu-item-has-children');
  var child = $('.nav-mobile li.menu-item-has-children:has(ul)').find(
    'ul > li'
  );

  // Add nav classes for easier css selection
  lvl1_menu.addClass('lvl-1-menu');
  lvl2_menu.addClass('lvl-2-menu');
  lvl3_menu.addClass('lvl-3-menu');
  lvl1_links.addClass('lvl-1');
  lvl2_links.addClass('lvl-2');
  lvl3_links.addClass('lvl-3');

  function navToggle() {
    $('body').toggleClass('nav-open');
    $('.nav-mobile').toggleClass('nav-open');
    $('.nav-toggle').toggleClass('active');
    $('.lvl-1-menu').toggleClass('active');
  }

  function navClose() {
    $('body').removeClass('nav-open');
    $('.nav-mobile').removeClass('nav-open');
    $('.nav-toggle').removeClass('active');
    $('.lvl-1-menu').removeClass('active');
  }

  // Detect click on nav-toggle and open
  trigger.click(function (e) {
    navToggle();
    // Detect click outside of nav-mobile, when open, and close nav
    $('.nav-open-overlay').click(function () {
      navClose();
    });
    // Detect click on esc key, when open, and close nav
    $(document).on('keyup', function (e) {
      if (e.keyCode == 27) {
        navClose();
      }
    });
  });

  // On click of parent item (lvl 1)
  parent.append(
    '<i class="nav-mobile__chevron fa fa-chevron-right" aria-hidden="true"></i>'
  );
  parent.on('click', function (e) {
    e.preventDefault();
    $(this).find(' > .sub-menu').toggleClass('active');
    //var parent_title = $(e.target).text();
    trigger.click(function () {
      $('.sub-menu').removeClass('active');
    });

    // On click of back arrow within parent
    var back = $('.sub-menu__back a');
    back.on('click', function (e) {
      e.preventDefault();
      $(e.target).closest('.sub-menu').removeClass('active');
    });
  });

  // On click of child item (lvl 2 & beyond)
  child.on('click', function (e) {
    e.stopPropagation();
  });

  // Multiple Locations Dropdown Toggle
  $('.dropdown__toggle').click(function () {
    $(this).next('.dropdown').toggle();
  });

  $(document).click(function (e) {
    var target = e.target;
    if (
      !$(target).is('.dropdown__toggle') &&
      !$(target).parents().is('.dropdown__toggle')
    ) {
      $('.dropdown').hide();
    }
  });

  
})(jQuery);
