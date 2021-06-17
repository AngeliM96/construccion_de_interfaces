var money = document.querySelectorAll("#money");
for (var i=0; i<botones.length; i++) {
    botones[i].addEventListener("click", function() {
            this.classList.toggle("oculto")
        }
    );
}