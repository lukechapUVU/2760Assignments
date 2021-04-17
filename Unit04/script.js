document.querySelector('header > h1').innerText = 'Fortune Teller';
document.querySelector('header > h2').innerText = 'Switch Statements';

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomMonth() {
    let monthNum = getRandomNumber(1,12);
    switch(monthNum) {
        case 1:
            return 'January';
            break;
        case 2:
            return 'February';
            break;
        case 3:
            return 'March';
            break;
        case 4:
            return 'April';
            break;
        case 5:
            return 'May';
            break;
        case 6:
            return 'June';
            break;
        case 7:
            return 'July';
            break;
        case 8:
            return 'August';
            break;
        case 9:
            return 'September';
            break;
        case 10:
            return 'October';
            break;
        case 11:
            return 'November';
            break;
        case 12:
            return 'December';
            break;                                                  
        default:
            return 'No month';
    }
}

function getRandomDay() {
    return getRandomNumber(1,28);
}

function getRandomFortune() {
    let fortuneNum = getRandomNumber(1,24);
    switch(fortuneNum) {
        case 1:
            return 'your best friend will call you';
            break;
        case 2:
            return 'your car will get a flat tire';
            break;
        case 3:
            return 'you will slip in the shower';
            break;
        case 4:
            return 'it will rain';
            break;
        case 5:
            return 'you will get a feeling of nostalgia';
            break;
        case 6:
            return 'someone you love will get hurt';
            break;
        case 7:
            return 'you will run into an old friend';
            break;
        case 8:
            return 'you will sleep through your alarm';
            break;
        case 9:
            return 'lightning will strike a tree near you';
            break;
        case 10:
            return 'you will wear your shirt inside out';
            break;
        case 11:
            return 'you will see a shooting star';
            break;
        case 12:
            return 'you will find $20 on the side of the road';
            break;
        case 13:
            return 'you will twist your ankle';
            break;
        case 14:
            return 'you will win the lottery';
            break;
        case 15:
            return 'you will befriend a stray cat';
            break;
        case 16:
            return 'your phone charger will break';
            break;
        case 17:
            return 'you will be fired from your job';
            break;
        case 18:
            return 'a bird will poop on your head';
            break;
        case 19:
            return 'you will lock yourself out of your car';
            break;
        case 20:
            return 'you will cry over spilled milk';
            break;
        case 21:
            return 'you will lose your wallet';
            break;
        case 22:
            return 'someone will buy your dinner';
            break;
        case 23:
            return 'you will witness a car crash';
            break;
        case 24:
            return 'you will get a cold sore';
            break;                                                  
        default:
            return 'error';
    }
}

let fortuneMessage = '';
fortuneMessage += 'On ' + getRandomMonth() + ' ' + getRandomDay() + ', ' + getRandomFortune();
document.querySelector('#fortune').innerText = fortuneMessage;