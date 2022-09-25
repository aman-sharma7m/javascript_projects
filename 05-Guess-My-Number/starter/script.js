'use strict';

const randomNumGenerate = function (limit) {
  return Math.trunc(Math.random() * limit) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setGuessValue = function (value) {
  document.querySelector('.guess').value = value;
};

const setScoreValue = function (value) {
  document.querySelector('.score').textContent = value;
};

let num = randomNumGenerate(20); //1-20
let highScore = 0;
let score = 20;

// answer
console.log(`Answer is ${num}`);

//check functionality
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = document.querySelector('.guess').value;
  if (!guessValue && score > 1) {
    displayMessage('No guess value entered');
  } else if (Number(guessValue) > 20 || (Number(guessValue) < 1 && score > 1)) {
    displayMessage('Invalid Value');
    setGuessValue('');
  } else if (Number(guessValue) == num && score > 1) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🍕 Number is correct');
    document.querySelector('.number').textContent = guessValue;
    let scoredValue = document.querySelector('.score').textContent;
    if (highScore < scoredValue) {
      highScore = scoredValue;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (Number(guessValue) != num) {
    if (score > 1) {
      Number(guessValue) < num
        ? displayMessage('📉📉 Guess too low .....')
        : displayMessage('📈📈 Guess too high .....');
      score--;
      setScoreValue(score);
    } else {
      displayMessage('Out of guess....');
      setScoreValue(0);
    }
  } else {
    displayMessage('Out of guess....');
    setScoreValue(0);
  }
});

// Again functionality
document.querySelector('.again').addEventListener('click', function () {
  console.log('clicked');
  num = randomNumGenerate(20);
  score = 20;
  setScoreValue(score);
  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing......');
  document.querySelector('.highscore').textContent = highScore;
  setGuessValue('');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
