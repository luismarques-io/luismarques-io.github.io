genRand = (min, max, decimalPlaces = 0) =>
	(Math.random() * (max - min) + min).toFixed(decimalPlaces) * 1;

// Generate blobs - https://codepen.io/LekovicMilos/pen/omVzYv
function generateBorderRadiusBlob() {
	const percentage1 = genRand(25, 75);
	const percentage2 = genRand(25, 75);
	const percentage3 = genRand(25, 75);
	const percentage4 = genRand(25, 75);
	var percentage11 = 100 - percentage1;
	var percentage21 = 100 - percentage2;
	var percentage31 = 100 - percentage3;
	var percentage41 = 100 - percentage4;
	var borderRadius = `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`;
	return borderRadius;
}

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

function copyToClipboard(text) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(text).select();
	document.execCommand("copy");
	$temp.remove();
}
