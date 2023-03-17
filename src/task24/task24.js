function animate(time) {
    let cat = document.getElementById("cat");
    let hat = document.getElementById("hat");
    let angle = 0;
    let lastTime = null;
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) + 100) + "px";
    cat.style.left = (Math.cos(angle) * 100 + 230) + "px";
    hat.style.top = (Math.sin(angle + Math.PI) + 40) + "px";
    hat.style.left = (Math.cos(angle + Math.PI) * 100 + 230) + "px";
    requestAnimationFrame(animate);
}
