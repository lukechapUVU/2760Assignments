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

let haloButtons = document.querySelectorAll('button');
haloButtons.forEach(button => {
    button.addEventListener('click', haloInfo);
})

var description = '';

function haloInfo(event) {
    let haloChoice = haloData.game.find(game => {
        return event.target.id === game.id;
    })

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