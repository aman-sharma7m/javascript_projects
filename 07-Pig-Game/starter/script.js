'use strict';
let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0];
let playing = true;

// selecting the elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const currentElement0 = document.querySelector('#current--0');
const currentElement1 = document.querySelector('#current--1');
const player0section = document.querySelector('.player--0');
const player1section = document.querySelector('.player--1');

// clickable elements
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

//functions
//switch player function
const switchPlayer = function () {
  //zeroing the current player result
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  // switch to next player
  activePlayer = activePlayer == 0 ? 1 : 0;
  //resetting the currentscore
  currentScore = 0;
  //switching the background to current player
  player0section.classList.toggle('player--active');
  player1section.classList.toggle('player--active');
};

//reset function
const GameReset = function () {
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  diceElement.classList.add('hidden');
  currentElement0.textContent = 0;
  currentElement1.textContent = 0;
  player0section.classList.remove('player--winner');
  player1section.classList.remove('player--winner');
  player1section.classList.remove('player--active');
  player0section.classList.add('player--active');
  playing = true;
};

//////////////////Main///////////////////////////////

// start game settings
GameReset();

// rolling the dice
rollDice.addEventListener('click', function () {
  if (playing) {
    // generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    // check for one if true switch
    if (dice != 1) {
      // add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//hold button functionality
holdDice.addEventListener('click', function () {
  if (playing) {
    //update the current player score to final score
    scores[activePlayer] += currentScore;
    //display the final score
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] < 20) {
      switchPlayer();
    } else {
      //declare the winner
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    }
  }
});

//reset funtionality
newGame.addEventListener('click', function () {
  //reset all scores and display
  GameReset();
});
