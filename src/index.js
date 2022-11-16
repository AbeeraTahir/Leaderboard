import './style.css';
import API from './modules/API.js';

const nameEl = document.getElementById('your-name');
const scoreEl = document.getElementById('your-score');
const btnReferesh = document.querySelector('.btn-refresh');
const btnSubmit = document.querySelector('.btn-submit-score');
const scoresList = document.querySelector('.scores-info');
const api = new API();

// display scores
const displayScores = async () => {
  const scoresArray = await api.getScores();
  let scoresData = '';
  const sortedScores = scoresArray.result.sort((a, b) => b.score - a.score);
  sortedScores.forEach((item) => {
    scoresData += `<li>${item.user}: ${item.score}</li>`;
  });
  scoresList.innerHTML = scoresData;
};

// refresh button
btnReferesh.addEventListener('click', async () => {
  displayScores();
});

btnSubmit.addEventListener('click', async (e) => {
  e.preventDefault();
  const playerName = nameEl.value;
  const playerScore = scoreEl.value;
  await api.addScore(playerName, playerScore);
  displayScores();
  nameEl.value = '';
  scoreEl.value = '';
});

document.addEventListener('DOMContentLoaded', displayScores);