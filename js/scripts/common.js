// Tabs - Based on https://codepen.io/mburridge/pen/rNVeaKv
/*
tabs({
	buttonSelector: ".jobs__tabs__button",
	contentSelector: ".job",
});
*/

function tabs(opt) {
	// DOM Elements
	const tabs = document.querySelectorAll(opt.buttonSelector);
	const tabContents = document.querySelectorAll(opt.contentSelector);

	// Functions
	const activateTab = (tabnum) => {
		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});

		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("active");
		});
		document.querySelector("#tab__" + tabnum).classList.add("active");
		document
			.querySelector("#tabcontent__" + tabnum)
			.classList.add("active");
	};

	// Event Listeners
	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			activateTab(tab.dataset.tab);
		});
	});

	// Select first as default
	tabs[0].classList.add("active");
	tabContents[0].classList.add("active");
}
