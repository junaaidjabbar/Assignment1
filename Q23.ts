/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

*/

let car = "Honda";
let message = "Hello";
let num1 = 20;

console.log("Is car == 'Honda' ? I predict true");
console.log(car == "Honda");

console.log("is text == 'Hello'? I predict true ");
console.log(message == "Hello");

console.log("Is num1 ==20? I predict ture");
console.log(num1 == 20);

console.log("Is car !=='Toyota'? I predict ture");
console.log(car !== "Toyota");

console.log("Is text<50? I predict ture");
console.log(num1 < 50);

console.log("Is car !== 'Honda' ? I predict false");
console.log(car !== "Honda");

console.log("is text !== 'Hello'? I predict false ");
console.log(message !== "Hello");

console.log("Is num1 <20? I predict false");
console.log(num1 < 20);

console.log("Is car =='Toyota'? I predict false");
console.log(car == "Toyota");

console.log("Is text>50? I predict false");
console.log(num1 > 50);

export {};
