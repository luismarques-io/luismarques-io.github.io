// Autohide navbar
document.addEventListener("DOMContentLoaded", function () {
	el_autohide = document.querySelector(".autohide");

	if (el_autohide) {
		var last_scroll_top = 0;
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
			}
			setTimeout(() => {
				el_autohide.classList.remove("scrolled-top-init");
			}, 500);
			last_scroll_top = scroll_top;
		});
		// window.addEventListener
	}
	// if
});
// DOMContentLoaded  end
