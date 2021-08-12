$(function () {
	$(".skills__blobs .blob").each(function () {
		$(this).css("border-radius", generateBorderRadiusBlob());
	});
});
