// import { MOUNTAINS } from '../../ext/mountains';
var MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, country: "Tanzania" },
    { name: "Everest", height: 8848, country: "Nepal" },
    { name: "Mount Fuji", height: 3776, country: "Japan" },
    { name: "Mont Blanc", height: 4808, country: "Italy/France" },
    { name: "Vaalserberg", height: 323, country: "Netherlands" },
    { name: "Denali", height: 6168, country: "United States" },
    { name: "Popocatepetl", height: 5465, country: "Mexico" }
];

export function addTable() {
    let array = MOUNTAINS;
    var myTableDiv = document.getElementById("mountains");
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (let key of Object.keys(array[0])) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(key));
        tr.appendChild(th);
    }
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    for (var i = 0; i < array.length; i++) {
        var tr = document.createElement('tr');
        tableBody.appendChild(tr);
        for (let key of Object.keys(array[i])) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(array[i][key]));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
};
