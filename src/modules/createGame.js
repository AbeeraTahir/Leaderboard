// function for getting game id
const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Racing Game',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const gameId = await response.json();
  return gameId;
};

export default createGame;