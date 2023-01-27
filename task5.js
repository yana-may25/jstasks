function range(start, end, step) {
    if (step === undefined) {
        step = 1;
    }
    let range = new Array(Math.round((Math.abs(start - end) + 1) / step)), sum = 0;
    if (start > end) {
        step = -step;
    }
    for (let i = 0; i < range.length; i++, start += step) {
        range[i] = start;
        sum += range[i];
    };
    return range;
}

function sum(range) {
    let sum = 0;
    for (let i = 0; i < range.length; i++) {
        sum += range[i];
    };
    return sum;
}