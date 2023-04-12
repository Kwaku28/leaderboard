import './style.css';
import recentScores from './module/recentScore.js';
import addYourScore from './module/addYourScore.js';
import addScore from './module/addScore.js';
import showScores from './module/showScore.js';
import displayScores from './module/displayScore.js';

recentScores();
addYourScore();

const form = document.querySelector('form');
const userName = document.querySelector('#name');
const userScore = document.querySelector('#number');
const Scores = document.querySelector('.scores');
const refreshButton = document.querySelector('#refresh');

const scoreContainer = () => {
  Scores.innerHTML = '';
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userName.value && userScore.value) {
    addScore(userName.value.trim(), userScore.value.trim());
    scoreContainer();
    form.reset();
    displayScores().then((obj) => showScores(obj, Scores));
  }
});

refreshButton.addEventListener('click', () => {
  scoreContainer();
  displayScores().then((obj) => showScores(obj, Scores));
});