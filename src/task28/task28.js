const shapes = () => {
    var ctx = document.querySelector("canvas").getContext('2d');
    function Zigzag(x, y, sizeOfSide, spacing, times) {
        this.draw = function () {
            ctx.beginPath();
            ctx.moveTo(x, y);
            for (let i = 0; i < times; i++) {
                ctx.lineTo(x + sizeOfSide, y += spacing / 2);
                ctx.lineTo(x, y += spacing / 2);
                ctx.stroke();
            }
        }
    }
    var zigzag = new Zigzag(500, 100, 100, 15, 6);
    zigzag.draw();

    function Trapezoid(x, y, sizeOfSide, height) {

        this.draw = function () {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + sizeOfSide, y);
            ctx.lineTo(x + 1.5 * sizeOfSide, y + height);
            ctx.lineTo(x - 0.5 * sizeOfSide, y + height);
            ctx.closePath();
            ctx.stroke();
        }
    }
    var trapezoid = new Trapezoid(100, 100, 100, 80);
    trapezoid.draw();

    function Square(x, y, sizeOfSide) {

        this.draw = function () {
            ctx.translate(300, 0);
            ctx.rotate((45 * Math.PI) / 180);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + sizeOfSide, y);
            ctx.lineTo(x + sizeOfSide, y + sizeOfSide);
            ctx.lineTo(x, y + sizeOfSide);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
            ctx.rotate((315 * Math.PI) / 180);
            ctx.translate(-300, 0);
            ctx.fillStyle = 'red';
            ctx.fill();
        }
    }
    var square = new Square(100, 0, 100);
    square.draw();

    function Spiral(x, y, radius, times) {
        this.draw = function () {
            ctx.beginPath();
            let angle = 0, step = Math.PI / 180;
            ctx.moveTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle))
            for (let i = 0; i <= 360 * times; i++) {
                ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle))
                angle += step;
                radius += 1 / 20;
            }
            ctx.stroke();
        }
    }
    var spiral = new Spiral(700, 150, 1, 3);
    spiral.draw();

    function Sun(x, y, width, points) {
        this.draw = function () {
            let halfWidth = width / 2;
            let xCentre = x + halfWidth;
            let yCentre = y + halfWidth;
            let step = 2 * Math.PI / points;
            let angle = 0;
            ctx.beginPath();
            ctx.moveTo(x + width, y + width / 2);
            for (let i = 0; i < points; i++) {
                angle += step;
                ctx.quadraticCurveTo(xCentre, yCentre, xCentre + Math.cos(angle) * halfWidth, yCentre + Math.sin(angle) * halfWidth);
            }
            ctx.fillStyle = 'orange';
            ctx.fill();
        }
    }
    var sun = new Sun(800, 50, 150, 8);
    sun.draw();

}