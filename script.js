'use strict';
const between = document.querySelector('.between');
const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

let scoreCount = 20;
let highScoreCount = 0;
let finalScore;
let answer;

setNumber();

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No Number!';
  } else {
    if (scoreCount > 0) {
      if (guess !== answer) {
        message.textContent =
          guess > answer ? `Smaller than ${guess}` : `Bigger than ${guess}`;
        scoreDecrease();
      } else {
        message.textContent = 'Correct!';
        displayVictory();
        checkFinalScore();
      }

      // if (guess > answer) {
      //   message.textContent = `Smaller than ${guess}`;
      //   scoreDecrease();
      // } else if (guess < answer) {
      //   message.textContent = `Bigger than ${guess}`;
      //   scoreDecrease();
      // } else {
      //   message.textContent = 'Correct!';
      //   displayVictory();
      //   checkFinalScore();
      // }
    } else {
      message.textContent = 'You lost! Try again';
    }
  }
});

againBtn.addEventListener('click', () => {
  reset();
});

function setNumber() {
  answer = Math.trunc(Math.random() * 20 + 1);
  console.log(answer);
}

function scoreDecrease() {
  scoreCount--;
  score.textContent = scoreCount;
}

function displayVictory() {
  number.textContent = answer;
  number.style.width = `30rem`;
  body.style.backgroundColor = `#60b347`;
}

function checkFinalScore() {
  finalScore = Number(scoreCount);
  if (finalScore > highScoreCount) {
    highScoreCount = finalScore;
    highScore.textContent = highScoreCount;
  }
}

function reset() {
  message.textContent = 'Start guessing...';
  scoreCount = 20;
  finalScore = 0;
  score.textContent = scoreCount;
  number.textContent = `?`;
  number.style.width = `15rem`;
  body.style.backgroundColor = `#222`;
  setNumber();
}
