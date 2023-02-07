function every(array, test) {
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            return false;
        }
    }
    return true;
}

function some(array, test) {
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            return true;
        }
    }
    return false;
}

let array = [1, 2, 3, 4, 5];
console.log(every(array, x > 2));
console.log(some(array, x > 2));
