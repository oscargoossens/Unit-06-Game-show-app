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
  "When Ires went to the butcher she ordered two hundred grams of entrecote",
  "Every football game exists out of 22 players a referee and a ball",
  "Nature is where we can be ourselves and go to when we need to have a dose of awesome",
  "I have got tickets to the ball, front row seats just what she likes best",
  "The best day to start investing in ETFs or Crypto is yesterday says Warren."
];

function getRandomPhraseAsArray(arr){
  let random = arr[Math.floor(Math.random() * arr.length)];
  let y = random.split('');
  return y;
}

let characterArray = getRandomPhraseAsArray(phrases);

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

let display = addPhraseToDisplay(characterArray);



// CHECKLETTER

function checkLetter(x){
  let letters = document.querySelectorAll('.letter');

  for(let i=0; i<letters.length; i++){
    if(letters[i].textContent = x.textContent){
      letters[i].className+=" show";
      let letterFound = letters[i];
      return letterFound;
    }
  }
  return null;
};

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
      checkLetter(item);
  })
});
