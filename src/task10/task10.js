var ancestry = JSON.parse(ANCESTRY_FILE)

const average = array => array.reduce((a, b) => a + b) / array.length;

function mothersAge(array) {
    let ageDiff = [];
    array.forEach(function (person) {
        if (byName[person.mother]) {
            ageDiff.push(person.born - byName[person.mother].born);
        }
    });
    return ageDiff;
}

console.log(average(mothersAge(ancestry)));