document.querySelector('header > h1').innerText = 'Nonsense Story';
document.querySelector('header > h2').innerText = 'String Manipulation';

function generateStory() {
    let arrays = createArrays();
    if(arrays == 'Error') {
        console.log('An error occurred');
        return;
    }
    document.querySelector('#story').textContent += 'There once was a ' + arrays.noun[0] + ' who loved to ' + arrays.verb[0] + ' and was very ' + arrays.adj[0] + '. ';
    document.querySelector('#story').textContent += 'This ' + arrays.noun[0] + ' had a ' + arrays.adj[1] + ' friend who was a ' + arrays.noun[1] + '. ';
    document.querySelector('#story').textContent += 'They loved to ' + arrays.verb[1] + ' and ' + arrays.verb[2] + ' together. ';
    document.querySelector('#story').textContent += 'Everyone called them the ' + arrays.adj[2] + ' ' + arrays.noun[2] + 's.';
}

function createArrays() {
    
    let nounVal = document.querySelector('#nouns').value;
    let adjVal = document.querySelector('#adjectives').value;
    let verbVal = document.querySelector('#verbs').value;
    nounVal = nounVal.toLowerCase().replaceAll(',', '');
    adjVal = adjVal.toLowerCase().replaceAll(',', '');
    verbVal = verbVal.toLowerCase().replaceAll(',', '');
    let nounList = nounVal.split(' ').join('\n').split('\n');
    let adjList = adjVal.split(' ').join('\n').split('\n');
    let verbList = verbVal.split(' ').join('\n').split('\n');

    if(nounList.length != 3 || adjList.length != 3 || verbList.length != 3) {
        alert('You are supposed to provide only 3 words in each list');
        return 'Error';
    }

    let arrays = {noun: nounList, adj: adjList, verb: verbList}
    return arrays;
}



