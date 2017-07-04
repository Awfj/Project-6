$(function() {
	$(".owl-carousel").owlCarousel({
		responsiveClass:true,
		mouseDrag: true,
		nav: true,
		responsive:{
		        0:{
		            items:1,
		            loop: true
		        },
		        350:{
		            items:2,
		            loop: true
		        },
		        600:{
		            items:3,
		            loop: false,
		            nav: false
		        }
		    }
	});
});
