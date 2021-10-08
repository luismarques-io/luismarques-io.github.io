// Autohide navbar
document.addEventListener("DOMContentLoaded", function () {
	el_autohide = document.querySelector(".autohide");

	if (el_autohide) {
		let last_scroll_top = 0;
		window.addEventListener("scroll", function () {
			let scroll_top = window.scrollY;
			if (scroll_top < last_scroll_top) {
				el_autohide.classList.remove("scrolled-down");
				el_autohide.classList.add("scrolled-up");
			} else {
				el_autohide.classList.remove("scrolled-up");
				el_autohide.classList.add("scrolled-down");
			}
			if (scroll_top < 150) {
				el_autohide.classList.add("scrolled-top");
			} else {
				el_autohide.classList.remove("scrolled-top");
				setTimeout(() => {
					el_autohide.classList.remove("scrolled-top-init");
				}, 500);
			}

			last_scroll_top = scroll_top;
		});
	}
});

$(function () {
	$(".navbar__link").on("click", function (e) {
		// Don't hide navbar on click
		// setTimeout(() => {
		// 	$(".autohide").removeClass("scrolled-down").addClass("scrolled-up");
		// }, 20);

		var id = $(this).attr("href").slice(1);
		$("html, body")
			.stop()
			.animate({ scrollTop: $(id).offset().top }, 1200, "swing", function () {
				$(".autohide").removeClass("scrolled-down").addClass("scrolled-up");
			});
	});

	// Hide mobile nav on click
	$(".navbar__menu a:not(.navbar__link__resume)").on("click", function () {
		console.log("here");
		$("#show-menu").prop("checked", false);
	});
});
