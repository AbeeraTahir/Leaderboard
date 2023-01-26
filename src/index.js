import addScore from './modules/addScore.js';
import displayScores from './modules/displayScores.js';
import './style.css';

const nameEl = document.getElementById('your-name');
const scoreEl = document.getElementById('your-score');
const btnReferesh = document.querySelector('.btn-refresh');
const btnSubmit = document.querySelector('.btn-submit-score');

// refresh buttonS
btnReferesh.addEventListener('click', async (e) => {
  e.preventDefault();
  displayScores();
});

btnSubmit.addEventListener('click', async (e) => {
  e.preventDefault();
  const playerName = nameEl.value;
  const playerScore = scoreEl.value;
  await addScore(playerName, playerScore);
  nameEl.value = '';
  scoreEl.value = '';
});

document.addEventListener('DOMContentLoaded', displayScores);