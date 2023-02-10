function ArraySeq(array) {
    this.array = array;
    this.pos = 0;
}

ArraySeq.prototype.current = function () {
    return this.array[this.pos];
};

ArraySeq.prototype.next = function () {
    if (this.pos >= this.array.length - 1)
        return false;
    this.pos++;
    return true;
};

ArraySeq.prototype.prev = function () {
    if (this.pos >= 0)
        return this.array[pos];
    this.pos--;
    return true;
};


function logFive(arraySeq) {
    for (let i = 0; i < 5; i++) {
        console.log(arraySeq.current());
        if (!arraySeq.next()) {
            break;
        }
    }
}

// logFive(new ArraySeq([1, 2, 3, 4, 5, 6]))


function RangeSeq(from, to) {
    this.array = [];
    ArraySeq.call(this, this.array);
    this.array[this.pos] = from;
    for (let i = 1; i < Math.abs(to - from); i++) {
        this[i] = this.prev()++;
    }
}





logFive(new RangeSeq(1, 6));