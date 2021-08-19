$(document).ready(function () {
	const $wrap = $(".website__loading__enable");
	setTimeout(() => {
		$wrap.addClass("website__loading1");
	}, 100);
	setTimeout(() => {
		$wrap.addClass("website__loading2");
	}, 1000);
	setTimeout(() => {
		$wrap.addClass("website__loading__complete");
	}, 2000);
	setTimeout(() => {
		$wrap.addClass("website__loading__complete2");
	}, 2250);
});
