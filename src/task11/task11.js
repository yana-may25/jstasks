obj = JSON.parse(ANCESTRY_FILE);

function lifeExpectancyByCentury(items) {
    let centuries = [];
    for (let item of items) {
        let century = Math.ceil(item.died / 100), ageSum = item.died - item.born;
        let known = centuries.findIndex(c => c.century == century);
        if (known == -1) {
            centuries.push({ century, ageSum, count: 1 });
        } else {
            centuries[known].ageSum += ageSum;
            centuries[known].count++;
        }
    }
    let res = [];
    for (let century of centuries) {
        res.push({ century: century.century, averageExpectancy: Math.round(century.ageSum / century.count) });
    }
    return res;
}

lifeExpectancyByCentury(obj);