// JS essentials:
// difference between let, const and var


// Q1. sum of two integers

let a = 10;
let b = 20;

console.log(a + b);  // 30



// Q2. Relation between integers and strings

// string + string = concatenation
let s1 = "hello";
let s2 = " world";

console.log(s1 + s2);

// string + int = concatenation
let temp = 10;
console.log(s1 + temp);

// int + int = arithmetic
let temp1 = 10;
let temp2 = 20;

console.log(temp1 + temp2);



// Q3. sum and message

let a1 = 10;   // ✅ fixed (new variables)
let b1 = 20;

console.log("The sum of " + a1 + " and " + b1 + " is " + (a1 + b1));


// --- Type Coercion
console.log("1" + 1);  // "11"
console.log("1" - 1);  // 0
console.log("1" / 1);  // 1




// Q4. Accept and print the answer (prompt - Node.js)

const prompt = require("prompt-sync")();

let age = Number(prompt("Enter your age: "));
console.log(typeof age);

console.log(`Age ${age}`);





// Q5. swap two variables via 3 methods

// I. swap with extra variable

let a2 = 10;   
let b2 = 20;

console.log(a2);
console.log(b2);

let c = a2;   // 10
a2 = b2;      // 20
b2 = c;       // 10

console.log(a2);
console.log(b2);



// II. swap with arithmetic

let a3 = 10;   
let b3 = 20;

console.log(a3, b3);

a3 = a3 + b3;   // 30
b3 = a3 - b3;   // 10
a3 = a3 - b3;   // 20

console.log(a3, b3);



// III. swap with destructuring array

{
    let a = 10;
    let b = 20;

    console.log(a, b);

    [a, b] = [b, a];

    console.log(a, b);
}