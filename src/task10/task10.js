var ancestry = JSON.parse(ANCESTRY_FILE)

var byName = {};
ancestry.forEach(person => {
    byName[person.name] = person;
});

const average = array => array.reduce((a, b) => a + b) / array.length;

const MotherChildAgeDiff = (ancestry) => {
    return ancestry.filter(person => {
        return byName[person.mother] != null;
    }).map(person => {
        return person.born - byName[person.mother].born;
    });
}
console.log(Math.round(average(MotherChildAgeDiff(ancestry))));
// → 31

