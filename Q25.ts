/*
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and 
assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player 
  just earned 5 points.

• Write one version of this program that passes the if test and another that fails. 
(The version that fails will have no output.)

*/

// Write message if color is match

let alien_color = "yellow";
let alien_color1 = "blue";

if (alien_color == "yellow") {
  console.log("Player just earned 5 points");
}

// write message if verision fails  have no output

if (alien_color1 == "yellow") {
  console.log("Player just earned 5 points");
} else {
  console.log("The verision that fail have no output");
}

export {};
