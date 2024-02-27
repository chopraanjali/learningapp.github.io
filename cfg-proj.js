// Function to mute and unmute the audio for a better user experience
window.onload = function() {
  navigateTo('landing');
};

function toggleMute() {
  let sounds = document.querySelectorAll("audio");
  muteButton.children[0].classList.toggle("fa-volume-xmark");
  sounds.forEach((audio) => {
    audio.muted = !audio.muted;
  });
}

// Function to change the size of elements on hover
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

const muteButton = document.querySelector(".btn-mute");
muteButton.addEventListener("click", toggleMute);

const animals = document.getElementsByClassName("animal");
const letters = document.getElementsByClassName("letter");
const numbers = document.getElementsByClassName("number");

zoomInAndOut(animals);
zoomInAndOut(letters);
zoomInAndOut(numbers);

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
  var currentElement = element.innerHTML;
  if (typeof currentElement === "string") {
    currentElement = currentElement.toLowerCase();
  }

  element.addEventListener("mouseover", function () {
    PlaySound(currentElement);
  });

  element.addEventListener("mouseout", function () {
    StopSound(currentElement);
  });
}

var lettersArray = Array.from(letters);
lettersArray.forEach(hoverAction);

var numbersArray = Array.from(numbers);
numbersArray.forEach(hoverAction);

function handleKeyPress() {

  //const pages = Array.from(document.body.querySelectorAll(".page"));

  var textInput = document.getElementById("textInput");
  var username = textInput.value;

  const welcome = document.getElementById("welcome");

  welcome.innerText  = "Welcome " + username + "!";
  const saveButton = document.getElementById("save");
  saveButton.display="none";

}

// Function to navigate between pages
function navigateTo(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
      page.classList.remove('display');
  });

  // Show the target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
      targetPage.classList.add('display');
  }
}
