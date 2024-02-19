/*
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the 
name of the pizza. For each pizza you should have one line of output containing a simple statement 
like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
such as I really love pizza!
*/

let pizzas = ["Pepperoni", "Hawaiian", "Margherita"];

// Print the name of each pizza using for loop
console.log("My Favorite Pizza are :");

for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}
// Print a sentence for each pizza
console.log("\n I like these pizza:");
function printPizzas(pizzas: string[]): void {
  for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]}.`);
  }
  //print an additional sentence about that how much I Like Pizza
  console.log("I really love pizza!");
}

printPizzas(pizzas);
