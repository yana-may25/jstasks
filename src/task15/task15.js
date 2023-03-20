function ArraySeq(array) {
    this.x = -1;
    this.content = array;
}
ArraySeq.prototype.next = function () {
    if (this.x == this.content.length - 1) {
        return true;
    } else {
        this.x++;
    }
    return false;
}
ArraySeq.prototype.current = function () {
    return this.content[this.x];
}

function logFive(sequence) {
    for (var i = 0; i < 5; i++) {
        if (!sequence.next()) {
            console.log(sequence.current());
        }
    }
}

logFive(new ArraySeq([1, 2, 6, 8]));

function RangeSeq(from, to) {
    this.x = from - 1;
    this.to = to;
}
RangeSeq.prototype.next = function () {
    if (this.x >= this.to) {
        return true;
    } else {
        this.x++;
    }
    return false;
}
RangeSeq.prototype.current = function () {
    return this.x;
}

logFive(new RangeSeq(100, 1000));