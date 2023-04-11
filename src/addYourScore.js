const content = document.querySelector('.main');

const yourScore = `
<section class="add-your-score">
    <h2>Add your score</h2>
    <form action="#">
    <input type="text" id="text" placeholder="Your name" />
    <input
        type="number"
        name="number"
        id="number"
        placeholder="Your score"
    />
    <button type="submit">Submit</button>
    </form>
</section>
`;

const addScore = () => {
  content.insertAdjacentHTML('beforeend', yourScore);
};

export default addScore;
