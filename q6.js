"use strict";
/*
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/
let personsName = "\t Muhammad Ali \n"; // person name with whitespaces.
console.log(personsName); // solution 1
console.log("Name with whitespace:", personsName); // Solution 2 with mention white space detail
let strippedName = personsName.trim(); // persone name after triming.
console.log(strippedName); // Solution 1
console.log("Name after stripped white space:", strippedName); // solution 2 with mention stripping name space.
