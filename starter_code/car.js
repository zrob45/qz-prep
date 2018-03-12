var car = {};
//Find the price of one car as passed as argument and return  the out put and print in console
car.findCarPrice = function(carname, model, color) {
  console.log('findCarPrice');
  var carprice = 0;
  // write your code here

  // printing the return value in console
  console.log('carprice..........' + carprice);
  return carprice;
};

//Find the maximum priced car name , its model, number of doors, its price
// in the data given in carprice.json
// and return all the details in a object
//carname:....
//model:...
//
car.maxPricedCar = function() {
  console.log('maxPricedCar');
  var maxPricedCar = { name: null, model: null, price: null };
  //write your code here

  // printing the return value in console
  console.log('maxPricedCar..........' + maxPricedCar);
  return maxPricedCar;
};
//Update the carDATA data variable given below
//Add a new car "Honda" with following details in the same format
//model:Civic
//doors:4
//price:18840
car.updateCarData = function() {
  //Write your code here
};

/// Calling the function
//Find the price of BMW , series 3,  red color car
car.findCarPrice('BMW', 'series 3', 'red');
//Find and return an object with the max priced
//car name, model and price
car.maxPricedCar();

//Data is given below for 3 car company Nissan, Ford and BMW
