function swapImage() {
	var image = document.getElementById("sticker");
	var select = document.getElementById("motive");

	image.src = "img/sticker_" + select.value + ".svg";
};