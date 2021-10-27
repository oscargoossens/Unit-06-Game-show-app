const qwerty = document.getElementById('qwerty');
const keyboardButtons = document.querySelectorAll('#qwerty div button');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');

// Overlay
// Hide overlay

startGame.addEventListener('click', (e) => {
  overlay.style.display='none';
});

// PHRASES
// Split phrases into letter arrays and turn them into list items if they are letters

let phrases = [
  "when Ires went to the butcher",
  "every football game exists out of 22 players",
  "nature is where we can be ourselves",
  "i have got tickets to the ball",
  "the best day to start investing"
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
      li.className='none';
    }
  }
};

let letters = Array.from(document.querySelectorAll('.letter'));


// CHECKLETTER

function checkLetter(x){
  let letterFound =null;

  for(let i=0; i<letters.length; i++){
    if(letters[i].innerHTML == x.textContent){
      letters[i].className+=" show";
      letterFound = letters[i];
    }
  }
  return letterFound;
};

// CHECKWIN

function checkWin(){
  let lettersShown = Array.from(document.querySelectorAll('.show'));
  let h2 = document.querySelector('h2');
  if (lettersShown.length == letters.length){
    overlay.className = 'win';
    overlay.style.display='flex';
    h2.textContent= "Victorious!";
    startGame.textContent = "Start over";
  } else if (missed>=5){
    overlay.className = 'lose';
    overlay.style.display='flex';
    h2.textContent= "Yay, that's a bummer";
    startGame.textContent = "Try again";
  }
}

// Disable & Highlight chosen letters


function userButton(){
  qwerty.addEventListener('click', (e) => {
  return e.tagName;
  })
};

function userTarget(){
  qwerty.addEventListener('click', (e) => {
  return e.target;
  })
};

keyboardButtons.forEach(item => {
  item.addEventListener('click', (e) => {
    if (userButton='BUTTON'){
        item.className = " chosen";
        item.disabled;
    } else {
        item.className = ' space';
    }
    let hearts = Array.from(document.querySelectorAll('.tries img'));
    if (checkLetter(item) == null){
        hearts[missed].src="images/lostHeart.png";
        missed++;
      }
    checkWin();
    })
  });
