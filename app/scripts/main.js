import fslightbox from "fslightbox";
import * as Module from './modules/functions.js';
Module.isWebp();

import './modules/sliders.js';
import './modules/dynamic_adapt.js';

const menuBody = document.querySelector('.main-menu');
document.addEventListener('click', openMenu);
function openMenu(event) {
	let target = event.target;
	if (target.closest('.menu-header__icon')) {
		menuBody.classList.toggle('active')
	}
	if (!target.closest('.header__menu')) {
		menuBody.classList.remove('active');
	}
}