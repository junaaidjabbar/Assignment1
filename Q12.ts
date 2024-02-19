/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, 
but each message should be personalized with the person’s name.
*/

let friendList1: string[] = [
  "Muhammad",
  "Ali",
  "Usman",
  "Omer",
  "Abu Bakar",
  "Good Evening",
];

// Loop through each name in the array.

for (let friends of friendList1) {
  // Print a personallized message to each friends of frienlist.

  console.log(`Good Evening ${friends}, I hope you are well`);
}
