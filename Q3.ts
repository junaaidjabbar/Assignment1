/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let personName: string = "Omer";

console.log(personName.toLowerCase()); // Print name in lowercase
console.log(personName.toUpperCase()); // Print name in uppercase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1)); // Print name in titlcase

export {};
