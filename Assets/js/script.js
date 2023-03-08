// Preliminary ideas for JS code.
// Potentially have one html for highscores
// One for logic, one for questions, and one for scores
// do an if statement to see if user got answer wrong to decrement time
// have a variable of the current question

// var startButton = document.querySelector(".start-button");
// var timerElement = document.querySelector(".timer-count");
// var timerInterval = null;

// // Countdown Function when start button is hit
// function countdown() {
//   if (timerInterval !== null) {
//     // A timer is already running, so don't start a new one
//     return;
//   }

//   var timeLeft = 5;

//   timerInterval = setInterval(function () {
//     if (timeLeft > 0) {
//       timerElement.textContent = timeLeft;
//       timeLeft--;
//     } else {
//       timerElement.textContent = "0";
//       clearInterval(timerInterval);
//       timerInterval = null; // Reset the timer interval variable
//     }
//   }, 1000);
// }

// startButton.addEventListener("click", countdown);

// Selectors
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var questionText = document.querySelector(".question-text");
var options = document.querySelectorAll(".option-button");
var showQuizCard = document.querySelector(".card-quiz");

// Fun Variables
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var timerInterval;
var currentQuestion = 0;
var score = 0;
var timeLeft = 30;


// Displays the hidden question card
function showSection() {
  showQuizCard.style.display = "flex";
}

// Show the current question
function showQuestion() {
  questionText.textContent = questions[currentQuestion].question;
  for (var i = 0; i < options.length; i++) {
    options[i].textContent = questions[currentQuestion].options[i];
  }
  showSection();
}

// Check the user's answer and update the timer if necessary
function checkAnswer() {
  if (this.textContent === questions[currentQuestion].correctAnswer) {
    alert("Correct!");
    score++;
  } else {
    alert("Incorrect!");
    timeLeft -= 10;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
    timerElement.textContent = timeLeft;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

// Countdown Function when start button is hit
function countdown() {
  timerInterval = setInterval(function () {
    timerElement.textContent = timeLeft;
    timeLeft--;

    if (timeLeft <= 0) {
      endGame();
      alert("Time's up!");
    }
  }, 1000);
  showQuestion();
}

// Add event listeners for the start button and options
startButton.addEventListener("click", countdown);

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("click", checkAnswer);
}

function endGame() {
  timerElement.textContent = "0";
  clearInterval(timerInterval);

  alert("Your score is: " + score);
  var initials = prompt("Enter your initials:");
  // Save the score and initials to local storage
  var newPerson = {
    initials,
    score
  }

  highScores.push(newPerson)
  localStorage.setItem("highScores", JSON.stringify(highScores));

// Allows the quiz to start again without needing to refresh the page
  location.reload()
}
