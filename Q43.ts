/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of
magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great 
added to each magician’s name.
*/

// Array of Magician's names

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
