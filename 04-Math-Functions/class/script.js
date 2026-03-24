
// Math.abs. -> convert negative value in to positive
console.log(Math.abs(-10));     // 10


// Math.ceil -> convert the floating number to up 
console.log(Math.ceil(10.8));   // 11


// Math.floor -> conver the floating number to down
console.log(Math.floor(10.2));  // 10


// Math.round  -> convert the floating numbefr ceil if grater than .5 and if less than .5 convert into floor
console.log(Math.round(15.4))    // 15
console.log(Math.round(15.6))    // 16


// Math.round -> removes the decimal part 
console.log(Math.trunc(1.7383993));


// Math.pow -> used the posering the number
console.log(Math.pow(2, 5));


// Math.max -> used for finding the max value
console.log(Math.max(10, 20, 30, 40, 50));


// Math.randome -> used for genrate random values
console.log(Math.random())



// Questions

// Q!. calculate compound interst
//  CP = P(1 + r/100)^(t) - p
// example : input -> p = 10000, r = 5, t = 3
// output = 1576.25


// let prompt = require("prompt-sync")();
// let P = Number(prompt("Enter the principal amount: "));
// let r = Number(prompt("Enter the rate of interest: "));
// let t = Number(prompt("Enter the time: "));

// let CP = (P * Math.pow(1 + (r / 100), t) - P).toFixed(2)
// console.log(CP)



// Q2. Generate OTP

console.log(Math.floor(Math.random() * 9000) + 1000);




