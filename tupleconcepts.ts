//Tuple: fixed size , order matters
//tuple vs array
//array: dynamic in nature : runtime more values can be added

let person: [string, number] = ["john", 20];
let user: [string, number, boolean] = ["john", 20, true];

console.log(person[0]);
console.log(person[1]);

let data: [string, number][] = [["john", 20], ["peter", 25]];
console.log(data[1][0]);
console.log(data[1][1]);

let customer: [string, number] = ["john", 20];
customer.push("peter", 20);
console.log(customer);