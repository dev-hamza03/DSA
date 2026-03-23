
// =====================
// Arithmetic Operators
// =====================
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000





// =====================
// Relational Operators
// =====================
let x = 10;
let y = 20;

console.log("\nRelational:");
console.log(x > y);   // false
console.log(x < y);   // true
console.log(x >= 10); // true
console.log(x <= 5);  // false

console.log(x == "10");  // true
console.log(x === "10"); // false
console.log(x != y);     // true
console.log(x !== "10"); // true





// =====================
// Logical Operators
// =====================
let age = 18;
let hasID = true;

console.log("\nLogical:");
console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID);  // true
console.log(!hasID);             // false





// =====================
// Unary Operators
// =====================
let num = 5;

console.log("\nUnary:");
num++;
console.log(num); // 6

num--;
console.log(num); // 5

let str = "10";
console.log(+str); // 10

console.log(-num); // -5

let isLoggedIn = true;
console.log(!isLoggedIn); // false