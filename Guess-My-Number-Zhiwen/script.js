'use strict';
let MyNumber = Math.ceil(Math.random(1) * 20);
let MyScore = 20;
let HighScore = 0;

console.log(MyNumber);
document.querySelector('.check').addEventListener('click', compareGuess);

function compareGuess() {
  let MyGuess = parseInt(document.querySelector('.guess').value);

  if (!MyGuess) displayMessage('.message', 'No number');
  else if (MyGuess === MyNumber) {
    document.querySelector('.number').textContent = MyNumber;
    displayMessage('.message', '🎉 Correct number');
    document.body.style.backgroundColor = 'green';
    if (MyScore > HighScore) {
      HighScore = MyScore;
      displayMessage('.highscore', MyScore);
    }
  } else if (MyGuess !== MyNumber) {
    MyGuess > MyNumber
      ? displayMessage('.message', 'Too high')
      : displayMessage('.message', 'Too low');
    MyScore--;
    displayMessage('.score', MyScore);
  }
}

document.querySelector('.again').addEventListener('click', function () {
  MyNumber = Math.ceil(Math.random(1) * 20);
  MyScore = 20;
  displayMessage('.score', MyScore);
  document.body.style.backgroundColor = '#222';
  displayMessage('.message', 'Start guessing');
  displayMessage('.number', '?');
  displayMessage('.guess', '');
});
function displayMessage(classID, message) {
  document.querySelector(classID).textContent = message;
}
