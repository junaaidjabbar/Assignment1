/*

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
guests to invite to dinner.

• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/

let guestList: string[] = ["Omer", "Usman", "Ali"];

// inform people you found a bigger dinner table.

for (let guest of guestList) {
  console.log(`Hello ${guest}, We found bigger table for dinner.`);
}

// Add one news guest at the beginning.
console.log("Add new person at the beginning:");

let newBeginningGuest: string = "Hassan";

guestList.unshift(newBeginningGuest);

// Add new person at the middle of array

let newPersonInMiddle: string = "Hamza";
let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(2, 0, newPersonInMiddle);

// add new person at the end.

console.log("Add new person at the end.");

let newPersonAtEnd: string = "Hussain";
guestList.push(newPersonAtEnd);

// invited message to each person.
console.log("New Invitation to each person.");
guestList.forEach((guest: string) => {
  console.log(`Hello ${guest}, You are invited at the dinner. Please join us`);
});

export {};
