function toggleMoney() {
    document.querySelector('#imagenMoney').classList.toggle('oculto');
}

function toggleMiami() {
    document.querySelector('#imagenMiami').classList.toggle('oculto');
}

function toggleRicky() {
    document.querySelector('#imagenRicky').classList.toggle('oculto');
}

var images = document.querySelectorAll("img");
for (var i=0; i<images.length; i++) {
    images[i].addEventListener("click", function() {
            this.classList.toggle("oculto")
        }
    );
}