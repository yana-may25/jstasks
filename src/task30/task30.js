function insideTheBox() {
    var cx = document.querySelector("canvas").getContext("2d");
    let startRecX = 5, startRecY = 5, endRecX = 305, endRecY = 305;
    let stepX = 5, stepY = 3;
    cx.strokeRect(startRecX, startRecY, endRecX, endRecY);
    let radius = 10, centerX = radius + startRecX, centerY = radius + startRecY,
        distX = 0, distY = 0;
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
        if (
            distX < endRecX - 2 * radius || (Math.floor(distX / (endRecX - 2 * radius) % 2)) == 0
        ) {
            if (distY < endRecY - 2 * radius || (Math.floor(distY / (endRecY - 2 * radius) % 2)) == 0) {
                centerY += stepY;
            }
            else {
                centerY -= stepY;
            }
            centerX += stepX;
        }
        else {
            if (distY < endRecY - 2 * radius || (Math.floor(distY / (endRecY - 2 * radius) % 2)) == 0) {
                centerY += stepY;
            }
            else {
                centerY -= stepY;
            }
            centerX -= stepX;
        }
        distY += stepY;
        distX += stepX;
        cx.fillStyle = "black";
        cx.fillRect(startRecX, startRecY, endRecX, endRecY);
        cx.beginPath();
        cx.arc(centerX, centerY, radius, 0, 7);
        cx.stroke();
        cx.fillStyle = "yellow";
        cx.fill()
    }
}
