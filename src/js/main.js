import "./slider";
import modal from "./modules/modal";
import { openModal } from "./modules/modal";
import tabs from "./modules/tabs";


window.addEventListener("DOMContentLoaded", () => {

	// const autoOpenModalWindow = setTimeout(() => openModal(autoOpenModalWindow, '.popup'), 60000); //? later ON
	const autoOpenModalWindow = setTimeout(() => console.log());


	// modal('[data-modal]', '[data-close]', autoOpenModalWindow, '.popup_engineer', '.popup',); //? later? my var
	modal('show', '.popup_engineer_btn', '.popup_engineer .popup_close', autoOpenModalWindow,
		'.popup_engineer');
	modal('show', '.phone_link', '.popup .popup_close', autoOpenModalWindow,
		'.popup');
	tabs('.decoration_slider', '.decoration_item', 'after_click');

});