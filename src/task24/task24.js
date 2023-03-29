var cat = document.getElementById("cat");
var hat = document.getElementById("hat");
var angle = 0;
var lastTime = null;

function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) + 100) + "px";
    cat.style.left = (Math.cos(angle) * 100 + 230) + "px";
    hat.style.top = (Math.sin(angle + Math.PI) + 40) + "px";
    hat.style.left = (Math.cos(angle + Math.PI) * 100 + 230) + "px";
    requestAnimationFrame(animate);
}
