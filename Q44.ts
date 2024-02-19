/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one 
parameter that collects as many items as the function call provides, and it should print a summary of the sandwich 
that is being ordered. 
Call the function three times, using a different number of arguments each time.
*/

// the below code fragment can be found in:

// Define a function called makeSandwich
function makeSandwich(...items: string[]) {
  // Check if Order is empty
  if (items.length === 0) {
    console.log("Order is empty");
  } else {
    // Print a message indicating we're making a sandwich with the provided items
    console.log("Making a sandwich with following items:");

    // Iterate over each item in the items array
    for (let item of items) {
      // Print each item preceded by a dash
      console.log("- " + item);
    }
  }
}

// Call the makeSandwich function with different items each time
makeSandwich("Ham", "Cheese", "Lettuce"); // Example 1
makeSandwich("Turkey", "Swiss Cheese", "Tomato", "Mayonnaise"); // Example 2
makeSandwich("Peanut Butter", "Jelly"); // Example 3
makeSandwich(); // Example 4
