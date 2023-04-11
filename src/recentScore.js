const content = document.querySelector('.main');

const scores = `
<section class="recent-scores">
    <div class="container">
        <h2>Recent scores</h2>
        <button type="submit">Refresh</button>
    </div>

    <ul class="scores">
        <li>Name: 100</li>
        <li>Name: 20</li>
        <li>Name: 50</li>
        <li>Name: 78</li>
        <li>Name: 125</li>
        <li>Name: 77</li>
        <li>Name: 42</li>
    </ul>
</section>
`;

const showScores = () => {
  content.insertAdjacentHTML('beforeend', scores);
};

export default showScores;