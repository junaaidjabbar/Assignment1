/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

let numbers = [1, 2, 3, 4, 5];

// Trying to access an index that doesn't exist (out of bounds)
console.log(numbers[10]); // This will produce an index error

// Correct the error
console.log(numbers[2]); // This accesses the element at index 2, which is 3

export {};
