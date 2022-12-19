//Checking if the page is loaded in an iframe
if(window.self != window.top) {
//Analyzing URL to check embed link
try {
if(window.parent.location.hostname.indexOf("https://andrewthecoolalias.github.io") == -1) {
window.location.href = "https://andrewthecoolalias.github.io";
} else {
//iFrame from host site
}
} catch (ex) {
//Blocking Embed...
window.location.href = "https://andrewthecoolalias.github.io/blocked/blocked/index.html";
}
} 
