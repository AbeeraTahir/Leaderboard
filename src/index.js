import addScore from './modules/addScore.js';
import displayScores from './modules/displayScores.js';
import './style.css';

const nameElement = document.getElementById('your-name');
const scoreElement = document.getElementById('your-score');
const btnReferesh = document.querySelector('.btn-refresh');
const btnSubmit = document.querySelector('.btn-submit-score');

// refresh buttonS
btnReferesh.addEventListener('click', async (e) => {
  e.preventDefault();
  displayScores();
});

btnSubmit.addEventListener('click', async (e) => {
  e.preventDefault();
  const playerName = nameElement.value;
  const playerScore = scoreElement.value;
  await addScore(playerName, playerScore);
  nameElement.value = '';
  scoreElement.value = '';
});

document.addEventListener('DOMContentLoaded', displayScores);