var textToWrite = "Ultimate Destination for NSUT Students !";
var textContainer = document.getElementById("text-container");

var currentPosition = 0;
var interval;

function animateTextWriting() {
  textContainer.innerHTML = '';
  currentPosition = 0;

  interval = setInterval(function() {
    textContainer.innerHTML += textToWrite[currentPosition];
    currentPosition++;
    
    if (currentPosition === textToWrite.length) {
      clearInterval(interval); 
    }
  }, 100);
}

function startAnimation() {
  clearInterval(interval); // Clear any previous interval
  animateTextWriting(); 
}

function handleVisibilityChange() {
  if (document.hidden) {
    clearInterval(interval); // Pause animation
  } else {
    startAnimation(); // Resume animation
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange);

function restartAnimation() {
  startAnimation();
  setInterval(startAnimation, 10000); 
}

restartAnimation();
