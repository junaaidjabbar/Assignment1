/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.
*/

// Aray of magician's name

let magicians: string[] = [
  "Harry Porter",
  "Hermione",
  "David Copperfield",
  "Robert",
  "William",
];

function show_magicians(names: string[]): void {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
// Call the function to show the magician's names

show_magicians(magicians);
