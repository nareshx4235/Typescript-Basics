//Typescript is a statically typed language
//Type Inference
//Type Annotations ---> num:number:  name:string
console.log("Starting learning");
var age = 50; //type annotation ( data type is declared already -age=number-) 
var fname = "peter"; //type Inference (its data type will be decided in the compile time -fname= string-)
console.log(age);
console.log(fname);
//null and undefined:
var city = null;
var county = undefined;
//any:(used for dynamic data)
var value = 80;
value = "dev";
value = true;
//void: function does not return any value:
function printHello() {
    console.log("typescript ...");
}
function getNumber() {
    return 20;
}
function getAnyValue() {
    return "testings";
}
