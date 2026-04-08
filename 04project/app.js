const randomNumber = (Math.round(Math.random()*100+1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParse');

const p = document.createElement('p');

let prevGuess =[];
let numGuess =1;

let playGame =true;

if(playGame){
  submit.addEventListener('click',function(e){
     e.preventDefault();
     const guess=parseInt(userInput.value);
     console.log(guess);
     validateGuess(guess)
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a Valid method');
  }else if(guess<1){
    alert('Please Enter more than 1');
  }
  else if(guess>100){
    alert('Please enter less than 100');
  }else{
     prevGuess.push(guess)
    if(numGuess===11){
       displayGuess(guess);
       displayMessage(`game Over .Random Number was ${randomNumber}`);
      endGame()
    }else{
       displayGuess(guess)
       checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it right !!`);
    endGame()
  }else if(guess<randomNumber){
    displayMessage(`Number is Too low`)
  }else if(guess>randomNumber){
    displayMessage(`Number is Too high`)
  }
}

function displayGuess(guess){
   userInput.value=''
   guessSlot.innerHTML+=`${guess}, `
   numGuess++;
   remaining.innerHTML=`${11-numGuess} `;
}


function displayMessage(message){
   lowOrHi.innerHTML =`<h2>${message}</h2>`;
  
}


function endGame(){
  userInput.value ='';
  userInput.setAttribute('disabled',' ');
  p.classList.add('button')
  p.innerHTML =`<h2 id="newGame">${message}</h2>`;
}
function newGame(){

}

