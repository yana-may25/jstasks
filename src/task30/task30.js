function insideTheBox() {
    let cx = document.querySelector("canvas").getContext("2d");
    let startRecX = 5, startRecY = 5, endRecX = 305, endRecY = 100;
    cx.strokeRect(startRecX, startRecY, endRecX, endRecY);
    let radius = 20, centerX = radius + startRecX, centerY = 55;
    dist = 0;
    cx.arc(centerX, centerY, radius, 0, 7);
    cx.stroke();
    let lastTime = null;
    function frame(time) {
        if (lastTime != null) {
            updateAnimation(Math.min(100, time - lastTime) / 1000);
        }
        lastTime = time;
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
    function updateAnimation(step) {
        if (dist < endRecX - 2 * radius || (Math.floor(dist / (endRecX - 2 * radius))) % 2 == 0) {
            centerX += 5;
        }
        else {
            centerX -= 5;
        }
        dist += 5;
        cx.fillStyle = "black";
        cx.fillRect(startRecX, startRecY, endRecX, endRecY);
        cx.beginPath();
        cx.arc(centerX, centerY, radius, 0, 7);
        cx.stroke();
        cx.fillStyle = "yellow";
        cx.fill()
    }
}
