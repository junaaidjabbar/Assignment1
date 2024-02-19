"use strict";
/*
// Calculate the area of rectangle.

let widht: number = 8;
let height: number = 8;

let areaOfRectangle: number = height * widht;
console.log(areaOfRectangle);

// Calculate the volume of a cube.

let height1: number = 8;
let widht1: number = 8;
let lenght1: number = 8;

let volumeOfCube: number = height1 * widht1 * lenght1;
console.log(volumeOfCube);

// Check if given number is positive, Negative or Zeor.

let number1: number = 2;

if (number1 == 0) {
  console.log("Given number is Zeror");
} else if (number1 > 0) {
  console.log("Given number is Positive");
} else {
  console.log("Given number is Negative");
}

// Check given number is even or odd.

let x: number = 1;

if (x % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

// Person eligigble for to vote base on their age.

let ageOfPerson: number = 17;

if (ageOfPerson >= 19) {
  console.log("Person is eligible for vote");
} else {
  console.log("Person is not eligible for vote");
}

//  Calculate the result of expression.

let result: number = ((10 + 5) * 3 - 2) / (4 % 3) - 7;

console.log(result);
/*
function functionName() {
  console.log("This is a function");
}

const functionValue = functionName();
console.log(functionValue);
*/
// program to use function
// Number is prime number or not.  (the anser is 1 is prime number)
Object.defineProperty(exports, "__esModule", { value: true });
/*
function checkPrimeNumber(number3: number) {
  if (number3 % 2) {
    console.log("The Number is prime");
  } else {
    console.log("The number is not prime");
  }
}

checkPrimeNumber(2);
checkPrimeNumber(3);
checkPrimeNumber(101);
checkPrimeNumber(150);
checkPrimeNumber(4);
*/
// array of student push , pop,  /
let studentName = ["Omer", "Usman", "Ali", "Hassan", "Hussain"];
console.log(studentName[0]);
console.log(studentName[1]);
console.log(studentName[2]);
console.log(studentName[3]);
console.log(studentName[4]);
let message = "I want to meet you today.";
console.log(`hello ${studentName}, I want to meet you today`);
let guestList = [];
guestList.push("Omer", "Usman", "Ali");
console.log(studentName[0], "You are invited for dinner");
console.log(studentName[1], "You are invited for dinner");
console.log(studentName[2], "You are invited for dinner");
console.log(studentName[3], "You are invited for dinner");
console.log(studentName[4], "You are invited for dinner");
guestList.pop();
