function duplicateMenu() {

    let topList = document.querySelectorAll('ul#primaryNavigation li a');

    let newList = document.createElement('ul');

    topList.forEach(menuItem => {
        let newLI = document.createElement('li');
        let newLink = document.createElement('a');
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLink.textContent = menuItem.textContent;
        newLI.appendChild(newLink);
        
        newList.appendChild(newLI);
    })
    smallNavArea.appendChild(newList);
}

duplicateMenu()