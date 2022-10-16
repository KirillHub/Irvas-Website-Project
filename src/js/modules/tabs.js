import { closeModal } from "./modal";

const tabs = (tabsParentSelector, tabsContentParentSelector, activeClass) => {
	/*
		const tabs = document.querySelector(tabsParentSelector),
			tabsContentParent = document.querySelectorAll(tabsContentParentSelector);
	
	
		tabs.children.forEach(tab => {
			console.log(tab);
		})
	
	
		function hideTabContent() {
			tabsContent.forEach(item => {
				item.classList.add(activeClass);
			});
	
			tabs.forEach(item => {
				item.classList.remove(activeClass);
			});
		}
	
	
		tabsContentParent.forEach(tabContent => {
			tabContent.addEventListener('click', event => {
	
				
				if (tabContent.classList.contains('after_click')) {
					tabContent.classList.remove('after_click')
				} else tabContent.classList.add('after_click')
				
	hideTabContent()
})
	})

	/*
	tabs.forEach(tab => {
		tab.addEventListener('click', event => {
			const selector = event.target;

			// && selector.tagName === 'DIV'
			if (selector && selector.tagName === 'DIV') {
				if (selector.classList.contains('after_click')) {
					selector.classList.remove('after_click')
				} else selector.classList.add('after_click')
			}

		});
	})
	*/
	/*
		tabs.forEach(tab => {
			tab.addEventListener('click', event => {
				const selector = event.target;
				
				if (selector && selector.tagName === 'DIV') {
					console.log(selector);
				}
				
				console.log(selector);
			});
		});
	*/



};

export default tabs;


//after_click