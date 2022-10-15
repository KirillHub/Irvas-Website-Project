// import "./slider"; //? later ON

import modal from "./modules/modal";
import { openModal } from "./modules/modal";


window.addEventListener("DOMContentLoaded", () => {

	const autoOpenModalWindow = setTimeout(() => openModal(autoOpenModalWindow, '.popup'), 60000);

	modal('[data-modal]', '[data-close]', autoOpenModalWindow, '.popup_engineer', '.popup',)

});
