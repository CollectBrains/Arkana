$(function() {
	
	$(".fa-bars").on('click', function () {
		var $nav = $(".mobile-nav");
		if ($nav.hasClass('mob')){
			$nav.css('left', '-2000px');
			$nav.removeClass('mob');
		}else {
			$nav.addClass('mob');
			$nav.css('left', '0px');
		}
	});

	$(".fa-briefcase").on('click', function () {
		var $basket = $(".main-basket");
		if ($basket){
			$basket.addClass('cart').css('right', '-16px');
		}
	});

	$(".main-basket__close").on('click', function () {
		var $basket = $(".main-basket");
		if ($basket.hasClass('cart')){
			$basket.removeClass('cart').css('right', '-2000px');
		}
	});

	$(".fa-share-alt").on('click', function () {
		$(".share").slideToggle();
	});


	$(".fa-search").on('click', function () {

		if ($(".bar").is(":visible")){
			$(".bar").css('width', '0px').delay(700).slideUp(100);
		} else {
			$(".bar").slideDown(100).css('width', '400px');
		}

	});


	$(".js-slide").slick({
		prevArrow: '.slider__prev',
		nextArrow: '.slider__next'
	});

	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	svg4everybody();

});
