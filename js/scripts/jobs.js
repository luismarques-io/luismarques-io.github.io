$(function () {
	$(".parallax__skillsjobs__content .detail__square").each(function () {
		$(this).css("border-radius", generateBorderRadiusBlob());
	});
});

$(function () {
	tabs({
		buttonSelector: ".jobs__tabs__button",
		contentSelector: ".job",
	});
});

$(function () {
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax().add([
		TweenMax.fromTo(
			".parallax__skillsjobs__content > div:nth-child(1)",
			1,
			{
				width: 500,
				height: 500,
				top: 1000,
				left: "20%",
				marginLeft: -100,
			},
			{
				width: 300,
				height: 300,
				top: -1000,
				// scale: 1.3,
				left: "15%",
				"border-radius": "37% 63% 39% 61% / 68% 47% 53% 32%",
				ease: Linear.easeNone,
			}
		),
		TweenMax.fromTo(
			".parallax__skillsjobs__content > div:nth-child(2)",
			1,
			{
				width: 150,
				height: 150,
				top: 1050,
				left: "60%",
				marginLeft: -100,
			},
			{
				width: 50,
				height: 50,
				top: -1000,
				left: "50%",
				"border-radius": "45% 55% 36% 64% / 56% 42% 58% 44%",
				ease: Linear.easeNone,
			}
		),

		TweenMax.fromTo(
			".parallax__skillsjobs__content > div:nth-child(3)",
			1,
			{
				scale: 0.4,
				top: 1400,
				left: "90%",
				marginLeft: -100,
			},
			{
				top: -1000,
				scale: 1.3,
				left: "85%",
				ease: Linear.easeNone,
			}
		),
	]);

	// build scene
	var scene = new ScrollMagic.Scene({
		triggerElement: ".parallax__skillsjobs__content",
		duration: $(".parallax__skillsjobs").height(), // 2000,
		// duration: 600, // 2000,
		// duration: "100%", // use full viewport
		offset: 0, // 450
		// triggerHook: 1,
	})
		.setTween(tween)
		.setPin(".parallax__skillsjobs__content")
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});
