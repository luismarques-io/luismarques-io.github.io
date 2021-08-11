$(function () {
	// Birds - https://www.vantajs.com/#(alignment:20,backgroundAlpha:0,backgroundColor:16777215,birdSize:2,cohesion:23,color1:5515963,color2:53759,colorMode:lerp,gyroControls:!f,minHeight:200,minWidth:200,mouseControls:!t,quantity:1,scale:1,scaleMobile:1,separation:19,speedLimit:5,touchControls:!t,wingSpan:30)
	VANTA.BIRDS({
		el: ".background__birds",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.0,
		minWidth: 200.0,
		scale: 1.0,
		scaleMobile: 1.0,
		backgroundColor: 0xffffff,
		// color1: 0x542abb,
		// color2: 0xd1ff,
		color1: 0x744f98,
		color2: 0x46b6d7,
		colorMode: "lerp",
		birdSize: 2, // 1.5,
		separation: 19.0,
		cohesion: 23.0,
		quantity: 1.0,
		backgroundAlpha: 0.0,
	});

	// Globe
	VANTA.GLOBE({
		el: ".background__globe",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.0,
		minWidth: 200.0,
		scale: 1,
		scaleMobile: 1.0,
		color: "#744f98",
		color2: "#46b6d7",
		backgroundColor: "#ffffff",
		size: 0.8,
		backgroundAlpha: 0.0,
	});

	// VANTA.HALO({
	// 	el: ".intro",
	// 	mouseControls: true,
	// 	touchControls: true,
	// 	gyroControls: false,
	// 	minHeight: 200.0,
	// 	minWidth: 200.0,
	// 	amplitudeFactor: 1.2,
	// });
	// Halo - https://www.vantajs.com/?effect=halo#(amplitudeFactor:1,backgroundAlpha:1,backgroundColor:332112,baseColor:1334188,color2:15918901,gyroControls:!f,minHeight:200,minWidth:200,mouseControls:!t,mouseEase:!t,ringFactor:1,rotationFactor:1,scale:1,scaleMobile:1,size:3,speed:1,touchControls:!t,xOffset:0.16,yOffset:0.32)
	// VANTA.HALO({
	// 	el: ".intro",
	// 	mouseControls: true,
	// 	touchControls: true,
	// 	gyroControls: false,
	// 	minHeight: 200.0,
	// 	minWidth: 200.0,
	// 	baseColor: 0x145bac,
	// 	backgroundColor: 0x51150,
	// 	xOffset: 0.16,
	// 	yOffset: 0.32,
	// 	size: 3.0,
	// });
	// Fog - https://www.vantajs.com/?effect=fog#(backgroundAlpha:1,baseColor:15527676,blurFactor:0.9,gyroControls:!f,highlightColor:9216749,lowlightColor:8123903,midtoneColor:16741936,minHeight:200,minWidth:200,mouseControls:!t,scale:2,scaleMobile:4,speed:2.4000000000000004,touchControls:!t,zoom:0.5)
	VANTA.FOG({
		el: ".background__fog",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.0,
		minWidth: 200.0,
		// highlightColor: 0x8ca2ed,
		// midtoneColor: 0xff7630,
		// lowlightColor: 0x7bf5ff,
		// baseColor: 0xeceefc,

		// https://www.vantajs.com/?effect=fog#(backgroundAlpha:1,baseColor:16777215,blurFactor:0.9,gyroControls:!f,highlightColor:14016508,lowlightColor:8123903,midtoneColor:16242631,minHeight:200,minWidth:200,mouseControls:!t,scale:2,scaleMobile:4,speed:2.4000000000000004,touchControls:!t,zoom:0.5)
		// highlightColor: 0xd5dffc,
		// midtoneColor: 0xf7d7c7,
		// lowlightColor: 0x7bf5ff,
		// baseColor: 0xffffff,

		// https://www.vantajs.com/?effect=fog#(backgroundAlpha:1,baseColor:16777215,blurFactor:0.9,gyroControls:!f,highlightColor:14016508,lowlightColor:8123903,midtoneColor:16777215,minHeight:200,minWidth:200,mouseControls:!t,scale:2,scaleMobile:4,speed:2.4000000000000004,touchControls:!t,zoom:0.5)
		// highlightColor: 0xd5dffc,
		// midtoneColor: 0xffffff,
		// lowlightColor: 0x7bf5ff,
		// baseColor: 0xffffff,

		// https://www.vantajs.com/?effect=fog#(backgroundAlpha:1,baseColor:16777215,blurFactor:0.9,gyroControls:!f,highlightColor:15330559,lowlightColor:8123903,midtoneColor:16777215,minHeight:200,minWidth:200,mouseControls:!t,scale:2,scaleMobile:4,speed:2.4000000000000004,touchControls:!t,zoom:0.5)
		// highlightColor: 0xe9ecff,
		// midtoneColor: 0xffffff,
		// lowlightColor: 0x7bf5ff,
		// baseColor: 0xffffff,

		// https://www.vantajs.com/?effect=fog#(backgroundAlpha:1,baseColor:16777215,blurFactor:0.9,gyroControls:!f,highlightColor:15330559,lowlightColor:11529471,midtoneColor:16777215,minHeight:200,minWidth:200,mouseControls:!t,scale:2,scaleMobile:4,speed:5,touchControls:!t,zoom:0.5)
		highlightColor: 0xe9ecff,
		midtoneColor: 0xffffff,
		lowlightColor: 0xafecff,
		baseColor: 0xffffff,

		blurFactor: 0.9,
		speed: 5,
		zoom: 0.5,
	});
	// Waves - https://www.vantajs.com/?effect=waves#(backgroundAlpha:1,color:11316396,gyroControls:!f,minHeight:200,minWidth:200,mouseControls:!t,scale:1,scaleMobile:1,shininess:150,touchControls:!t,waveHeight:12.5,waveSpeed:0.25,zoom:0.65)
	// VANTA.WAVES({
	// 	el: ".skills",
	// 	mouseControls: true,
	// 	touchControls: true,
	// 	gyroControls: false,
	// 	minHeight: 200.0,
	// 	minWidth: 200.0,
	// 	scale: 1.0,
	// 	scaleMobile: 1.0,
	// 	color: 0xacacac,
	// 	shininess: 150.0,
	// 	waveHeight: 12.5,
	// 	waveSpeed: 0.25,
	// 	zoom: 0.65,
	// });
});

// Copy to clipboard
$(function () {
	$("[data-copy-to-clipboard]").click(function (e) {
		e.preventDefault();
		const $btn = $(this);
		copyToClipboard($btn.data("copy-to-clipboard"));
		$btn.addClass("copied");
		setTimeout(() => {
			$btn.removeClass("copied");
		}, 1000);
	});
});

function copyToClipboard(text) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(text).select();
	document.execCommand("copy");
	$temp.remove();
}

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
