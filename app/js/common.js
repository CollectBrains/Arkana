$(function() {
	
	// $(".fa-bars").on('click', function () {
	// 	if ($(".mobile-nav").hasClass('mob')){
	// 		$(".mobile-nav").css('left', '-2000px');
	// 		$(".mobile-nav").removeClass('mob');
	// 	}else {
	// 		$(".mobile-nav").addClass('mob');
	// 		$(".mobile-nav").css('left', '0px');
	// 	}
	// });

	$(".fa-bars").on('click', function(){
		var flag = false;
		if (flag) {
			$(".mobile-nav").css('left', '-2000px');
			flag = true;
		} else {
			$(".mobile-nav").css('left', '0px');
		}
	});
	
	$(".form-search").on('click', function () {

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
