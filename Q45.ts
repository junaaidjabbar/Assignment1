/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
and a model name. It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.
*/

function createCar(manufacturer: string, model: string, ...extras: any) {
  let carInfo: any = {
    manufacturer: manufacturer,
    model: model,
  };

  // Add additional information provided as keyword arguments
  for (let i = 0; i < extras.length; i += 2) {
    carInfo[extras[i]] = extras[i + 1];
  }

  return carInfo;
}

// Call the function with required information and additional name-value pairs
let car = createCar("Toyota", "Camry", "color", "blue", "year", 2022);

// Print the object returned by the function
console.log(car);

export {};
