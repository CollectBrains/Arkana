$(function() {

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
