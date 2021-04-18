document.querySelector('header > h1').innerText = 'The Arborist';
document.querySelector('header > h2').innerText = 'Events and Arrays';

var treesList = ['red pine', 'sycamore', 'sugar maple', 'paper birch', 'apple tree', 'hickory', 'willow'];

function formatList() {
    var message = '';
    for(var i = 0; i < treesList.length; i++) {
        message += treesList[i] + '\n';
    }
    return message;
}

document.querySelector('#add_blackoak').onclick = () => {
    treesList.unshift('blackoak');
    populateList();
}

document.querySelector('#add_redwood').onclick = () => {
    treesList.push('redwood');
    populateList();
}

document.querySelector('#remove_start').onclick = () => {
    if(treesList.length < 1) {
        document.querySelector('#errors').innerText += 'There is nothing to remove' + '\n';
        return;
    }
    treesList.shift();
    populateList();
}

document.querySelector('#remove_end').onclick = () => {
    if(treesList.length < 1) {
        document.querySelector('#errors').innerText += 'There is nothing to remove' + '\n';
        return;
    }
    treesList.pop();
    populateList();
}

document.querySelector('#remove_2nd').onclick = () => {
    if(treesList.length < 2) {
        document.querySelector('#errors').innerText += 'There is no second element to remove' + '\n';
        return;
    }
    treesList.splice(1,1);
    populateList();
}

document.querySelector('#sort_list').onclick = () => {
    if(treesList.length < 1) {
        document.querySelector('#errors').innerText += 'There is nothing to sort' + '\n';
        return;
    }
    treesList.sort();
    populateList();
}

document.querySelector('#set_upper').onclick = () => {
    if(treesList.length < 1) {
        document.querySelector('#errors').innerText += 'There is nothing to set to upper' + '\n';
        return;
    }
    for(var i = 0; i < treesList.length; i++) {
        treesList[i] = treesList[i].toUpperCase();
    }
    populateList();
}

document.querySelector('#set_lower').onclick = () => {
    if(treesList.length < 1) {
        document.querySelector('#errors').innerText += 'There is nothing to set to lower' + '\n';
        return;
    }   
    for(var i = 0; i < treesList.length; i++) {
        treesList[i] = treesList[i].toLowerCase();
    }
    populateList();
}

document.querySelector('#list_3rd').onclick = () => {
    if(treesList.length < 3) {
        document.querySelector('#errors').innerText += 'There is no third tree in the list' + '\n';
        return;
    }
    document.querySelector('#errors').innerText += treesList[2] + '\n';
}

document.querySelector('#list_4th').onclick = () => {
    if(treesList.length < 4) {
        document.querySelector('#errors').innerText += 'There is no fourth tree in the list' + '\n';
        return;
    }
    document.querySelector('#errors').innerText += treesList[3] + '\n';
}

function populateList() {
    document.querySelector('#list').innerText = formatList();
}
