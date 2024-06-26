let playing = document.getElementById("playing");
let english = true;
let start = document.getElementById("game");
let luck = document.getElementById("goodLuck");

function play(){
    if(english == true){
        playing.innerHTML = "Spielzeit";
        english=false;
    } else{
        playing.innerHTML = "Playing time";
        english= true;
    }
};

function gameStart(){
    timerId = setInterval(show, 1000);
}

function show(){
    start.style.display = 'block';
    luck.innerHTML = "Good Luck!";
    const d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
    match();
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
const imgMonkey = document.getElementById('imgMonkey');
const imgBird = document.getElementById('imgBird');
const imgWhale = document.getElementById('imgWhale');

function match(){
    if(horse == imgHorse){
        horse.style.color = 'green';
        return("well done");
    }    
}

imgHorse.addEventListener("click", function() {
    imgHorse.style.border = '2px solid black';
});

imgRabbit.addEventListener("click", function() {
    imgRabbit.style.border = '2px solid black';
});

imgTurtle.addEventListener("click", function() {
    imgTurtle.style.border = '2px solid black';
});

imgMonkey.addEventListener("click", function() {
    imgMonkey.style.border = '2px solid black';
});

imgBird.addEventListener("click", function() {
    imgBird.style.border = '2px solid black';
});

imgWhale.addEventListener("click", function() {
    imgWhale.style.border = '2px solid black';
});


document.getElementById('horse').addEventListener("click", function() {
    document.getElementById('horse').style.color = 'green';
});

document.getElementById('rabbit').addEventListener("click", function() {
    document.getElementById('rabbit').style.color = 'green';
});

document.getElementById('turtle').addEventListener("click", function() {
    document.getElementById('turtle').style.color = 'green';
});

document.getElementById('monkey').addEventListener("click", function() {
    document.getElementById('monkey').style.color = 'green';
});

document.getElementById('bird').addEventListener("click", function() {
    document.getElementById('bird').style.color = 'green';
});

document.getElementById('whale').addEventListener("click", function() {
    document.getElementById('whale').style.color = 'green';
});

document.getElementById('reset').addEventListener('click', function() {
    location.reload();
});
