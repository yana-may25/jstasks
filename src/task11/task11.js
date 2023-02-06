var obj = JSON.parse(ANCESTRY_FILE);

function groupBy(items, func) {
    let centuries = [];
    for (let item of items) {
        let people = [];
        let century = func(item.died);
        let known = centuries.findIndex(c => c.century === century);
        if (known == -1) {
            people.push(item);
            centuries.push({ century: century, people: people });
        } else {
            centuries[known].people.push(item);
        }
    }
    return centuries;
}

console.log(groupBy(obj, a => Math.ceil(a / 100)));

function averageExpectancyByCentury(items) {
    let res = [];
    for (let item of items) {
        let ageSum = 0;
        for (let person of item.people) {
            ageSum += person.died - person.born;
        }
        res.push({ century: item.century, averageExpectancy: Math.round(ageSum / item.people.length) });
        console.log(item.people.length);
    }
    return res;
}

console.log(averageExpectancyByCentury(groupBy(obj, a => Math.ceil(a / 100))));