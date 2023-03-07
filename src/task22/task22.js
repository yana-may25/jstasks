import { MOUNTAINS } from 'ext\mountains.js'

function addTable(array) {
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
}

document.getElementById("mountains").innerHTML = addTable(MOUNTAINS);
