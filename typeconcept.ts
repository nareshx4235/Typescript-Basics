//Typescript is a statically typed language
//Type Inference
//Type Annotations ---> num:number:  name:string

// compile and run typescript:
// 1. tsc filename.ts (convert ts into js)
// 2. node filename.js

console.log("Starting learning Typescript...");

let age: number = 50; //type annotation ( data type is declared already -age=number-) 


let fname = "peter"; //type Inference (its data type will be decided in the compile time -fname= string-)

console.log(age);
console.log(fname);

//null and undefined:
let city: null = null;
let county: undefined = undefined;

//any:(used for dynamic data)
let value: any = 80;
value = "dev";
value = true;

//void: function does not return any value:
function printHello() { // return type: void -- Compile Time --
    console.log("typescript ...");
}
function getNumber(): number{ //return type: number -- Compile Time --
    return 20;
}


function getAnyValue(): any{ //return type: any -- Compile Time --
    return "testings";
}

// example:
function addition(a,b) {
    return a + b; //27 --number  //compile time-- type inference will be applied as number
}
addition(20, 7);

//name:add
//parameters: a(number), b(number)
//return type: number 

//OR:
function add(a: number, b: number):number {
    return a + b; //compile time -- return type: number --
}    
