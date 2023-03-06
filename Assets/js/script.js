// Preliminary ideas for JS code.
// Potentially have one html for highscores
// One for logic, one for questions, and one for scores
// do an if statement to see if user got answer wrong to decrement time
// have a variable of the current question


var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var timerInterval = null;

// Countdown Function when start button is hit
function countdown() {
  if (timerInterval !== null) {
    // A timer is already running, so don't start a new one
    return;
  }

  var timeLeft = 5;

  timerInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerElement.textContent = timeLeft;
      timeLeft--;
    } else {
      timerElement.textContent = '0';
      clearInterval(timerInterval);
      timerInterval = null; // Reset the timer interval variable
    }
  }, 1000);
}

startButton.addEventListener("click", countdown);
