const displayScores = async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PoD2oEAGxHjEf1qbKjiQ/scores/';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scores = await response.json();
  return scores;
};

export default displayScores;