'use strict';

document.querySelector('.score').textContent = 20;
let score = document.querySelector('.score').textContent;
let randomValue = 0;
let highScore = 0;

function getRandomInt() {
  randomValue = Math.trunc(Math.random() * 20) + 1;
  console.log(randomValue);
}
getRandomInt();

const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const calcScore = function (message) {
  setMessage(message);
  score--;
  document.querySelector('.score').textContent = score;
};
const checkValue = function () {
  let value = Number(document.querySelector('.guess').value);

  // if value not exist
  if (!value) {
    alert('⛔️ Input correct Number');
    document.querySelector('input').focus();
    console.log(randomValue);
    // if value correct number
  } else if (value === randomValue) {
    setMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomValue;
    document.querySelector('.number').style.width = '30rem';
    // high score value
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // if value lower than random value
  } else if (value < randomValue) {
    if (score <= 0) {
      setMessage('💣 You lost the game...');
    } else {
      calcScore('👍 Up Number');
    }
    // if value higher than random value
  } else {
    if (score <= 0) {
      setMessage('💣 You lost the game...');
    } else {
      calcScore('👎 Down Number!');
    }
  }
};

const againGuess = function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';
  setMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  getRandomInt();
};

document.querySelector('.check').addEventListener('click', function () {
  checkValue();
});

document.querySelector('.again').addEventListener('click', function () {
  againGuess();
});
