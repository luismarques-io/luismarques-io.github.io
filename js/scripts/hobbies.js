genRand = (min, max, decimalPlaces = 0) =>
	(Math.random() * (max - min) + min).toFixed(decimalPlaces) * 1;

// https://codepen.io/LekovicMilos/pen/omVzYv
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

$(function () {
	$(".hobbies__item__image img").each(function () {
		$(this).css("border-radius", generateBorderRadiusBlob());
	});
	A;
});
