obj = JSON.PARSE(ANCESTRY_FILE)

function task10(array) {
    let mothers = [];
    for (item in array) {
        let mother = item.mother;
        console.log(mother);
        if (array.find(item => item.name === mother)) {
            mothers.push(1);
        }
    }
    return mothers;
}

task10(obj)
