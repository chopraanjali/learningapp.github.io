function goTo() {}

function setAccessibility() {}

function toggleMute() {}

animals = document.getElementsByClassName("animal");
for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener("mouseover", () => {
    animals[i].classList.add("makeBigger");
  });

  animals[i].addEventListener("mouseout", () => {
    animals[i].classList.remove("makeBigger");
  });
}

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
