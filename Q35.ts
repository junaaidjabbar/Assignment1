/*

Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals 
in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as 
    Any of these animals would make a great pet!
*/

let animals = ["Dog", "Cat", "Hamster"];

// Print the name of each animal using for loop

console.log("My Favorite Animals are :");

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Print a statement about each animal

console.log("\n statement about each animal:");

for (const animal of animals) {
  if (animal === "Dog") {
    console.log(`A ${animal} would make a great pet!`);
  } else if (animal === "Cat") {
    console.log(`A ${animal} is a great pet!`);
  } else if (animal === "Hamster") {
    console.log(`A ${animal} is a beautiful pet!`);
  }
}

// Common Characteristics of these animal

console.log(` \n what Commom Characteristics of these animals: `);
console.log("Any of these animals could be a great pet!");
