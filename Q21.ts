/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these 
items.
*/

let countriesObject: { [key: string]: string } = {
  Pakistan: "Pakistan",
  SaudiArabia: "Saudi Arabia",
  UAE: "UAE",
  Qatar: "Qatar",
  USA: "USA",
};

console.log("countriesObject");

for (let key in countriesObject) {
  console.log(`${key}: ${countriesObject[key]}`);
}
