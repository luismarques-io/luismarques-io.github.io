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

	$(".intro__arrow").click(function (e) {
		$("html, body")
			.stop()
			.animate({ scrollTop: $("#about").offset().top }, 1200, "swing");
	});

	// Birds - https://www.vantajs.com/#(alignment:20,backgroundAlpha:0,backgroundColor:16777215,birdSize:2,cohesion:23,color1:5515963,color2:53759,colorMode:lerp,gyroControls:!f,minHeight:200,minWidth:200,mouseControls:!t,quantity:1,scale:1,scaleMobile:1,separation:19,speedLimit:5,touchControls:!t,wingSpan:30)
	VANTA.BIRDS({
		el: ".background__birds",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		scale: 1.0,
		scaleMobile: 1.0,
		backgroundColor: 0xffffff,
		color1: 0x744f98,
		color2: 0x46b6d7,
		colorMode: "lerp",
		birdSize: 2, // 1.5,
		separation: 19.0,
		cohesion: 23.0,
		quantity: 1.0,
		backgroundAlpha: 0.0,
	});
});
