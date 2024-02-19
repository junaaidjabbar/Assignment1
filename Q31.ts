/*
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

// Make sure list not empty.
let userNames1 = ["admin", "Abu Bakar", "Omer", "Usman", "Ali"];

function greetUsers(userNames1: string[]): void {
  if (userNames1.length === 0) {
    console.log("We need to find somer users!");
    return;
  }

  for (const username of userNames1) {
    if (username.toLowerCase() === "admin") {
      console.log("Hello admin, would you like to see a status report.");
    } else {
      console.log(`Hello ${username}, thank you for loggin again`);
    }
  }
}
greetUsers(userNames1);

// If list is empty, message need to find some user.
userNames1 = [];

console.log(`\n if the user list is empty: \n`);
greetUsers(userNames1);
export {};
