var App = new Object;

App.Pages = {};
App.Elements = {};
App.Vars = {};
App.Functions = {};


// @Elements
App.Elements.Wrapper = document.getElementById('site-wrapper');
App.Elements.Header = document.getElementById('header');
App.Elements.Menu = document.getElementById('menu');
App.Elements.Content = document.getElementById('content');
App.Elements.Footer = document.getElementById('footer');



App.Functions.menuEffects = function() {

  "use strict";

  var toggles = document.querySelectorAll('.c-hamburger');

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( 'click', function(e) {
      e.preventDefault();
      (this.classList.contains('is-active') === true) ? this.classList.remove('is-active') : this.classList.add('is-active');
    });
  }

};

// @functions
App.Functions.hasDesktop = function () {
	 "use strict";
	return ( App.Vars.device == 'desktop' ? true : false );

};

App.Functions.hasTablet = function () {
 "use strict";
	return ( App.Vars.device == 'tablet' ? true : false );

};

App.Functions.hasMobile = function () {
 "use strict";
	return ( App.Vars.device == 'mobile' ? true : false );

};

App.Functions.Scrolling = function () {
 "use strict";
	var top = document.documentElement.scrollTop || document.body.scrollTop;

	if ( top >= App.Vars.Dimensions.height ) {

		App.Elements.Wrapper.classList.add('scrolling');

	}
	else {

		App.Elements.Wrapper.classList.remove('scrolling');

	}

};

App.Functions.attDimensions = function () {

	App.Vars.Dimensions = {

		width: $(window).width(),
		height: $(window).height(),

	}

	if ( !App.Functions.hasMobile() ) {

		$('.browser-height').css({ 'min-height': App.Vars.Dimensions.height });
	}
};

// autofunction: App
(function($){
	 "use strict";
	// @pages
	App.Pages.home = $('.home');
	App.Pages.skills = $('.skills');
	App.Pages.curriculum = $('.curriculum');
	App.Pages.contact = $('.contact');
	App.Functions.menuEffects();

	var onScroll = function () {
		App.Functions.Scrolling();
	}
	var onResize = function () {
		App.Functions.attDimensions();
	}
	
	// @window events
	$(window).resize(function(){
		onResize();
		onScroll();
	});

	$(window).scroll(function(){
		onScroll();
	});

	// @events
	$('.top').click(function(event){
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 750);

	});
	

	// @events
	$('.site-wrapper-inner .arrow').click(function(event){
		event.preventDefault();
		$('html, body').animate({ scrollTop: App.Vars.Dimensions.height }, 750, function(){
		});
	});

	// @exec
	App.Functions.attDimensions();

})(jQuery);


// autofunction: Menu
(function() {
	 "use strict";
	 
	var bodyEl = document.body,
	content = document.getElementById('content'),
	openbtn = document.getElementById('open-button'),
	isOpen = false,
	isAnimating = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if(openbtn) {
			openbtn.addEventListener( 'click', toggleMenu );			
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove(bodyEl, 'show-menu');
			
		}
		else {
			classie.add(bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();
"use strict";