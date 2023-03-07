function vector(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperty(this, 'length', {
        get: () => Math.sqrt(this.x * this.x + this.y * this.y)
    });
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
console.log(new Vector(12, 5).length);
// 13


