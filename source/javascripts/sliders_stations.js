(function(s) {
	$('#gallery').bxSlider({
		controls: false,
		pager: true,
		pagerCustom: '.gallery-controls',
		mode: 'fade'
	});
	
	$('.gallery-controls').bxSlider({
		controls: true,
		pager: false,
		slideWidth: 103,
		minSlides: 4,
		maxSlides: 4,
		slideMargin: 10
	});
})(window);
