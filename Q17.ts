/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you 
pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite
 them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
 actually have an empty list at the end of your program.

*/

let guestList: string[] = ["Hassan", "Omer", "Hamza", "Usman", "Ali"];

// Message to invite twon people for dinner.

console.log("I am invited only two people for dinner");

// Remove gust from list until only two name remain.

console.log("Not invited Message:");
while (guestList.length > 2) {
  let removeList = guestList.pop();
  console.log(`Sorry ${removeList}, You are not invited for dinner today`);
}
// Invitation message for remaining two guest.
console.log("Inviation message for remaining two :");
for (let guest of guestList) {
  console.log(`Hello ${guest}, You are invited for dinner`);
}

// Remove the last two names from your list, so you have an empty list.

guestList.pop();
guestList.pop();

// empty list at the end of your program.

console.log(`Empty list at the end of dinner :`, guestList);
