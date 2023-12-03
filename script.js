'use strict';

let score = 20;
let highScore = 0;
let randomValue = 0;

// create a random number
function getRandomInt() {
  randomValue = Math.trunc(Math.random() * 20) + 1;
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
    // if value not correct random value
  } else if (value !== randomValue) {
    if (score > 1) {
      calcScore(value > randomValue ? '👎 Down Number!' : '👍 Up Number');
    } else {
      setMessage('💣 You lost the game !');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = randomValue;
      document.querySelector('.check').style.display = 'none';
    }
  }
};

const againGuess = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').style.display = 'block';

  setMessage('Start guessing...');

  getRandomInt();
};

document.querySelector('.check').addEventListener('click', function () {
  checkValue();
});

document.querySelector('.again').addEventListener('click', function () {
  againGuess();
});
