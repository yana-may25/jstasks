var ancestry = JSON.parse(ANCESTRY_FILE)

var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});

const average = array => array.reduce((a, b) => a + b) / array.length;

const mothersAge1 = array => {
    let ageDiff = [];
    array.forEach(function (person) {
        if (byName[person.mother]) {
            ageDiff.push(person.born - byName[person.mother].born);
        }
    });
    return ageDiff;
}

console.log(average(mothersAge1(ancestry)));