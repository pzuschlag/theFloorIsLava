var animals = document.getElementsByClassName("move");
var windowHeight = document.documentElement.clientHeight;

function moveAnimals(animal) {
  var windowTopPos = document.documentElement.scrollTop;

  if (((windowTopPos + windowHeight) > animal.offsetTop) && ((windowTopPos) < (animal.offsetTop + animal.offsetHeight))) {

    var dist = (windowTopPos + windowHeight / 2) - (animal.offsetTop + animal.offsetHeight / 2);
    var ref = dist / (windowHeight / 10);

    animal.style.transform = 'translateY(' + (parseInt((ref * 10) / 4) * -1) + "%)";
  }
}

window.addEventListener('scroll', function () { moveAnimals(animals[0]); });
window.addEventListener('scroll', function () { moveAnimals(animals[1]); });
window.addEventListener('scroll', function () { moveAnimals(animals[2]); });