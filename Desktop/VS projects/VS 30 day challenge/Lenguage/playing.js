let playing = document.getElementById("playing");
let english = true;
let start = document.getElementById("game");
let luck = document.getElementById("goodLuck");

// Images and words defined
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

//Selecting the answer

let cardChosen = null;
let nameChosen = null;
let selected = null;
let word = null;
let picture = null;

const words = document.querySelectorAll('.name');
const cards = document.querySelectorAll('.card');

//Making them match
const idMap = {
    imgHorse: 'horse',
    imgWhale: 'whale',
    imgMonkey: 'monkey',
    imgRabbit: 'rabbit',
    imgTurtle: 'turtle',
    imgBird: 'bird'
};

//Change border to pictures
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

// Change the color of the words
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

// Function for translating the title

function play() {
    if (english == true) {
        playing.innerHTML = "Spielzeit";
        english = false;
    } else {
        playing.innerHTML = "Playing time";
        english = true;
    }
};

//Initialize time && set score
let timeStart = null;

function gameStart() {
    timerId = setInterval(show, 0);
    timeStart = new Date();
};

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

// Setting up the score
let scoreElement = document.getElementById('score');
let score = 0;

function showWellDone() {
    score = score + 1;
    scoreElement.textContent = "Score: " + score + ". Well done!";
    if (score === 6) {
        scoreElement.textContent = "Your final score is: " + score + ". Congratulations!";
        clearInterval(timerId);
    }
};

//Playing the game && selecting the word

words.forEach(bt => {
    bt.addEventListener('click', (e) => {
        if (nameChosen === null) {
            nameChosen = e.target.id;
            word = e.target;
            console.log(e.target.id);
            checkMatch();
        } else {
            word.style.color = '';
            nameChosen = e.target.id;
            word = e.target;
            console.log(e.target.id);
            checkMatch();
        }
    })
});

//Playing the game && selecting the card 

cards.forEach(bt => {
    bt.addEventListener('click', (e) => {
        if (cardChosen === null) {
            cardChosen = idMap[e.target.id];
            picture = e.target
            checkMatch()
        } else {
            picture.style.border = '';
            cardChosen = idMap[e.target.id];
            picture = e.target
            checkMatch()
        }
    })
});

// Response
function checkMatch() {
    if (cardChosen && nameChosen) {
        if (cardChosen === nameChosen) {
            showWellDone();
            picture.style.display = "none";
            word.style.display = "none";
        }
        else {
            picture.style.border = '';
            word.style.color = '';
        }
        cardChosen = null;
        nameChosen = null;
    }
};

//Reset
document.getElementById('reset').addEventListener('click', function() {
    location.reload();
});
