document.querySelector('header > h1').innerText = 'Guessing Game';
document.querySelector('header > h2').innerText = 'How good are you at guessing?';

let trueNum = Math.floor(Math.random() * 15) + 1;
console.log('The number is ' + trueNum);

let totalGuesses = 0;
let userGuess = 0;

function evalGuess() {
    userGuess = document.querySelector('#guess').value;
    const feedback = document.querySelector('#feedback');
    const tries = document.querySelector('#attempts');
    if(userGuess > 15 || userGuess < 1) {
        feedback.innerText = 'Choose a number between 1 and 15';
        return;
    }
    totalGuesses++;
    var award = document.createElement('img');
    tries.innerText = totalGuesses;
    if(userGuess == trueNum) {
        feedback.innerText = 'CORRECT!';
        if(totalGuesses < 4) {
            award.src = 'imgs/blue-ribbon.png';
        }
        else if(totalGuesses < 7) {
            award.src = 'imgs/red-ribbon.png';
        }
        else {
            award.src = 'imgs/yellow-ribbon.png';
        }
        document.querySelector('#ribbon').appendChild(award);
    }
    else if (userGuess < trueNum) {
        feedback.innerText = 'Your guess was too low.\nTry again.';
    }
    else {
        feedback.innerText = 'Your guess was too high.\nTry again.';
    }

    
}