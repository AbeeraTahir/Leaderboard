import './style.css';
import { addScore, getScores } from './modules/game-api.js';

const nameEl = document.getElementById('your-name');
const scoreEl = document.getElementById('your-score');
const btnReferesh = document.querySelector('.btn-refresh');
const btnSubmit = document.querySelector('.btn-submit-score');
const scoresList = document.querySelector('.scores-info');

// display scores
const displayScores = async () => {
  const scoresArray = await getScores();
  let scoresData = '';
  const sortedScores = scoresArray.result.sort((a, b) => b.score - a.score);
  sortedScores.forEach((item) => {
    scoresData += `<li>${item.user}: ${item.score}</li>`;
  });
  scoresList.innerHTML = scoresData;
};

// refresh buttonS
btnReferesh.addEventListener('click', async () => {
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