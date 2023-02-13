function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function () {
    return this.text.length;
};

StretchCell.prototype = Object.create(TextCell.prototype);

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype.minWidth = function () { return this.width > this.inner.minWidth() ? this.width : this.inner.minWidth() }

StretchCell.prototype.minHeight = function () { return this.height > this.inner.minHeight() ? this.height : this.inner.minHeight() }

textCell = new TextCell("sadf\nkldasdf")
console.log(textCell.minHeight(), textCell.minWidth())
// 2 7
stretchCell = new StretchCell(textCell, 3, 4)
console.log(stretchCell.minHeight(), stretchCell.minWidth())
//4 7