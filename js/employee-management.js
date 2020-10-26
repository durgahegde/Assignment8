/*eslint-env browser*/
var employee = [["Tom John", "Software Developer", 12345],["Rachel Green", "Manager", 12367], ["Sid William", "Team Lead", 12389],["Alberto Peri", "Software Engineer", 12312], ["Amy Rick","IT Manager", 12311]];
var employeeCount = 0;
var countRows = 5;
var isDelete = false;

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var deleteEmployee = function (e) {
    "use strict";
    if (isDelete) {
        window.console.log(e.target.parentElement.parentElement.rowIndex);
        $("employee-table").deleteRow(e.target.parentElement.parentElement.rowIndex);
        countRows -= 1;
        $("employee-heading").innerHTML = "Showing " + countRows + " Employees\n";
    }
};

function displyData(tableEntry){
    "use strict";
    var table, tableBody, row, cell, btn, buttonDelete; 
    table = document.getElementById("employee-table");
    tableBody = document.createElement('tbody');
    
    tableEntry.forEach(function (rowEntry) {
        row = document.createElement('tr');
        employeeCount += 1;
        rowEntry.forEach(function (cellEntry) {
            cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellEntry));
            row.appendChild(cell);
        });
        buttonDelete = document.createElement('td');
        btn = document.createElement('input');
        btn.type = "button";
        btn.value = "Delete";
        btn.id = employeeCount;
        buttonDelete.appendChild(btn);
        row.appendChild(buttonDelete);
        tableBody.appendChild(row);
        
    });
    table.appendChild(tableBody);
    $("employee-heading").innerHTML = "Showing " + countRows + " Employees\n";
    
    if (isDelete) {
        $(employeeCount).addEventListener("click", deleteEmployee);
    }

}

var addEmployee = function () {
    "use strict";
    var name, title, extension, requiredname, requiredtitle, requiredextension,nameError, titleError, extensionError,dataEntered ;
    var temp = new Array(3);
    var res = true;

    
    requiredname = "Please Enter Name !!! Can not be blank";
    requiredtitle = "Please Enter title !!! Can not be blank";
    requiredextension = "Please Enter Extension !!! Can not be blank";
    dataEntered = " ";
 
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    nameError = $("name").nextElementSibling;
    window.console.log(nameError);
    titleError = $("title").nextElementSibling;
    extensionError = $("extension").nextElementSibling;
    
    if (name === "") {
        nameError.innerHTML = requiredname;
    }  else {
        temp[0] = name;
        nameError.innerHTML = dataEntered;
    }

    if (title === "") {
        titleError.innerHTML = requiredtitle;
    } else {
        temp[1] = title;
        titleError.innerHTML = dataEntered;
    }

    if (extension === "") {
        extensionError.innerHTML = requiredextension;
    } else {
        extension = Number(extension);
        temp[2] = extension;
        extensionError.innerHTML = dataEntered;
    }
    
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] === undefined) {
            res = false;
            break;
        }
    }
    temp = [temp];
    if (res === true) {
        countRows += 1;
        displyData(temp);
    }
};

window.onload = function() {
"use strict";
displyData(employee);
$("add-button").addEventListener("click", addEmployee);
for (var i = 1; i <= 5; i++) {
    $(i).addEventListener("click", deleteEmployee);
    isDelete = true;
}
};