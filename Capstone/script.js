async function getHaloData() {
    try {
        const response = await fetch('../Capstone/halo.json');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

let haloData = {};
getHaloData().then(data => haloData = data);

const myOpinion = {
    haloCE: 'Halo CE: This is the best game in my opinion, but that might be based on nostalgia',
    halo2: 'Halo 2: This game has the hardest campaign by far',
    halo3: 'Halo 3: The brutes in this game are way to easy to kill',
    halo3ODST: 'Halo 3 ODST: The soundtrack for this game is the most chill',
    halo4: 'Halo 4: The enemies in this game have very good strategic synergy which makes them quite hard',
    haloReach: 'Halo Reach: The multiplayer on this game will forever have the most fun custom games',
    alerted: 0,
    alertMessage: (alerted) => {
        if(alerted == 0) 
            alert('Check out the console messages to see my opinion on each game');
        myOpinion.alerted = 1;
    },
    consoleMessage: (game) => {
        switch(game) {
            case 'HaloCE':
                console.log(myOpinion.haloCE);
                break;
            case 'Halo2':
                console.log(myOpinion.halo2);
                break;
            case 'Halo3':
                console.log(myOpinion.halo3);
                break;
            case 'Halo3ODST':
                console.log(myOpinion.halo3ODST);
                break;
            case 'Halo4':
                console.log(myOpinion.halo4);
                break;
            case 'HaloReach':
                console.log(myOpinion.haloReach);
                break;
            default:
                console.log('No game selected');
                break;
        }
    }
}

let haloButtons = document.querySelectorAll('button');
haloButtons.forEach(button => {
    button.addEventListener('click', haloInfo);
})

var description = '';

function haloInfo(event) {
    let haloChoice = haloData.game.find(game => {
        return event.target.id === game.id;
    })

    myOpinion.alertMessage(myOpinion.alerted);
    myOpinion.consoleMessage(haloChoice.id);

    description = `${haloChoice.name} was released on ${haloChoice.releaseDate} and developed by ${haloChoice.developer}. `
    description += `In ${haloChoice.name} you can play as `
    if(haloChoice.playableCharacters.length > 1) {
        let playerList = [];
        for(var i = 0; i < haloChoice.playableCharacters.length; i++) {
            playerList.push(haloChoice.playableCharacters[i]);
        }
        properGrammarList(playerList);
    }    
    else {
        description += `${haloChoice.playableCharacters}. `
    }

    description += '<br><br>'
    description += `The missions on ${haloChoice.name} are `
    properGrammarList(haloChoice.missions);

    description += '<br><br>'
    description += `Here is the original cover for ${haloChoice.name}:`

    document.querySelector('#description').innerHTML = description;
    document.querySelector('#picture').src = `imgs/${haloChoice.coverPicture}`;
}

function properGrammarList(array) {
    for(var i = 0; i < array.length-1; i++) {
        description += `${array[i]}, `
    }
    description += `and ${array[array.length-1]}. `
}