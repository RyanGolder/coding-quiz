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
      timerElement.textContent = "0";
      clearInterval(timerInterval);
      timerInterval = null; // Reset the timer interval variable
    }
  }, 1000);
}

startButton.addEventListener("click", countdown);

// var startButton = document.querySelector(".start-button");
// var timerElement = document.querySelector(".timer-count");
// var timerInterval = null;
// var currentQuestion = 0;
// var score = 0;

// // Countdown Function when start button is hit
// function countdown() {
//   if (timerInterval !== null) {
//     // A timer is already running, so don't start a new one
//     return;
//   }

//   var timeLeft = 30;

//   timerInterval = setInterval(function () {
//     if (timeLeft > 0) {
//       timerElement.textContent = timeLeft;
//       timeLeft--;
//     } else {
//       timerElement.textContent = '0';
//       clearInterval(timerInterval);
//       timerInterval = null; // Reset the timer interval variable
//       alert('Time\'s up!');
//     }
//   }, 1000);
// }

// // Show the current question
// function showQuestion() {
//   var questionText = document.querySelector(".question-text");
//   var options = document.querySelectorAll(".option");

//   questionText.textContent = questions[currentQuestion].question;

//   for (var i = 0; i < options.length; i++) {
//     options[i].textContent = questions[currentQuestion].options[i];
//     options[i].addEventListener("click", checkAnswer);
//   }
// }

// // Check the user's answer and update the timer if necessary
// function checkAnswer() {
//   if (this.textContent === questions[currentQuestion].correctAnswer) {
//     alert('Correct!');
//     score++;
//   } else {
//     alert('Incorrect!');
//     var timeLeft = parseInt(timerElement.textContent);
//     timeLeft -= 10;
//     if (timeLeft < 0) {
//       timeLeft = 0;
//     }
//     timerElement.textContent = timeLeft;
//   }

//   currentQuestion++;

//   if (currentQuestion < questions.length) {
//     showQuestion();
//   } else {
//     clearInterval(timerInterval);
//     timerInterval = null; // Reset the timer interval variable
//     alert('Your score is: ' + score);
//     var initials = prompt('Enter your initials:');
//     // Save the score and initials to local storage
//     localStorage.setItem('highscore', score);
//     localStorage.setItem('initials', initials);
//   }
// }

// startButton.addEventListener("click", countdown);
// showQuestion();

// Note that in this updated code, we have added a currentQuestion variable to keep track of the current question being displayed, and a score variable to keep track of the user's score.

// We have also updated the countdown function to set the initial time to 30 seconds, and added an alert message to be displayed when the time runs out.

// The showQuestion function has been updated to populate the question and answer options from the questions array, and add an event listener to each option to check the user's answer.

// The checkAnswer function has been added to check the user's answer, update the score and timer, and move on to the next question when the user selects an answer. Once all questions have been answered, it displays the user's score, prompts them to enter their initials, and saves the score and initials to local storage.

// Keep in mind that this is just one way to implement the functionality you described, and there are many other approaches you could take.
