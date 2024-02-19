/*
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”
*/

const favoriteTranportation: string[] = [
  "Car",
  "MotorCycle",
  "Bicycle",
  "Scooter",
  "Jeep",
];
let brands: string[] = ["Toyota", "Honda", "Sohrab", "Vespa", "Nissan"];

favoriteTranportation.forEach((element) => {
  console.log(`I would like to own a ${brands}, ${favoriteTranportation}`);
});
