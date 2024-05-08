var names = ["tom", "john", "peter"];
console.log(names[1]);
//using generics:
var empNames = ["tom", "john", "peter"];
var empIds = [20, 15, 16];
var empInfo = [20, "tom", null, true];
//multi type arrays
var values = ["tom", 20, "john", 15];
var val = ["tom", true];
//first array declaration and init:
var users;
users = ["tom", "john", "peter"];
var employees = ["tom", "john", "peter"];
//iterative  the arrays: use for loop
//1. index based loop:
for (var i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}
//2. for in loop:
for (var e in employees) {
    console.log(e + ":" + employees[e]);
}
