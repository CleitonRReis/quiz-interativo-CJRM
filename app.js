const form = document.querySelector('.quiz-form');
const finalResult = document.querySelector('.result');

const correctAnswer = ['B', 'B', 'B', 'B'];

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;

    const valueForm = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ];

    valueForm.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 25;
        };
    });
    
    scrollTo(0, 0);

    finalResult.classList.remove('d-none');

    let counter = 0;

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer);
        }
        finalResult.querySelector('span').textContent = `${counter}%`;
        counter++;
    }, 10);
});

setTimeout(()=> {
    console.log('Um segundo e meio se passaram desde que a página foi carregada');
}, 1500);