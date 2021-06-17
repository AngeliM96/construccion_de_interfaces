var body = document.querySelector("body");

function toggleXY(event) {
    var image = document.querySelector("img");
    image.style.top = event.clientY + "px";
    image.style.left = event.clientX + "px";
}

body.addEventListener("mousedown", function(e){
    body.onmousemove = function(e) {
        toggleXY(e);
     }
});

body.addEventListener("mouseup", function(e){
    body.onmousemove = null
});