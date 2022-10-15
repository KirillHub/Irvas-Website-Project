

const openModal = (autoOpenModalWindow, ...modalSelector) => {
	const modals = [...modalSelector];

	modals.map(modal => document.querySelector(modal))
		.forEach(modal => {
			if (!modal.classList.contains('show')) modal.classList.add('show');
		});

	console.log(autoOpenModalWindow);
	if (autoOpenModalWindow) clearInterval(autoOpenModalWindow);
};



const closeModal = (...modalSelector) => {
	const modals = [...modalSelector];

	modals.map(modal => document.querySelector(modal))
		.forEach(modal => {
			if (modal.classList.contains('show')) modal.classList.remove('show');
		});

};


const modal = (triggerSelectorOpen, triggerSelectorClose, autoOpenModalWindow,
	modalSelectorPopupEngineer, modalSelectorPopup) => {

	const modalTriggerSelectorOpen = document.querySelectorAll(triggerSelectorOpen),
		modalTriggerSelectorClose = document.querySelectorAll(triggerSelectorClose)

	modalTriggerSelectorOpen.forEach(clickedElement => {
		clickedElement.addEventListener('click', e => {
			if (e.target.getAttribute('data-modal') == 'btn') {
				openModal(autoOpenModalWindow, modalSelectorPopupEngineer)
			} else openModal(autoOpenModalWindow, modalSelectorPopup);
		});
	});


	modalTriggerSelectorClose.forEach(clickedElement => {
		clickedElement.addEventListener('click', e => {
			const selector = e.target;
			if (selector && selector.tagName === 'STRONG') {
				closeModal(modalSelectorPopupEngineer,
					modalSelectorPopup);
			}
		});
	});


	document.addEventListener('keydown', (e) => {

		if (e.code === 'Escape') {
			closeModal(modalSelectorPopupEngineer, modalSelectorPopup);
		};
	});


	const showModalByScroll = () => {
		if (window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1) {
			openModal(autoOpenModalWindow, modalSelectorPopupEngineer,
				modalSelectorPopup);
			window.removeEventListener('scroll', showModalByScroll)
		}
	};

	window.addEventListener('scroll', showModalByScroll);

};


export default modal;

export { openModal, closeModal };


