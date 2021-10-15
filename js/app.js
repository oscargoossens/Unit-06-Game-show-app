const qwerty = document.getElementById('qwerty');
const keyboardButtons = document.querySelectorAll('#qwerty div button');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('#phrase ul');
let missed = 0;
const overlay = document.getElementById('overlay');
const startGame = document.querySelector('.btn__reset')
let phrases = [
  "When Ires went to the butcher she ordered two hundred grams of entrecote",
  "Every football game exists out of 22 players a referee and a ball",
  "Nature is where we can be ourselves and go to when we need to have a dose of awesome",
  "I have got tickets to the ball, front row seats just what she likes best",
  "The best day to start investing in ETFs or Crypto is yesterday says Warren."
];


// Removing overlay after clicking 'Start Game' button

startGame.addEventListener('click', (e) => {
  overlay.style.display='none';
})


// Split phrases into letter arrays and turn them into list items
// if they are letters

function getRandomPhraseAsArray(phrases){
  let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  let characterArray = randomPhrase.split('');
  return characterArray;
};

let characterArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(characterArray){
  for(let i =0; i<characterArray.length; i++){
    const li = document.createElement('li');
    li.textContent = characterArray[i];
    ul.appendChild(li);
    if(characterArray[i].indexOf(' ') < 0){
      li.className='letter';
    }
  }
};

let userInput = qwerty.addEventListener('click', (e) => {
  return e.target;
});



// checkLetter function

keyboardButtons.forEach(item => {item.addEventListener('click', (e) => {
  let checkLetter = (userInput) =>{

    let letter = document.querySelectorAll('.letter');

    for ( let i=0; i<letter.length ; i++){

      if(userInput.textContent === letter[i].textContent){
        letter[i].className+='show';
        let letterFound = letter[i];
        return letterFound;
      } else{
        return "null";
      }
    }
  }
  if (userInput = e.tagName='button'){
      userInput.className = "chosen";
      userInput.disabled;
    }
  }
)
});