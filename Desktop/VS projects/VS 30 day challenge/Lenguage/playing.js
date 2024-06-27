let playing = document.getElementById("playing");
let english = true;
let start = document.getElementById("game");
let luck = document.getElementById("goodLuck");

function play() {
    if (english == true) {
        playing.innerHTML = "Spielzeit";
        english = false;
    } else {
        playing.innerHTML = "Playing time";
        english = true;
    }
};

let timeStart = null;

function gameStart() {
    timerId = setInterval(show, 0);
    timeStart = new Date();
}
let timer = document.getElementById("time");
let currentTime = null;
let timeElapsed = null;
function show() {
    start.style.display = 'block';
    luck.style.display = "none";
    currentTime = new Date();
    timeElapsed = currentTime - timeStart;
    timer.innerHTML = Math.floor(timeElapsed / 1000) + "s";
};

let horse = document.getElementById('horse');
let rabbit = document.getElementById('rabbit');
let turtle = document.getElementById('turtle');
const monkey = document.getElementById('monkey');
const bird = document.getElementById('bird');
const whale = document.getElementById('whale');

let imgHorse = document.getElementById('imgHorse');
let imgRabbit = document.getElementById('imgRabbit');
let imgTurtle = document.getElementById('imgTurtle');
let imgMonkey = document.getElementById('imgMonkey');
let imgBird = document.getElementById('imgBird');
let imgWhale = document.getElementById('imgWhale');

let scoreElement = document.getElementById('score');
let score = 0;

function showWellDone() {
    score = score + 1;
    scoreElement.textContent = "Score: " + score + ". Well done!";
    if (score === 6) {
        scoreElement.textContent = "Your final score is: " + score + ". Congratulations!";
        clearInterval(timerId);    }
};

imgHorse.addEventListener("click", function () {
    imgHorse.style.border = '2px solid black';
});

imgRabbit.addEventListener("click", function () {
    imgRabbit.style.border = '2px solid black';
});

imgTurtle.addEventListener("click", function () {
    imgTurtle.style.border = '2px solid black';
});

imgMonkey.addEventListener("click", function () {
    imgMonkey.style.border = '2px solid black';
});

imgBird.addEventListener("click", function () {
    imgBird.style.border = '2px solid black';
});

imgWhale.addEventListener("click", function () {
    imgWhale.style.border = '2px solid black';
});


horse.addEventListener("click", function () {
    horse.style.color = 'green';
});

rabbit.addEventListener("click", function () {
    rabbit.style.color = 'green';
});

turtle.addEventListener("click", function () {
    turtle.style.color = 'green';
});

monkey.addEventListener("click", function () {
    monkey.style.color = 'green';
});

bird.addEventListener("click", function () {
    bird.style.color = 'green';
});

whale.addEventListener("click", function () {
    whale.style.color = 'green';
});

document.getElementById('reset').addEventListener('click', function () {
    location.reload();
});

let cardChosen = null;
let nameChosen = null;
let selected = null;
let word = null;
let card = null;


const words = document.querySelectorAll('.name');
const cards = document.querySelectorAll('.card');

words.forEach(bt => {
    bt.addEventListener('click', (e) => {
        nameChosen = e.target.id;
        word = e.target;
        console.log(e.target.id);
        checkMatch();
    })
});

const idMap = {
    imgHorse: 'horse',
    imgWhale: 'whale',
    imgMonkey: 'monkey',
    imgRabbit: 'rabbit',
    imgTurtle: 'turtle',
    imgBird: 'bird'
};

cards.forEach(bt => {
    bt.addEventListener('click', (e) => {
        cardChosen = idMap[e.target.id];
        console.log(e.target.id);
        card = e.target
        checkMatch()
    })
});

function checkMatch() {
    if (cardChosen && nameChosen) {
        if (cardChosen === nameChosen) {
            showWellDone();
            card.style.display = "none";
            word.style.display = "none";

        }
        cardChosen = null;
        nameChosen = null;
    }
}