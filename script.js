'use strict';

const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const playerOneCurrentDisplay = document.querySelector('#current--0');
const playerTwoCurrentDisplay = document.querySelector('#current--1');
const playerOneScoreDisplay = document.querySelector('#score--0');
const playerTwoScoreDisplay = document.querySelector('#score--1');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const newGame = document.querySelector('.btn--new');
let playerOneScore = 0;
let playerTwoScore = 0;
let playerCurrentScore = 0;
let randomDice;

newGame.addEventListener('click', () => {
  if (playerOneScore >= 100 || playerTwoScore >= 100) {
    playerOne.classList.remove('player--winner');
    playerTwo.classList.remove('player--winner');
    rollDice.removeAttribute('disabled');
    hold.removeAttribute('disabled');
  }
  playerOneScore = 0;
  playerTwoScore = 0;
  playerCurrentScore = 0;
  playerOneCurrentDisplay.innerText = '0';
  playerTwoCurrentDisplay.innerText = '0';
  playerOneScoreDisplay.innerText = '0';
  playerTwoScoreDisplay.innerText = '0';
  if (playerTwo.classList.contains('player--active')) {
    playerTwo.classList.remove('player--active');
    playerOne.classList.add('player--active');
  }
});

rollDice.addEventListener('click', () => {
  randomDice = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${randomDice}.png`;
  playerCurrentScore += randomDice;
  if (playerOne.classList.contains('player--active')) {
    playerOneCurrentDisplay.innerText = playerCurrentScore;
    if (randomDice === 1) {
      playerCurrentScore = 0;
      playerOneCurrentDisplay.innerText = playerCurrentScore;
      switchPlayer();
    }
  } else {
    playerTwoCurrentDisplay.innerText = playerCurrentScore;
    if (randomDice === 1) {
      playerCurrentScore = 0;
      playerTwoCurrentDisplay.innerText = playerCurrentScore;
      switchPlayer();
    }
  }
});

hold.addEventListener('click', () => {
  if (playerOne.classList.contains('player--active')) {
    playerOneScore += playerCurrentScore;
    playerOneCurrentDisplay.innerText = 0;
    playerOneScoreDisplay.innerText = playerOneScore;
    playerCurrentScore = 0;
    if (playerOneScore >= 100) {
      playerOne.classList.add('player--winner');
      rollDice.setAttribute('disabled', true);
      hold.setAttribute('disabled', true);
    } else {
      switchPlayer();
    }
  } else {
    playerTwoScore += playerCurrentScore;
    playerTwoCurrentDisplay.innerText = 0;
    playerTwoScoreDisplay.innerText = playerTwoScore;
    playerCurrentScore = 0;
    if (playerTwoScore >= 100) {
      playerTwo.classList.add('player--winner');
      rollDice.setAttribute('disabled', true);
      hold.setAttribute('disabled', true);
    } else {
      switchPlayer();
    }
  }
});

const switchPlayer = function () {
  if (playerOne.classList.contains('player--active')) {
    playerOne.classList.remove('player--active');
    playerTwo.classList.add('player--active');
  } else {
    playerTwo.classList.remove('player--active');
    playerOne.classList.add('player--active');
  }
};
