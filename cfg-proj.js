
function goTo(){

}

function setAccessibility(){

}

function toggleMute(){

}

function resize(){
}

function buttonClick(){ 
}

function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
  }
  
  function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
  }