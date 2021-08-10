$(function () {});

// Tabs - Based on https://codepen.io/mburridge/pen/rNVeaKv
tabs({
	buttonSelector: ".jobs__tabs__button",
	contentSelector: ".job",
});

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

// JS Scroll Reveal - Based on https://codepen.io/kccnma/pen/MQeXPY

// reveal point from bottom and top of the window
var srPoint = 150;
window.addEventListener("scroll", reveal);
reveal();

function reveal() {
	var srSelector = document.querySelectorAll(".scrollreveal");
	for (var i = 0; i < srSelector.length; i++) {
		var windowHeight = window.innerHeight;
		var srTop = srSelector[i].getBoundingClientRect().top;
		var srBottom = srSelector[i].getBoundingClientRect().bottom;
		if (srTop < windowHeight - srPoint) {
			srSelector[i].classList.add("scrollreveal__active");
		} else {
			// srSelector[i].classList.remove('scrollreveal__active');
		}
		if (srBottom < 0 + srPoint) {
			// srSelector[i].classList.remove('scrollreveal__active');
		}
	}
}
