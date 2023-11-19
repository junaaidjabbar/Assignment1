/*

// Question no. 11
// Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.

/*
let friendList = [
  "Muhammad",
  "Ali",
  "Usman",
  "Omer",
  "Abubakar",
  "Osama",
  "Meer",
];
friendList[0];
friendList[1];
friendList[2];
friendList[3];
friendList[4];

console.log(friendList[0]);
console.log(friendList[3]);
*/

// Question no. 12.

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.

/*
let friendList = [
  "Muhammad",
  "Ali",
  "Usman",
  "Omer",
  "Abubakar",
  "Osama",
  "Meer",
];
friendList[0];
friendList[1];
friendList[2];
friendList[3];
friendList[4];
friendList[5];

const message1: string = "Hello";

console.log(message1, friendList[0]);
console.log(message1, friendList[1]);
console.log(message1, friendList[2]);
console.log(message1, friendList[3]);
console.log(message1, friendList[4]);
console.log(message1, friendList[5]);
*/

//comparison operator
/*
let n = 5;
console.log(n == 5); // "n" value equal to 5
console.log(n === 5); // "n"  value equal to 5
console.log(n != 5); // "n" value not equal to 5
console.log(n > 8); // "n" value greater than 8
console.log(n < 8); // "n" value less than 8
console.log(n >= 8); // "n" value greater than or equal than 8
console.log(n <= 8); // "n" value less than or equal than 8
*/

// logical operator
/*
let n = 5;
console.log(n >= 5 && n < 1);
console.log(n > 5 && n < 10);
console.log(n >= 5 || n < 10);
console.log(n > 5 || n < 10);
console.log(!(n < 10));
console.log(!(n > 10));
*/

// if, else , else if

/*
let n = 6;
if (n == 5) {
  console.log("ok");
} else {
  console.log("Not Ok");
}

let n1 = 30;

if (n1 == 30) {
  console.log("ok");
} else {
  console.log("Not Ok");
}
*/
/*
let x1 = "where does the people live?";
let correctAnswer = "Pakistan";
*/
/*
let n2 = 9;

if (n2 == 50) {
  console.log("Correct!");
} else if (n2 <= 10) {
  console.log("Null");
} else {
  console.log("Not Recognized");
}
*/
/*
let n3 = 30;
if (n3 == 10) {
  console.log("Ok");
} else if (n3 == 0) {
  console.log("Not Allowed");
} else if (((n3 = -1), (n3 = -10))) {
  console.log("Typo Error");
} else if (n3 == 30) {
  console.log("Wrong");
} else {
  console.log("Blanck");
}
*/
/*
let personName1: string = "Eric";
let message1: string = "Would you like to learn some Python today?";

console.log(`Hello ${personName1} "${message1}"`);
*/

function sum(n1: number, n2: number) {
  console.log(n1 + n2);
}

sum(3, 100);

function sum2(n3: number, n4: number) {
  console.log(n3 / n4);
}

sum2(16, 4);

function sum3(n1: number, n2: number) {
  console.log(n1 + n2);
  return;
}
sum3(4, 4);

const sum5 = (n1: number, n2: number) => {
  console.log(n1 + n2);
};

sum5(3, 40);

let firstName: string = "muhammad";
let lastName: string = "Ali";
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

console.log(10 % 3);
