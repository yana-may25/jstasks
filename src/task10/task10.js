var obj = JSON.parse(ANCESTRY_FILE)

const average = array => array.reduce((a, b) => a + b) / array.length;

var byName = {};

ancestry.forEach(function (person) {
    byName[person.name] = person;
});
89
console.log(byName[" Philibert Haverbeke "]);
// → { name : " Philibert Haverbeke " , ...}


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
