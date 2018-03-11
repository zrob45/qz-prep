var carDataFile = require('./carpricedata.js');
var car = {};
//Global variable to store cardata
var data = {};

// access the data from carprice js  and assign to variable data and
//retun the data in value

car.readCarData = function() {
  console.log('readCarData');
  // Write your code here

  return data;
};

//Find the price of one car as passed as argument and return  the out put in console
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
// and return the same
car.maxPricedCar = function() {
  console.log('maxPricedCar');
  var maxPricedCar;
  //write your code here

  // printing the return value in console
  console.log('maxPricedCar..........' + maxPricedCar);
  return maxPricedCar;
};

/// Calling the function
car.readCarData();
// call the funtion to find the price of a BMW series 3 red car
car.findCarPrice('BMW', 'series 3', 'red');
car.maxPricedCar();
