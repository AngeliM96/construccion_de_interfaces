var boton = document.querySelector("button")
var parrafo = document.querySelector("p")
var body = document.querySelector("body")

var seEjecutaEnEvento = function() {
    parrafo.insertAdjacentHTML("beforeend", "BEEP ");
    body.classList.toggle("color");
}

boton.addEventListener("click", seEjecutaEnEvento)