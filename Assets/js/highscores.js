// retrieve the high scores from local storage
var highScores = JSON.parse(localStorage.getItem("highScores"));

// check if there are any high scores in local storage
if (highScores === null || highScores.length === 0) {
  // if there are no high scores, display a message
  document.getElementById("highscore-data").innerHTML = "No high scores to display.";
} else {
  // if there are high scores, create a string to display the data
  var dataString = "";
  for (var i = 0; i < highScores.length; i++) {
    dataString += "Initials: " + highScores[i].initials + "<br>Score: " + highScores[i].score + "<br><br>";
  }
  // display the data in the HTML
  document.getElementById("highscore-data").innerHTML = dataString;
}
