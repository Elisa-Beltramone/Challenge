let playing = document.getElementById("playing");
let english = true;
let start = document.getElementById("game");

function play(){
    if(english == true){
        playing.innerHTML = "Spielzeit";
        english=false;
    } else{
        playing.innerHTML = "Playing time";
        english= true;
    }
};

function show(){
    start.style.display = 'block';
};