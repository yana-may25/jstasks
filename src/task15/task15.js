class ArraySeq {
    constructor(array) {
        this.x = -1;
        this.content = array;
    }
    next() {
        if (this.x == this.content.length - 1) return true;
        this.x++;
        return false;
    }
    current() {
        return this.content[this.x];
    }
}

function logFive(sequence) {
    for (var i = 0; i < 5; i++) {
        if (!sequence.next()) {
            console.log(sequence.current());
        }
    }
}

logFive(new ArraySeq([1, 2, 6, 8]));

class RangeSeq {
    constructor(from, to) {
        this.x = from - 1;
        this.to = to;
    }
    next() {
        if (this.x >= this.to) {
            return true;
        } else {
            this.x++;
        }
        return false;
    }
    current() {
        return this.x;
    }
}

logFive(new RangeSeq(100, 1000));