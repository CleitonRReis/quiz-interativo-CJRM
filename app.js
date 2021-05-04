const form = document.querySelector('.quiz-form');
const span = document.querySelector('span');
const modal = document.querySelector('.quiz-modal');
const corectOptions = ['B', 'B', 'B', 'B'];

const timerOut = () => {
    setTimeout(() => {
        modal.classList.remove('show-modal');
    }, 2500);
};

form.addEventListener('submit', event => {
    event.preventDefault();

    const options = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ];

    let score = 0;

    options.forEach((option, index) => {
        if (option === corectOptions[index]) {
            score += 25;
        };
    });

    modal.classList.add('show-modal');

    scrollTo(0, 0);

    let counter = 0;

    let timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer);
        };

        span.textContent = `${counter++}%`;
    }, 10);

    timerOut();
});