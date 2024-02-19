/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
  and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/
let fruit: string = "Mango";
let num2: number = 40;
let friendName: string[] = ["Omer", "Usman", "Ali"];

// Test for equality with string.
console.log(`Is fruit === "Mango"? I predict true `);
console.log(fruit == "Mango");

console.log(`Is fruit === "Apple"? I predict false`);
console.log(fruit === "Apple");

// Test for inequality with string.
console.log(`Is fruti !== "Apple"? I predict true`);
console.log(fruit !== "Apple");

console.log(`Is fruti !== "Mango"? I predict false`);
console.log(fruit !== "Mango");

// Numerical tests involving equality
console.log(`Is num2 ==40? I predict true`);
console.log(num2 == 40);

console.log(`Is numb2 !== 40? I predict false`);
console.log(num2 !== 40);

// Numerical tests involving inequality,
console.log(`Is num2 !==30? I predict true`);
console.log(num2 !== 30);

console.log(`Is num2 !==40? I predict false`);
console.log(num2 !== 40);

// Numerical test greater than
console.log(`Is num2>30? I predict true`);
console.log(num2 > 30);

console.log(`Is num2>50? I predict false`);
console.log(num2 > 50);

// Numerical test less than
console.log(`Is num2<50? I predict true`);
console.log(num2 < 50);

console.log(`Is num2<20? I predict false`);
console.log(num2 < 20);

// Numberical test greater than or equal to,
console.log(`Is num2 >= 40? I predict true`);
console.log(num2 >= 40);

console.log(`Is num2 >= 50? I predict false`);
console.log(num2 >= 50);

// Numerical test less than or equal to
console.log(`Is num2 <= 50? I predict true`);
console.log(num2 <= 50);

console.log(`Is num2 <= 30? I predict false`);
console.log(num2 <= 30);

// • Tests using "and" operators
console.log(`Is num2>=40 && num2<50? I predict ture`);
console.log(num2 >= 40 && num2 < 50);

console.log(`Is num2>=40 && num2>50? I predict false`);
console.log(num2 >= 40 && num2 > 50);

// • Tests using "or" operators
console.log(`Is num2>=40 || num2>50? I predict true`);
console.log(num2 >= 40 || num2 > 50);

console.log(`Is num2 ==30 || num2>50? I predict false`);
console.log(num2 == 30 || num2 > 50);

// • Test whether an item is in a array
console.log(`Is "Ali" is in friendList? I predict true`);
console.log(friendName.includes("Ali"));

console.log(`Is "Hamza" is in friendList? I predict false`);
console.log(friendName.includes("Hamza"));

// • Test whether an item is not in a array
console.log(`Is "Hamza" is not in friendList? I predict true`);
console.log(!friendName.includes("Hamza"));

console.log(`Is "Omer" is not in friendList? I predict false`);
console.log(!friendName.includes("Omer"));

export {};
