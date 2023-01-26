import getScores from './getScores.js';

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

export default displayScores;