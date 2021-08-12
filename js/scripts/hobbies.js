$(function () {
	$(".hobbies__item__image img").each(function () {
		$(this).css("border-radius", generateBorderRadiusBlob());
	});
});
