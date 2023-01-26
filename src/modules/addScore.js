import { gameId, url } from './gameAPI.js';

// add score
const addScore = async (user, score) => {
  const response = await fetch(`${url}${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const scoreResponse = await response.json();
  return scoreResponse;
};

export default addScore;