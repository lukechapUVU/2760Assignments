document.querySelector('header > h1').innerText = 'Inspector Clouseau';
document.querySelector('header > h2').innerText = 'The most thorough inspector for finding window and document properties';

function refreshPage() {
    let windowSizes = `The window is ${window.innerWidth} px wide and ${window.innerHeight} px tall`;
    let windowOffsets = `The window is offset by ${window.screenX} px from the left and ${window.screenY} px from the top`;
    let url = `The URL for this page is ${window.location.href}`
    
    let windowMessage = document.querySelector('#windowProperties');
    windowMessage.innerText = windowSizes + '\n'+ windowOffsets + '\n' + url;
}
refreshPage();

let documentTitle = `The title of the document is ${document.title}`;
let documentUpdated = `The document was last updated on ${document.lastModified}`;

let documentMessage = document.querySelector('#documentProperties');
documentMessage.innerText = documentTitle + '\n' + documentUpdated;
