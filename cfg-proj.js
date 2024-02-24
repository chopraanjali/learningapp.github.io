document.addEventListener("DOMContentLoaded", function() {
  const letterElements = document.getElementsByClassName('letter');
  const numberElements = document.getElementsByClassName('number');
  letterElements.forEach(element => {
    hoverAction(element);
  });
  numberElements.forEach(element => {
    hoverAction(element);
  });
  
});

const animals = document.getElementsByClassName("animal");

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

function hoverAction(element) {
  var currentElement = element.innerHTML.toLowerCase();
  
  element.addEventListener("mouseover", function() {
    PlaySound(currentElement);
  });
  
  element.addEventListener("mouseout", function() {
    StopSound(currentElement);
  });
}


