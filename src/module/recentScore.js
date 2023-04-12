const content = document.querySelector('.main');

const scores = `
<section class="recent-scores">
    <div class="container">
        <h2>Recent scores</h2>
        <button type="button" id="refresh">Refresh</button>
    </div>

    <ul class="scores"></ul>
</section>
`;

const recentScores = () => {
  content.insertAdjacentHTML('beforeend', scores);
};

export default recentScores;