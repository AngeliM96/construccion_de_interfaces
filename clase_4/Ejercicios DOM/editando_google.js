// Google
var logo = document.querySelector(".lnXdpd");
logo.setAttribute("src", "http://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg");
logo.style.border="3px solid red";

var links = document.querySelectorAll("a");
for (var i=0; i<links.length; i++) {
    links[i].setAttribute("href", "https://yahoo.com");
    links[i].style.backgroundColor= "red";
    links[i].style.color= "blue";
}
// Facebook
var fotos = document.querySelectorAll("img");
for (var i=0; i<fotos.length; i++) {
    fotos[i].setAttribute("src", "http://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg");
}