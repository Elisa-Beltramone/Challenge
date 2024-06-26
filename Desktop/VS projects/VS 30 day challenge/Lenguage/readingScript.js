let read = document.getElementById("reading");
let language = true;
let question1 = document.getElementById("question1B");
let question2 = document.getElementById("question2D");
let question3 = document.getElementById("question3B");
let question4 = document.getElementById("question4C");
let question5 = document.getElementById("question5B");
let question6 = document.getElementById("question6B");

function reading(){
    if(language == true ) {
        read.innerHTML = "Reading Comprehension";
        language = false;
    } else {
        read.innerHTML = "Leseverständnis Text";
        language = true;
    }
}

function isCorrect() {
    if (question1.checked == true) {
        document.getElementById("answer1").innerHTML = "Correct";
    } else {
        document.getElementById("answer1").innerHTML = "Try again";
    }

    if (question2.checked == true) {
        document.getElementById("answer2").innerHTML = "Correct";
    } else {
        document.getElementById("answer2").innerHTML = "Try again";
    }

    if (question3.checked == true) {
        document.getElementById("answer3").innerHTML = "Correct";
    } else {
        document.getElementById("answer3").innerHTML = "Try again";
    }

    if (question4.checked == true) {
        document.getElementById("answer4").innerHTML = "Correct";
    } else {
        document.getElementById("answer4").innerHTML = "Try again";
    }

    if (question5.checked == true) {
        document.getElementById("answer5").innerHTML = "Correct";
    } else {
        document.getElementById("answer5").innerHTML = "Try again";
    }

    if (question6.checked == true) {
        document.getElementById("answer6").innerHTML = "Correct";
    } else {
        document.getElementById("answer6").innerHTML = "Try again";
    }
}