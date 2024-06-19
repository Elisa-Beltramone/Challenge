let practice = document.getElementById("practice");
let seh = document.getElementById("seh");
let sehen = document.getElementById("sehen");
let gesehen = document.getElementById("gesehen");
let sieht = document.getElementById("sieht");
const allButtons = document.querySelectorAll('.btnOption');
let selectedOption = 0;

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
            alert("Well done!")
        }else if(selectedOption=="Tee, bitte."){
            alert("Well done!")
        }else if(selectedOption=="Ich gehe ins Kino."){
            alert("Well done!")
        }else if(selectedOption=="sein"){
            alert("Well done!")
        }else if(selectedOption=="wird morgen fahren"){
            alert("Well done!")
        }else if(selectedOption=="auf"){
            alert("Well done!")
        }else if(selectedOption=="fahren"){
            alert("Well done!")
        }else if(selectedOption=="liegt"){
            alert("Well done!")
        }else if(selectedOption=="freundlich"){
            alert("Well done!")
        }else{
            alert("Try again.")
        }
    })
});

