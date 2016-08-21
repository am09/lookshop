//Sliders
$(document).ready(function(){
    $('.bxslider').bxSlider({
	   auto: true,
	});

	$('.carousel__slider').bxSlider({
        slideWidth: 220,
        minSlides: 3,
        maxSlides: 9,
        moveSlides: 2,
        slideMargin: 25,
        pager: false
	});
});

//Mobile menu
var mobileMenu = document.querySelector('.navigator-mobile__btn');
var menuList = document.querySelector('.navigator-mobile__list');

mobileMenu.addEventListener('click', function(event) {
    event.preventDefault();
    menuList.classList.toggle('navigator-mobile__list--active');
});
