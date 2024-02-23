function goTo() {}

function setAccessibility() {}

function toggleMute() {}

const animals = document.getElementsByClassName("animal");
const letters = document.getElementsByClassName("letter");
const numbers = document.getElementsByClassName("number");

function zoomInAndOut(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("mouseover", () => {
      element[i].classList.add("makeBigger");
    });
    element[i].addEventListener("mouseout", () => {
      element[i].classList.remove("makeBigger");
    });
  }
}

zoomInAndOut(animals);
zoomInAndOut(letters);
zoomInAndOut(numbers);

function buttonClick() {}

function PlaySound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}
