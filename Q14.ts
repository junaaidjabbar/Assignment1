// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = ["Omer", "Usman", "Ali"];

guestList.forEach((personsName) => {
  console.log(
    `Hello ${personsName}, You are invided to dinner. Please join us.`
  );
});

export {};
