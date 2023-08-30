import Swiper, { Navigation, Pagination } from 'swiper';
let imageSwiper = new Swiper('.slider__wrapper', {
	modules: [Navigation, Pagination],
	wrapperClass: 'slider__body',
	slideClass: 'slider__item',
	loop: false,
	centeredSlides: true,
	spaceBetween: 10,
	navigation: {
		nextEl: ".slider-arrow-next",
		prevEl: ".slider-arrow-prev",
	},
	pagination: {
		el: ".slider-pagination",
		type: 'bullets',
		clickable: true,
	},
})

const productSlider = document.querySelector('.products__wrapper');
let productSwiper = new Swiper(productSlider, {
	modules: [Pagination],
	wrapperClass: 'products__body',
	slideClass: 'products__item',
	allowTouchMove: false,
	slidesPerView: 'auto',
	pagination: {
		el: ".slider-pagination",
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		320: {
			allowTouchMove: true,
			centeredSlides: true,
			spaceBetween: 10,
			initialSlide: 1,
		},
		576: {
			centeredSlides: false,
			allowTouchMove: true,
			spaceBetween: 10,
			initialSlide: 1,
		},
		767.98: {
			centeredSlides: false,
			allowTouchMove: false,
			spaceBetween: 0,
			initialSlide: 0,
		}
	}
})