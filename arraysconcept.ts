let names: string[] = ["tom", "john", "peter"];
console.log(names[1]);
names.push("Testing..."); // adding the data in array

//using generics:
let empNames: Array<string> = ["tom", "john", "peter"];
let empIds: Array<number> = [20, 15, 16];
let empInfo: Array<any> = [20, "tom", null, true];

//multi type arrays
let values: (string | number)[] = ["tom", 20, "john", 15];
let val: Array<string | boolean> = ["tom", true];

//first array declaration and init:
let users: Array<string>;
users = ["tom", "john", "peter"];


let employees: Array<string> = ["tom", "john", "peter"];
//iterative  the arrays: use for loop
//1. index based loop:
for (let i=0; i < employees.length; i++) {
    console.log(employees[i]);
}

//2. for in loop:
for (let e in employees) {
    console.log(e+ ":" + employees[e]);
}    