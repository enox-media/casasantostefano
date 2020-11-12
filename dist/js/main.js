/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/headroom.js/dist/headroom.js":
/*!***************************************************!*\
  !*** ./node_modules/headroom.js/dist/headroom.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it\n * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js\n * License: MIT\n */\n\n(function(root, factory) {\n  'use strict';\n\n  if (true) {\n    // AMD. Register as an anonymous module.\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  }\n  else {}\n}(this, function() {\n  'use strict';\n\n  /* exported features */\n  \n  var features = {\n    bind : !!(function(){}.bind),\n    classList : 'classList' in document.documentElement,\n    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)\n  };\n  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;\n  \n  /**\n   * Handles debouncing of events via requestAnimationFrame\n   * @see http://www.html5rocks.com/en/tutorials/speed/animations/\n   * @param {Function} callback The callback to handle whichever event\n   */\n  function Debouncer (callback) {\n    this.callback = callback;\n    this.ticking = false;\n  }\n  Debouncer.prototype = {\n    constructor : Debouncer,\n  \n    /**\n     * dispatches the event to the supplied callback\n     * @private\n     */\n    update : function() {\n      this.callback && this.callback();\n      this.ticking = false;\n    },\n  \n    /**\n     * ensures events don't get stacked\n     * @private\n     */\n    requestTick : function() {\n      if(!this.ticking) {\n        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));\n        this.ticking = true;\n      }\n    },\n  \n    /**\n     * Attach this as the event listeners\n     */\n    handleEvent : function() {\n      this.requestTick();\n    }\n  };\n  /**\n   * Check if object is part of the DOM\n   * @constructor\n   * @param {Object} obj element to check\n   */\n  function isDOMElement(obj) {\n    return obj && typeof window !== 'undefined' && (obj === window || obj.nodeType);\n  }\n  \n  /**\n   * Helper function for extending objects\n   */\n  function extend (object /*, objectN ... */) {\n    if(arguments.length <= 0) {\n      throw new Error('Missing arguments in extend function');\n    }\n  \n    var result = object || {},\n        key,\n        i;\n  \n    for (i = 1; i < arguments.length; i++) {\n      var replacement = arguments[i] || {};\n  \n      for (key in replacement) {\n        // Recurse into object except if the object is a DOM element\n        if(typeof result[key] === 'object' && ! isDOMElement(result[key])) {\n          result[key] = extend(result[key], replacement[key]);\n        }\n        else {\n          result[key] = result[key] || replacement[key];\n        }\n      }\n    }\n  \n    return result;\n  }\n  \n  /**\n   * Helper function for normalizing tolerance option to object format\n   */\n  function normalizeTolerance (t) {\n    return t === Object(t) ? t : { down : t, up : t };\n  }\n  \n  /**\n   * UI enhancement for fixed headers.\n   * Hides header when scrolling down\n   * Shows header when scrolling up\n   * @constructor\n   * @param {DOMElement} elem the header element\n   * @param {Object} options options for the widget\n   */\n  function Headroom (elem, options) {\n    options = extend(options, Headroom.options);\n  \n    this.lastKnownScrollY = 0;\n    this.elem             = elem;\n    this.tolerance        = normalizeTolerance(options.tolerance);\n    this.classes          = options.classes;\n    this.offset           = options.offset;\n    this.scroller         = options.scroller;\n    this.initialised      = false;\n    this.onPin            = options.onPin;\n    this.onUnpin          = options.onUnpin;\n    this.onTop            = options.onTop;\n    this.onNotTop         = options.onNotTop;\n    this.onBottom         = options.onBottom;\n    this.onNotBottom      = options.onNotBottom;\n  }\n  Headroom.prototype = {\n    constructor : Headroom,\n  \n    /**\n     * Initialises the widget\n     */\n    init : function() {\n      if(!Headroom.cutsTheMustard) {\n        return;\n      }\n  \n      this.debouncer = new Debouncer(this.update.bind(this));\n      this.elem.classList.add(this.classes.initial);\n  \n      // defer event registration to handle browser\n      // potentially restoring previous scroll position\n      setTimeout(this.attachEvent.bind(this), 100);\n  \n      return this;\n    },\n  \n    /**\n     * Unattaches events and removes any classes that were added\n     */\n    destroy : function() {\n      var classes = this.classes;\n  \n      this.initialised = false;\n  \n      for (var key in classes) {\n        if(classes.hasOwnProperty(key)) {\n          this.elem.classList.remove(classes[key]);\n        }\n      }\n  \n      this.scroller.removeEventListener('scroll', this.debouncer, false);\n    },\n  \n    /**\n     * Attaches the scroll event\n     * @private\n     */\n    attachEvent : function() {\n      if(!this.initialised){\n        this.lastKnownScrollY = this.getScrollY();\n        this.initialised = true;\n        this.scroller.addEventListener('scroll', this.debouncer, false);\n  \n        this.debouncer.handleEvent();\n      }\n    },\n  \n    /**\n     * Unpins the header if it's currently pinned\n     */\n    unpin : function() {\n      var classList = this.elem.classList,\n        classes = this.classes;\n  \n      if(classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {\n        classList.add(classes.unpinned);\n        classList.remove(classes.pinned);\n        this.onUnpin && this.onUnpin.call(this);\n      }\n    },\n  \n    /**\n     * Pins the header if it's currently unpinned\n     */\n    pin : function() {\n      var classList = this.elem.classList,\n        classes = this.classes;\n  \n      if(classList.contains(classes.unpinned)) {\n        classList.remove(classes.unpinned);\n        classList.add(classes.pinned);\n        this.onPin && this.onPin.call(this);\n      }\n    },\n  \n    /**\n     * Handles the top states\n     */\n    top : function() {\n      var classList = this.elem.classList,\n        classes = this.classes;\n  \n      if(!classList.contains(classes.top)) {\n        classList.add(classes.top);\n        classList.remove(classes.notTop);\n        this.onTop && this.onTop.call(this);\n      }\n    },\n  \n    /**\n     * Handles the not top state\n     */\n    notTop : function() {\n      var classList = this.elem.classList,\n        classes = this.classes;\n  \n      if(!classList.contains(classes.notTop)) {\n        classList.add(classes.notTop);\n        classList.remove(classes.top);\n        this.onNotTop && this.onNotTop.call(this);\n      }\n    },\n  \n    bottom : function() {\n      var classList = this.elem.classList,\n        classes = this.classes;\n  \n      if(!classList.contains(classes.bottom)) {\n        classList.add(classes.bottom);\n        classList.remove(classes.notBottom);\n        this.onBottom && this.onBottom.call(this);\n      }\n    },\n  \n    /**\n     * Handles the not top state\n     */\n    notBottom : function() {\n      var classList = this.elem.classList,\n        classes = this.classes;\n  \n      if(!classList.contains(classes.notBottom)) {\n        classList.add(classes.notBottom);\n        classList.remove(classes.bottom);\n        this.onNotBottom && this.onNotBottom.call(this);\n      }\n    },\n  \n    /**\n     * Gets the Y scroll position\n     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY\n     * @return {Number} pixels the page has scrolled along the Y-axis\n     */\n    getScrollY : function() {\n      return (this.scroller.pageYOffset !== undefined)\n        ? this.scroller.pageYOffset\n        : (this.scroller.scrollTop !== undefined)\n          ? this.scroller.scrollTop\n          : (document.documentElement || document.body.parentNode || document.body).scrollTop;\n    },\n  \n    /**\n     * Gets the height of the viewport\n     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript\n     * @return {int} the height of the viewport in pixels\n     */\n    getViewportHeight : function () {\n      return window.innerHeight\n        || document.documentElement.clientHeight\n        || document.body.clientHeight;\n    },\n  \n    /**\n     * Gets the physical height of the DOM element\n     * @param  {Object}  elm the element to calculate the physical height of which\n     * @return {int}     the physical height of the element in pixels\n     */\n    getElementPhysicalHeight : function (elm) {\n      return Math.max(\n        elm.offsetHeight,\n        elm.clientHeight\n      );\n    },\n  \n    /**\n     * Gets the physical height of the scroller element\n     * @return {int} the physical height of the scroller element in pixels\n     */\n    getScrollerPhysicalHeight : function () {\n      return (this.scroller === window || this.scroller === document.body)\n        ? this.getViewportHeight()\n        : this.getElementPhysicalHeight(this.scroller);\n    },\n  \n    /**\n     * Gets the height of the document\n     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/\n     * @return {int} the height of the document in pixels\n     */\n    getDocumentHeight : function () {\n      var body = document.body,\n        documentElement = document.documentElement;\n  \n      return Math.max(\n        body.scrollHeight, documentElement.scrollHeight,\n        body.offsetHeight, documentElement.offsetHeight,\n        body.clientHeight, documentElement.clientHeight\n      );\n    },\n  \n    /**\n     * Gets the height of the DOM element\n     * @param  {Object}  elm the element to calculate the height of which\n     * @return {int}     the height of the element in pixels\n     */\n    getElementHeight : function (elm) {\n      return Math.max(\n        elm.scrollHeight,\n        elm.offsetHeight,\n        elm.clientHeight\n      );\n    },\n  \n    /**\n     * Gets the height of the scroller element\n     * @return {int} the height of the scroller element in pixels\n     */\n    getScrollerHeight : function () {\n      return (this.scroller === window || this.scroller === document.body)\n        ? this.getDocumentHeight()\n        : this.getElementHeight(this.scroller);\n    },\n  \n    /**\n     * determines if the scroll position is outside of document boundaries\n     * @param  {int}  currentScrollY the current y scroll position\n     * @return {bool} true if out of bounds, false otherwise\n     */\n    isOutOfBounds : function (currentScrollY) {\n      var pastTop  = currentScrollY < 0,\n        pastBottom = currentScrollY + this.getScrollerPhysicalHeight() > this.getScrollerHeight();\n  \n      return pastTop || pastBottom;\n    },\n  \n    /**\n     * determines if the tolerance has been exceeded\n     * @param  {int} currentScrollY the current scroll y position\n     * @return {bool} true if tolerance exceeded, false otherwise\n     */\n    toleranceExceeded : function (currentScrollY, direction) {\n      return Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance[direction];\n    },\n  \n    /**\n     * determine if it is appropriate to unpin\n     * @param  {int} currentScrollY the current y scroll position\n     * @param  {bool} toleranceExceeded has the tolerance been exceeded?\n     * @return {bool} true if should unpin, false otherwise\n     */\n    shouldUnpin : function (currentScrollY, toleranceExceeded) {\n      var scrollingDown = currentScrollY > this.lastKnownScrollY,\n        pastOffset = currentScrollY >= this.offset;\n  \n      return scrollingDown && pastOffset && toleranceExceeded;\n    },\n  \n    /**\n     * determine if it is appropriate to pin\n     * @param  {int} currentScrollY the current y scroll position\n     * @param  {bool} toleranceExceeded has the tolerance been exceeded?\n     * @return {bool} true if should pin, false otherwise\n     */\n    shouldPin : function (currentScrollY, toleranceExceeded) {\n      var scrollingUp  = currentScrollY < this.lastKnownScrollY,\n        pastOffset = currentScrollY <= this.offset;\n  \n      return (scrollingUp && toleranceExceeded) || pastOffset;\n    },\n  \n    /**\n     * Handles updating the state of the widget\n     */\n    update : function() {\n      var currentScrollY  = this.getScrollY(),\n        scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',\n        toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);\n  \n      if(this.isOutOfBounds(currentScrollY)) { // Ignore bouncy scrolling in OSX\n        return;\n      }\n  \n      if (currentScrollY <= this.offset ) {\n        this.top();\n      } else {\n        this.notTop();\n      }\n  \n      if(currentScrollY + this.getViewportHeight() >= this.getScrollerHeight()) {\n        this.bottom();\n      }\n      else {\n        this.notBottom();\n      }\n  \n      if(this.shouldUnpin(currentScrollY, toleranceExceeded)) {\n        this.unpin();\n      }\n      else if(this.shouldPin(currentScrollY, toleranceExceeded)) {\n        this.pin();\n      }\n  \n      this.lastKnownScrollY = currentScrollY;\n    }\n  };\n  /**\n   * Default options\n   * @type {Object}\n   */\n  Headroom.options = {\n    tolerance : {\n      up : 0,\n      down : 0\n    },\n    offset : 0,\n    scroller: window,\n    classes : {\n      pinned : 'headroom--pinned',\n      unpinned : 'headroom--unpinned',\n      top : 'headroom--top',\n      notTop : 'headroom--not-top',\n      bottom : 'headroom--bottom',\n      notBottom : 'headroom--not-bottom',\n      initial : 'headroom'\n    }\n  };\n  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;\n\n  return Headroom;\n}));\n\n//# sourceURL=webpack:///./node_modules/headroom.js/dist/headroom.js?");

/***/ }),

/***/ "./node_modules/headroom.js/dist/jQuery.headroom.js":
/*!**********************************************************!*\
  !*** ./node_modules/headroom.js/dist/jQuery.headroom.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it\n * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js\n * License: MIT\n */\n\n(function($) {\n\n  if(!$) {\n    return;\n  }\n\n  ////////////\n  // Plugin //\n  ////////////\n\n  $.fn.headroom = function(option) {\n    return this.each(function() {\n      var $this   = $(this),\n        data      = $this.data('headroom'),\n        options   = typeof option === 'object' && option;\n\n      options = $.extend(true, {}, Headroom.options, options);\n\n      if (!data) {\n        data = new Headroom(this, options);\n        data.init();\n        $this.data('headroom', data);\n      }\n      if (typeof option === 'string') {\n        data[option]();\n\n        if(option === 'destroy'){\n          $this.removeData('headroom');\n        }\n      }\n    });\n  };\n\n  //////////////\n  // Data API //\n  //////////////\n\n  $('[data-headroom]').each(function() {\n    var $this = $(this);\n    $this.headroom($this.data());\n  });\n\n}(window.Zepto || window.jQuery));\n\n//# sourceURL=webpack:///./node_modules/headroom.js/dist/jQuery.headroom.js?");

/***/ }),

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*********************************************************\n  Accordion\n*********************************************************/\n\n(function ($) {\n  'use strict';\n\n  var data_bg_arr = [];\n\n  // Adjust height of accordion below header down (due to 'position: fixed') on header\n  /*\n  var header_height = $('.header').outerHeight();\n  var accordion_height = $('.accordion').outerHeight();\n  var new_height = accordion_height - header_height;\n  $('.accordion').css('height', new_height);\n  */\n\n  $('.accordion-bg-img').each(function (index) {\n    $(this).attr(\"data-id\", index);\n    var bg_images = $(this).attr(\"src\");\n    data_bg_arr.push(bg_images);\n  });\n\n  $('.accordion-cell').each(function (index) {\n    $(this).attr(\"data-id\", index);\n    var slide_title = $(this).find('.accordion-cell-content > .accordion-cell-title').text();\n    $(this).attr('data-title', slide_title);\n  });\n\n  $('.accordion-cell').click(function () {\n    $('.accordion-cell-outer').toggle();\n\n    if ($(this).hasClass('collapsed')) {\n      $('.accordion-cell-outer').toggle();\n      var data_id = $(this).attr('data-id');\n      $('.accordion-overlay').css('background-image', 'url(' + data_bg_arr[data_id] + ')');\n      $(this).removeClass('collapsed');\n      $(this).siblings().removeClass('expanded');\n      $(this).addClass('expanded');\n      $(this).siblings().addClass('collapsed');\n    } else {\n      var data_id = $(this).attr('data-id');\n      $('.accordion-overlay').css('background-image', 'url(' + data_bg_arr[data_id] + ')');\n      $('.accordion-overlay').toggleClass('active');\n      $(this).toggleClass('expanded');\n      $(this).siblings().toggleClass('collapsed');\n    }\n  });\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/components/accordion.js?");

/***/ }),

/***/ "./src/js/components/nav.js":
/*!**********************************!*\
  !*** ./src/js/components/nav.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _headroom = __webpack_require__(/*! headroom.js/dist/headroom.js */ \"./node_modules/headroom.js/dist/headroom.js\");\n\nvar _headroom2 = _interopRequireDefault(_headroom);\n\n__webpack_require__(/*! headroom.js/dist/jQuery.headroom.js */ \"./node_modules/headroom.js/dist/jQuery.headroom.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.Headroom = _headroom2.default; /*********************************************************\n                                        Nav\n                                      *********************************************************/\n\n// Headroom.js\n// https://wicky.nillia.ms/headroom.js\n\n\n(function ($) {\n  'use strict';\n\n  // Push content below header down (due to 'position: fixed') on header via Headroom.js\n  // Update css for #js-heder-height el, based on header's dymanic height\n  var header_height = $('.header-wrap').outerHeight();\n\n  /*\n  if ($('body.logged-in').length) {\n    $('#js-header-height').css('margin-top', (header_height - 32));\n  } else {\n    $('#js-header-height').css('margin-top', header_height);\n  }\n  */\n\n  // if not homepage\n  /*if ($('body.home').length == 0) {\n    $('.header').addClass('header--show header--transparent'); \n    var header = new Headroom(document.querySelector(\".header\"), {\n      \"offset\": 220,\n      \"tolerance\": {\n        up: 0,\n        down: 0\n      },\n      \"classes\": {\n        \"notTop\" : \"header--not-transparent\",\n      }\n    });\n    header.init();\n  }*/\n\n  // Headroom.js scroll\n  var header = new _headroom2.default(document.querySelector('.header'), {\n    offset: 200,\n    tolerance: {\n      up: 0,\n      down: 0\n    },\n    classes: {\n      initial: 'header--default',\n      //\"pinned\": \"header--fixed\",\n      //\"unpinned\": \"header--fixed\",\n      top: 'top',\n      notTop: 'not-top'\n    }\n  });\n  header.init();\n\n  // sub menus (ul)\n  var lvl1_menu = $('.nav-mobile ul:first-child');\n  var lvl2_menu = $('.nav-mobile ul:first-child > li > a + ul');\n  var lvl3_menu = $('.nav-mobile ul:first-child > li > a + ul > li > a + ul');\n  // sub menu link items (li a)\n  var lvl1_links = $('.nav-mobile ul:first-child > li > a');\n  var lvl2_links = $('.nav-mobile ul:first-child > li > a + ul > li > a');\n  var lvl3_links = $('.nav-mobile ul:first-child > li > a + ul > li > a + ul > li > a');\n\n  // Nav Desktop Dropdown\n  var parent = $('.nav-desktop li.menu-item-has-children');\n  parent.on({\n    mouseenter: function mouseenter() {\n      $(this).find('.sub-menu').addClass('active');\n      $(this).find('i').addClass('active');\n\n      // Get top-lvl nav item for featured-nav title\n      // Append the parent title into it's location\n      var feat_title_el = $('.sub-menu__feat-title');\n      var parent_title = $('.nav__inner > li.current-menu-item');\n      var the_title = $(this).find('> a').text();\n      feat_title_el.html(the_title);\n    },\n    mouseleave: function mouseleave() {\n      $(this).find('.sub-menu').removeClass('active');\n      $(this).find('i').removeClass('active');\n    }\n  });\n\n  // Nav Desktop Dropdown\n  var child = $('.nav-desktop ul:first-child > li > a + ul');\n  var gchild = $('.nav-desktop ul:first-child > li > a + ul > li > a + ul > li > a');\n  child.on({\n    mouseenter: function mouseenter() {\n      $(this).find('.sub-menu').addClass('active');\n      $(this).find('i').addClass('active');\n\n      // Get top-lvl nav item for featured-nav title\n      // Append the parent title into it's location\n      var feat_title_el = $('.sub-menu__feat-title');\n      var parent_title = $('.nav__inner > li.current-menu-item');\n      var the_title = $(this).find('> a').text();\n      feat_title_el.html(the_title);\n    },\n    mouseleave: function mouseleave() {\n      $(this).find('.sub-menu').removeClass('active');\n      $(this).find('i').removeClass('active');\n    }\n  });\n\n  // Nav setup\n  // Append nav markup\n  $('.nav-mobile .sub-menu').prepend('<li class=\"sub-menu__back\"><a><i class=\"fa fa-long-arrow-left\"></i> Back</a></li></div>');\n\n  // mobile variables\n  var trigger = $('.nav-toggle');\n  var parent = $('.nav-mobile li.menu-item-has-children');\n  var child = $('.nav-mobile li.menu-item-has-children:has(ul)').find('ul > li');\n\n  // Add nav classes for easier css selection\n  lvl1_menu.addClass('lvl-1-menu');\n  lvl2_menu.addClass('lvl-2-menu');\n  lvl3_menu.addClass('lvl-3-menu');\n  lvl1_links.addClass('lvl-1');\n  lvl2_links.addClass('lvl-2');\n  lvl3_links.addClass('lvl-3');\n\n  function navToggle() {\n    $('body').toggleClass('nav-open');\n    $('.nav-mobile').toggleClass('nav-open');\n    $('.nav-toggle').toggleClass('active');\n    $('.lvl-1-menu').toggleClass('active');\n  }\n\n  function navClose() {\n    $('body').removeClass('nav-open');\n    $('.nav-mobile').removeClass('nav-open');\n    $('.nav-toggle').removeClass('active');\n    $('.lvl-1-menu').removeClass('active');\n  }\n\n  // Detect click on nav-toggle and open\n  trigger.click(function (e) {\n    navToggle();\n    // Detect click outside of nav-mobile, when open, and close nav\n    $('.nav-open-overlay').click(function () {\n      navClose();\n    });\n    // Detect click on esc key, when open, and close nav\n    $(document).on('keyup', function (e) {\n      if (e.keyCode == 27) {\n        navClose();\n      }\n    });\n  });\n\n  // On click of parent item (lvl 1)\n  parent.append('<i class=\"nav-mobile__chevron fa fa-chevron-right\" aria-hidden=\"true\"></i>');\n  parent.on('click', function (e) {\n    e.preventDefault();\n    $(this).find(' > .sub-menu').toggleClass('active');\n    //var parent_title = $(e.target).text();\n    trigger.click(function () {\n      $('.sub-menu').removeClass('active');\n    });\n\n    // On click of back arrow within parent\n    var back = $('.sub-menu__back a');\n    back.on('click', function (e) {\n      e.preventDefault();\n      $(e.target).closest('.sub-menu').removeClass('active');\n    });\n  });\n\n  // On click of child item (lvl 2 & beyond)\n  child.on('click', function (e) {\n    e.stopPropagation();\n  });\n\n  // Multiple Locations Dropdown Toggle\n  $('.dropdown__toggle').click(function () {\n    $(this).next('.dropdown').toggle();\n  });\n\n  $(document).click(function (e) {\n    var target = e.target;\n    if (!$(target).is('.dropdown__toggle') && !$(target).parents().is('.dropdown__toggle')) {\n      $('.dropdown').hide();\n    }\n  });\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/components/nav.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*********************************************************\n  Main JS Entry Point\n*********************************************************/\n\n__webpack_require__(/*! ./components/nav.js */ \"./src/js/components/nav.js\");\n__webpack_require__(/*! ./components/accordion.js */ \"./src/js/components/accordion.js\");\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/main.scss */\"./src/scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/scss/main.scss?");

/***/ })

/******/ });