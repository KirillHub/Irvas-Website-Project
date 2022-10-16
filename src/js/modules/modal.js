
const openModal = (autoOpenModalWindow, styleClassName, modalSelector) => {
	const modal = document.querySelector(modalSelector);

	if (!modal.classList.contains(styleClassName)) modal.classList.add(styleClassName);

	console.log(autoOpenModalWindow);
	if (autoOpenModalWindow) clearInterval(autoOpenModalWindow);
};


const closeModal = (styleClassName, modalSelector) => {
	const modal = document.querySelector(modalSelector);

	if (modal.classList.contains(styleClassName)) modal.classList.remove(styleClassName);
};


const modal = (styleClassName, triggerSelector, triggerSelectorClose,
	autoOpenModalWindow, modalSelector) => {

	const triggerOpen = document.querySelectorAll(triggerSelector),
		triggerClose = document.querySelector(triggerSelectorClose);

	triggerOpen.forEach(clickedElement => {
		clickedElement.addEventListener('click', e => {
			const selector = e.target;
			if (selector) {
				e.preventDefault();

				openModal(autoOpenModalWindow, styleClassName, modalSelector);
			};
		});
	});


	triggerClose.addEventListener('click', e => {
		const selector = e.target;
		if (selector && selector.tagName === 'STRONG') {
			closeModal(styleClassName, modalSelector);
		}

	});

	/*
	* @descr: close the modal window after clicking anywhere 
	*on the faucet except the modal window
	*/
	document.body.addEventListener('click', e => {
		const selector = e.target;
		if (selector === document.querySelector(modalSelector)) {
			closeModal(styleClassName, modalSelector);
		}
	});

	/*
* @descr: close the modal after click "Escape"
*/
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape') {
			closeModal(styleClassName, modalSelector);
		};
	});

	/*
* @descr: popup modal window after scroll down the page
*/
	const showModalByScroll = () => {
		if (window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1) {
			openModal(autoOpenModalWindow, styleClassName, modalSelector);
			window.removeEventListener('scroll', showModalByScroll)
		}
	};

	window.addEventListener('scroll', showModalByScroll);

};

export default modal;

export { openModal, closeModal };

