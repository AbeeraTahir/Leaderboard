import { gameId, url } from './gameAPI.js';

// get scores
const getScores = async () => {
  const response = await fetch(`${url}${gameId}/scores`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const scoreData = await response.json();
  return scoreData;
};

export default getScores;
