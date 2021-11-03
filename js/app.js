const qwerty = document.getElementById('qwerty');
const keyboardButtons = document.querySelectorAll('#qwerty div button');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const btn = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');

// Hide overlay on starting

startGame.addEventListener('click', (e) => {
  overlay.style.display='none';
});

// Split phrases into letter arrays and turn them into list items if they are letters

let phrases = [
  "when ires went to the butcher",
  "everytime the same story",
  "in nature we are ourselves",
  "i have tickets to the ball",
  "start investing yesterday"
];

function getRandomPhraseAsArray(arr){
  let random = arr[Math.floor(Math.random() * arr.length)];
  let y = random.split('');
  return y;
}

let characterArray = getRandomPhraseAsArray(phrases);
let display = addPhraseToDisplay(characterArray);

// Adding the phrase to the display

function addPhraseToDisplay(arr){
  for(let i =0; i<arr.length; i++){
    const li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);
    if(arr[i] != " "){
      li.className='letter';
    } else {
      li.className='letter';
      li.className='space';
    }
  }
};

let letters = Array.from(document.querySelectorAll('.letter'));


// CHECKLETTER

function checkLetter(x){
  let letterFound =null;
  let letters = Array.from(document.querySelectorAll('.letter'));

  for(let i=0; i<letters.length; i++){
    if(letters[i].innerHTML == x.textContent){
      letters[i].className+=" show";
      letterFound = letters[i];
    }
  }
  return letterFound;
};


// RESET BUTTONS

function reset(){
  while( ul.lastChild ){
    ul.removeChild(ul.lastChild);
  }
  for( let i =0; i<keyboardButtons.length; i++){
    keyboardButtons[i].className = "";
    keyboardButtons[i].disabled = false;
  }
  console.log('reset');
  let hearts = Array.from(document.querySelectorAll('.tries img'));
  for ( let i=0; i<hearts.length; i++){
    hearts[i].src="images/liveHeart.png";
  }
}

function winnerButton(){
  overlay.className = 'win';
  overlay.style.display='flex';
  let btnReset = document.querySelector('.btn__reset');
  btnReset.remove();
  let h2 = document.querySelector('h2');
  h2.textContent= "Winner, winner, chicken dinner!";
  let btn = document.createElement("button");
  btn.innerHTML = "Let's start over";
  btn.className = "btn__reset btn__winner"
  overlay.appendChild(btn);
  btn.addEventListener( 'click', function(){
    missed = 0;
    characterArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(characterArray);
    overlay.style.display='none';
  });
}

function loserButton(){
  overlay.className = 'lose';
  overlay.style.display='flex';
  let btnReset = document.querySelector('.btn__reset');
  btnReset.remove();
  let h2 = document.querySelector('h2');
  h2.textContent= "Yay, that's a bummer";
  let btn = document.createElement("button");
  btn.innerHTML = "Let's start over";
  btn.className = "btn__reset btn__loser"
  overlay.appendChild(btn);
  btn.addEventListener( 'click', function(){
    missed = 0;
    characterArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(characterArray);
    overlay.style.display='none';
  });
}

function resetLoser(){
  reset();
  loserButton();
}

function resetWinner(){
  reset();
  winnerButton();
}

// CHECKWIN

function checkWin(){
  let lettersShown = Array.from(document.querySelectorAll('.show'));
  if (lettersShown.length == letters.length){
    resetWinner();
  } else if (missed>=1){
    resetLoser();
  }
}

// Keyboard button eventlisteners
// Changing button state after chosen
// Counts lifes

qwerty.addEventListener('click', (e) => {
  let item = e.target;
    if ( e.target.tagName === "BUTTON" ){
        item.className = " chosen";
        item.disabled = true;
    }
    let hearts = Array.from(document.querySelectorAll('.tries img'));
    if (checkLetter(item) == null && e.target.tagName === "BUTTON"){
        hearts[missed].src="images/lostHeart.png";
        missed++;
      }
    checkWin();
  });
