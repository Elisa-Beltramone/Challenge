let germanDisplay = document.getElementById("germanWords");
let englishDisplay = document.getElementById("englishWords");

const germanWords = [
  { german: "sein", english: "to be" },
  { german: "haben", english: "to have" },
  { german: "werden", english: "to become" },
  { german: "können", english: "can" },
  { german: "müssen", english: "must" },
  { german: "wollen", english: "want" },
  { german: "sagen", english: "to say" },
  { german: "machen", english: "to make/do" },
  { german: "geben", english: "to give" },
  { german: "kommen", english: "to come" },
  { german: "gehen", english: "to go" },
  { german: "wissen", english: "to know" },
  { german: "sehen", english: "to see" },
  { german: "lassen", english: "to let/allow" },
  { german: "stehen", english: "to stand" },
  { german: "finden", english: "to find" },
  { german: "bleiben", english: "to stay" },
  { german: "liegen", english: "to lie" },
  { german: "heißen", english: "to be called" },
  { german: "denken", english: "to think" },
  { german: "nehmen", english: "to take" },
  { german: "tun", english: "to do" },
  { german: "dürfen", english: "may" },
  { german: "glauben", english: "to believe" },
  { german: "halten", english: "to hold/stop" },
  { german: "nennen", english: "to name" },
  { german: "mögen", english: "to like" },
  { german: "zeigen", english: "to show" },
  { german: "führen", english: "to lead" },
  { german: "sprechen", english: "to speak" },
  { german: "bringen", english: "to bring" },
  { german: "fahren", english: "to drive/go" },
  { german: "leben", english: "to live" },
  { german: "meinen", english: "to mean" },
  { german: "fragen", english: "to ask" },
  { german: "kennen", english: "to know" },
  { german: "gelten", english: "to be valid" },
  { german: "stellen", english: "to place/put" },
  { german: "spielen", english: "to play" },
  { german: "arbeiten", english: "to work" },
  { german: "brauchen", english: "to need" },
  { german: "folgen", english: "to follow" },
  { german: "lernen", english: "to learn" },
  { german: "verstehen", english: "to understand" },
  { german: "versuchen", english: "to try" },
  { german: "schreiben", english: "to write" },
  { german: "laufen", english: "to run" },
  { german: "erklären", english: "to explain" },
  { german: "sitzen", english: "to sit" },
  { german: "scheinen", english: "to seem" },
  { german: "gehören", english: "to belong" },
  { german: "bekommen", english: "to get" },
  { german: "anfangen", english: "to begin" },
  { german: "erzählen", english: "to tell" },
  { german: "wohnen", english: "to live/reside" },
  { german: "treffen", english: "to meet" },
  { german: "reden", english: "to talk" },
  { german: "lesen", english: "to read" },
  { german: "aussehen", english: "to look/appear" },
  { german: "betreten", english: "to enter" },
  { german: "beginnen", english: "to begin" },
  { german: "suchen", english: "to search/look for" },
  { german: "helfen", english: "to help" },
  { german: "fühlen", english: "to feel" },
  { german: "interessieren", english: "to interest" },
  { german: "erinnern", english: "to remember" },
  { german: "schaffen", english: "to create/manage" },
  { german: "bedeuten", english: "to mean" },
  { german: "treffen", english: "to hit" },
  { german: "studieren", english: "to study" },
  { german: "hoffen", english: "to hope" },
  { german: "warten", english: "to wait" },
  { german: "gewinnen", english: "to win" },
  { german: "verlieren", english: "to lose" },
  { german: "bieten", english: "to offer" },
  { german: "genießen", english: "to enjoy" },
  { german: "erzählen", english: "to narrate" },
  { german: "entwickeln", english: "to develop" },
  { german: "ziehen", english: "to pull/move" },
  { german: "versuchen", english: "to try/attempt" },
  { german: "tragen", english: "to carry/wear" },
  { german: "verlieren", english: "to lose" },
  { german: "erscheinen", english: "to appear" },
  { german: "schließen", english: "to close" },
  { german: "verbringen", english: "to spend time" },
  { german: "legen", english: "to lay" },
  { german: "bauen", english: "to build" },
  { german: "schützen", english: "to protect" },
  { german: "betreiben", english: "to operate" },
  { german: "erkennen", english: "to recognize" },
  { german: "fallen", english: "to fall" },
  { german: "sammeln", english: "to collect" },
  { german: "lieben", english: "to love" },
  { german: "hassen", english: "to hate" },
  { german: "fühlen", english: "to feel" },
  { german: "backen", english: "to bake" },
  { german: "trinken", english: "to drink" },
  { german: "kochen", english: "to cook" },
  { german: "reisen", english: "to travel" },
  { german: "aufstehen", english: "to get up" }
];

let start = "";
let germanList = {};
let englishList = [];

// Make random words and start time

function showWords() {
  let i = 0;
  germanList = [];
  englishList = [];
  while (i < 10) {
    let x = Math.round(Math.random() * 100 + 1);
    let wordAdded = {
      [i]: germanWords[x].german
    };
    let wordAddedEnglish = {
      [i]: germanWords[x].english
    };
    germanList.push(wordAdded);
    englishList.push(wordAddedEnglish);
    i++
  }
  printList();
  document.getElementById("play").style.display = "none";
  start = new Date();
  setInterval(time, 1000);
  reset();
};

function time() {
  const timer = document.getElementById("time");
  let currentTime = new Date();
  let total = Math.floor((currentTime - start) / 1000);
  timer.innerHTML = `Time: ${total}`;
};

// Check the score

// Change the order

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Show list of words

function printList() {
  germanList = shuffleArray(germanList);
  englishList = shuffleArray(englishList);

  for (i in germanList) {
    let germanValues = Object.values(germanList[i]);
    germanValues.forEach(function (word) {
      let paragraph = document.createElement('p');
      let uniqueId = `${word}`;
      paragraph.Id = uniqueId;
      paragraph.textContent = word;
      germanDisplay.appendChild(paragraph);
    });
  }

  englishList.forEach(function (word) {
    let paragraph = document.createElement('p');
    paragraph.textContent = word;
    englishDisplay.appendChild(paragraph);
  });
}

// Check if cliked

germanDisplay.addEventListener('click', function(event) {
  if (event.target.tagName === 'P') {
      console.log('A paragraph was clicked:', event.target.textContent);
      event.target.style.color = 'red';
  }
});
englishDisplay.addEventListener('click', function(event) {
  if (event.target.tagName === 'P') {
    console.log('A paragraph was clicked:', event.target.textContent);
    event.target.style.color = 'pink';
}
});

// Reset
function reset() {
  let restart = document.getElementById("restart");
  let startAgain = document.createElement('button');
  startAgain.textContent = "Restart";
  restart.append(startAgain);

  restart.addEventListener('click', function () {
    location.reload();
  })
}