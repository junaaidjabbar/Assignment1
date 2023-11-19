/* Favorite Number: Store your favorite number in a variable. Then, using that variable, 
create a message that reveals your favorite number. Print that message.
*/

let myFavoriteNumber: number = 7;
let messageReveal: string = "My favorite number is";

console.log(messageReveal + myFavoriteNumber); // solution 1

console.log("My favorite number is" + myFavoriteNumber); // solution 2

console.log(`${messageReveal} ${myFavoriteNumber}`); // solution 3
