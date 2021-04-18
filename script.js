var loc = window.location.href;

console.log(loc + '/Unit01');

var request;
if(window.XMLHttpRequest)
    request = new XMLHttpRequest();
else
    request = new ActiveXObject("Microsoft.XMLHTTP");
request.open('GET', loc + '/Unit01', false);
request.send(); 
if (request.status === 404) {
    alert("The page you are trying to reach is not available.");
}