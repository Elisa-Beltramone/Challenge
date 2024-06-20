let practice = document.getElementById("practice");
let seh = document.getElementById("seh");
let sehen = document.getElementById("sehen");
let gesehen = document.getElementById("gesehen");
let sieht = document.getElementById("sieht");
const allButtons = document.querySelectorAll('.btnOption');
let selectedOption = 0;
let answerQ1 = document.getElementById("answerQ1");

function verbs() {
    if (practice.innerHTML == "Verbs Practice") {
        practice.innerHTML = "Verben üben";
    } else {
        practice.innerHTML = "Verbs Practice";
    }
}

allButtons.forEach(bt =>{
    bt.addEventListener('click', (e) =>{
        selectedOption = e.target.innerHTML;
        console.log(selectedOption);
        if(selectedOption=="gesehen"){
            answerQ1.innerHTML = "Correct"
            
        }else if(selectedOption=="Tee, bitte."){
            answerQ2.innerHTML = "Correct"
        }else if(selectedOption=="Ich gehe ins Kino."){
            answerQ3.innerHTML = "Correct"
        }else if(selectedOption=="sein"){
            answerQ4.innerHTML = "Correct"
        }else if(selectedOption=="wird morgen fahren"){
            answerQ5.innerHTML = "Correct"
        }else if(selectedOption=="auf"){
            answerQ6.innerHTML = "Correct"
        }else if(selectedOption=="fahren"){
            answerQ7.innerHTML = "Correct"
        }else if(selectedOption=="liegt"){
            answerQ8.innerHTML = "Correct"
        }else if(selectedOption=="freundlich"){
            answerQ9.innerHTML = "Correct"
        }else{
            answerQ1.innerHTML = "Try again."
        }
    })
});

