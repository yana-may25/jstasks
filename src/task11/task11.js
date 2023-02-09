var ancestry = JSON.parse(ANCESTRY_FILE);

const average = array => array.reduce((a, b) => a + b) / array.length;

function groupBy(items, func) {
    let centuries = [];
    items.map(function (item) {
        let people = [];
        let century = func(item.died);
        let known = centuries.findIndex(c => c.century === century);
        if (known == -1) {
            people.push(item);
            centuries.push({ century: century, people: people });
        } else {
            centuries[known].people.push(item);
        }
    })
    return centuries;
}

console.log(groupBy(ancestry, a => Math.ceil(a / 100)));

function averageExpectancyByCentury(items) {
    let res = [];
    items.forEach(function (item) {
        let age = [];
        item.people.forEach(function (person) {
            age.push(person.died - person.born);
        })
        res.push({ century: item.century, averageAge: Math.round(average(age)) });
    })
    return res;
}

console.log(averageExpectancyByCentury(groupBy(ancestry, a => Math.ceil(a / 100))));