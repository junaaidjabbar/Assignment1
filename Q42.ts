/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies 
the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/

// Array of magician names

let magicians: string[] = [
  "Harry Porter",
  "Hermione",
  "David Copperfield",
  "Robert",
  "William",
];

function make_great(names: string[]): void {
  for (let i = 0; i < names.length; i++) {
    magicians[i] = " the Great " + magicians[i];
  }
}

function show_magicians(names: string[]): void {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

// Call the function to show the magician's names
console.log("Original Magician Names");
show_magicians(magicians);

// Call the function to make the magician's names great

make_great(magicians);

// Call the function to show the magician's names
console.log("Magician names after added the phrase of the Great. ");
show_magicians(magicians);

export {};
