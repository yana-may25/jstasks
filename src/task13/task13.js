class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    length() {
        return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    };
}

Vector.prototype.plus = function (vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
}
Vector.prototype.minus = function (vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(12, 5));
// 13



