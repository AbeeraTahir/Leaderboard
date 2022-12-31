const gameId = 'RQlljNVPCPOWeSNibCxx';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

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

// get score
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

export { addScore, getScores };