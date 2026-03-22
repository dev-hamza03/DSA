// JS esstilals: 
// differnce between let, cont and var


//  Q1. sum of two integers

let a = 10;
let b = 20;

console.log(a = b)  // 30



// q2. Relation netween two integr and strings and in this also understand how JS's enginie wroks

// string = string = (concatenation)

let s1 = "hello";
let s2 = " world";

console.log(s1 + s2);

// string = int = (concatenation)

let temp = 10;

console.log(s1 + temp)

// string = int = (arthmatic)

let temp1 = 10;
let temp2 = 20;

console.log(temp1 + temp2);




// q3. sum and message

a = 10;
b = 20;

// console.log("The sum of " + a + " and " + b + " is " + a + b )
console.log("The sum of " + a + " and " + b + " is " + (a + b))



// ---Type Coercion
console.log("1" + 1);
console.log("1" - 1);
console.log("1" / 1);





// q4.Accept and print the answer - in this see how prompts work used for taking input


const prompt = require("prompt-sync")();

let age = Number(prompt("Enter your age: "));
console.log(typeof age);

console.log(`Age ${age}`);




