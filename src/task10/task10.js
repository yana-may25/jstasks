var obj = JSON.parse(ANCESTRY_FILE)

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

function mothersAvergeAge(array) {
    let mothers = [];
    for (let child of array) {
        let motherName = child.mother;
        for (let mother of array) {
            if (mother.name === motherName) {
                mothers.push(child.born - mother.born);
                break;
            }
        }
    }
    return Math.round(average(mothers));
}

console.log(mothersAvergeAge(obj));
