document.querySelector('header > h1').innerText = 'Guessing Game';
document.querySelector('header > h2').innerText = 'How good are you at guessing?';

  
let instructionsMessage = document.querySelector('#instructions');
instructionsMessage.innerText = 'In this game you try to guess a number between 1 and 15 in as few as tries as possible. You will be rewarded a ribbon for your skills. Good luck! Refresh the page to restart the game.';
