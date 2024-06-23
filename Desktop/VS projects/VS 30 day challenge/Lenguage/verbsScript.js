const allButtons = document.querySelectorAll('.btnOption');
const practice = document.getElementById("practice");
const send = document.getElementById("submit");
const correctAnswers = {
    q1: "gesehen",
    q2: "Tee, bitte.",
    q3: "Ich gehe ins Kino.",
    q4: "sein",
    q5: "wird morgen fahren",
    q6: "auf",
    q7: "fahren",
    q8: "liegt",
    q9: "freundlich"
};

function verbs() {
    practice.innerHTML = practice.innerHTML == "Verbs Practice" ? "Verben üben" : "Verbs Practice";
}

document.querySelector('.exercise').addEventListener('click', (e) => {
    if (e.target.classList.contains('btnOption')) {
        const questionElement = e.target.closest('.question');
        const questionId = questionElement.getAttribute('data-question');
        const selectedAnswer = e.target.getAttribute('data-answer');
        const answerElement = questionElement.querySelector('.answer');

        if (correctAnswers[questionId] === selectedAnswer) {
            answerElement.innerHTML = "Correct";
        } else {
            answerElement.innerHTML = "Try again.";
        }

        
        questionElement.querySelectorAll('.btnOption').forEach(btn => {
            btn.classList.remove('special');
        });

        e.target.classList.add('special');
    }
});

function submit() {
    let score = 0;

    document.querySelectorAll('.question').forEach(questionElement => {
        const questionId = questionElement.getAttribute('data-question');
        const selectedButton = questionElement.querySelector('.btnOption.special');
        const selectedAnswer = selectedButton ? selectedButton.getAttribute('data-answer') : null;
        
        if (correctAnswers[questionId] === selectedAnswer) {
            score++;
        }
    });

    document.getElementById('result').innerHTML = `Your points are: ${score}`;
}
