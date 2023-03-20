function drawPieChart() {
    let cx = document.querySelector("canvas").getContext("2d");
    let total = results
        .reduce((sum, { count }) => sum + count, 0);
    let currentAngle = -0.5 * Math.PI;
    let centerX = 300, centerY = 150;
    for (let result of results) {
        let sliceAngle = (result.count / total) * 2 * Math.PI;
        cx.beginPath();
        cx.arc(centerX, centerY, 100,
            currentAngle, currentAngle + sliceAngle);
        currentAngle += sliceAngle;
        cx.lineTo(centerX, centerY);
        let middleAngle = currentAngle - 0.3 * sliceAngle;
        let textX = Math.cos(middleAngle) * 110 + centerX;
        let textY = Math.sin(middleAngle) * 110 + centerY;
        cx.fillStyle = result.color;
        cx.fill();
        cx.fillStyle = "black";
        if (Math.cos(middleAngle) > 0) {
            cx.textAlign = "left"
        }
        else cx.textAlign = "right"
        cx.fillText(result.name, textX, textY);
        cx.fillText(Math.round(result.count / total * 100) + '%', textX, textY + 10);

    }
}
