/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

*/

let guestList: string[] = ["Omer", "Usman", "Ali"];

// Name of Person who cant make dinner

let personWhoCantMake: string = "Ali";

console.log(`Hello ${personWhoCantMake}, You cant make dinner.`);

//  Replacing the person who cant make dinner and added new person

let newPersonAdd: string = "Hassan";
let indexOfGuestWhoCanMakeIt: number = guestList.indexOf(personWhoCantMake);
// (indexOfGuestWhoCanMakeIt) Find index number.

if (indexOfGuestWhoCanMakeIt !== -1) {
  guestList[indexOfGuestWhoCanMakeIt] = newPersonAdd;
}

console.log("Make second inivitation message to all :");
guestList.forEach((guest: string) => {
  console.log(
    `Hello ${guest}, You are invited to make a dinner. Please join us.`
  );
});

export {};
