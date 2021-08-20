$(function () {
	// // Fog - https://www.vantajs.com/?effect=fog#(backgroundAlpha:1,baseColor:16777215,blurFactor:0.9,gyroControls:!f,highlightColor:15330559,lowlightColor:8123903,midtoneColor:16777215,minHeight:200,minWidth:200,mouseControls:!t,scale:2,scaleMobile:4,speed:2.4000000000000004,touchControls:!t,zoom:0.5)
	// VANTA.FOG({
	// 	el: ".background__fog",
	// 	mouseControls: true,
	// 	touchControls: true,
	// 	gyroControls: false,
	// 	minHeight: 200.0,
	// 	minWidth: 200.0,
	// 	highlightColor: 0xe9ecff,
	// 	midtoneColor: 0xffffff,
	// 	lowlightColor: 0x8bd7f7,
	// 	baseColor: 0xffffff,
	// 	blurFactor: 0.9,
	// 	speed: 5,
	// 	zoom: 0.5,
	// });

	// JS Scroll Reveal - Based on https://codepen.io/kccnma/pen/MQeXPY
	let srPoint = 150;
	window.addEventListener("scroll", reveal);
	reveal();

	function reveal() {
		let srSelector = document.querySelectorAll(".scrollreveal");
		for (let i = 0; i < srSelector.length; i++) {
			let windowHeight = window.innerHeight;
			let srTop = srSelector[i].getBoundingClientRect().top;
			let srBottom = srSelector[i].getBoundingClientRect().bottom;
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
});
