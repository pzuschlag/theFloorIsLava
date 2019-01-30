var fires = document.getElementsByClassName("move");
var windowHeight = document.documentElement.clientHeight;

function moveFires(fire) {
  var windowTopPos = document.documentElement.scrollTop;

  if (((windowTopPos + windowHeight) > fire.offsetTop) && ((windowTopPos) < (fire.offsetTop + fire.offsetHeight))) {

    var dist = (windowTopPos + windowHeight / 2) - (fire.offsetTop + fire.offsetHeight / 2);
    var ref = dist / (windowHeight / 10);

    fire.style.transform = "translateY(" + parseInt(ref * (-2.5)) + "%)";
  }
}

window.addEventListener("scroll", function () {
  for (var i = 0; i < fires.length; i++) {
    moveFires(fires[i]);
  }
});