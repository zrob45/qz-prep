var q1 = {};
var q2 = {};
var q3 = {};
var q4 = {};

// ---------------------------------------------------------------------
// 1.001 QUIZ 2018
//
// All quiz questions are in this file. If you would like to run the
// functions there is a separate run.js() which you can use and manipulate
// to your liking. The quiz is open book and open web. Feel free to
// google for answers as you would in the real world. Good luck.
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// QUESTION 01
//
// The following pieces of code contain a number of errors, correct these
// errors so that the code runs properly
// While you may have syntax help with VSCode, it can be misleading so be careful.
// ---------------------------------------------------------------------

q1.a = function() {
  var arr = [0,1 2,3,4,5];
  var element03 = array.(3);
  return element03;
};

q1.b = function() {
  var obj = {
    'class':'1.00'
    'quiz', 1;
    'topics', ['node','google maps','callbacks','promises' ,
  };
  return obj;
};

q1.c = function() {
  va func = function{
    return answer;
    var answer = 10;
  }
  var ans = q1func[];
  return ans;
};

// ---------------------------------------------------------------------
// QUESTION 04
//
// Arrays.
// ---------------------------------------------------------------------

q2.a = function(foo, bar) {
  // ---------------------------------------------------------------
  // Reading from an array
  // Your function should take two arguments, the array and the
  // desired index and RETURN a single value (the element of the array)
  // Ensure all of the following constraints are met by your function.
  // 1) Change the function arguments to something sensible
  // 2) Check the index values that they are less than the array length.
  // 3) If the value is not a valid value, return an error message.
  // 4) If the value is valid, return the array element of that index.
  // ---------------------------------------------------------------
  // TODO your code here
};

q2.b = function(foo) {
  // ---------------------------------------------------------------
  // Writing to an array
  // Write a function to take an array as an arugment,
  // then create a new array and inside this new array, push the
  // string version of the elements in the input array.
  // 1) Create an empty array
  // 2) Iterate over the q2Numbers array and push the string version
  //    of the numbers to a new array
  // ** You can use an array function or a for loop to complete this task,
  //    but the original array must remain untouched.
  // 3) Return the newly made array.
  // 4) Again make sure to rename the function argument to more a
  //    sensible variable name
  // ---------------------------------------------------------------
};

// ---------------------------------------------------------------------
// QUESTION 03
//
// We are provided a json file called carpice.json. You can find it
// in the same directory as this quiz.
// Use it to complete the following problem.
// ---------------------------------------------------------------------

q3.a = function() {
  // ---------------------------------------------------------------
  // Read in the data from the carprice json file.
  // Retun the results of the file as a JavaScript object.
  // Use fs.readFileSync
  // ---------------------------------------------------------------

  var data = {};
  // TODO your code here

  return data;
};

q3.b = function() {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in carprice.json
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------

  var data = q3.a();
  var maxPricedCar = {};
  // TODO your code here

  return maxPricedCar;
};

q3.c = function(carName, model, color) {
  // ---------------------------------------------------------------
  // Find the price of the car whose name, model, and color are provided
  // as arguments to this function.
  // Return the price.
  // ---------------------------------------------------------------

  var data = q3.a();
  var carPrice = 0;
  // TODO your code here

  return carPrice;
};

// ---------------------------------------------------------------------
// QUESTION 04
//
// You are provided racer results data from the 2018 olympics.
// Use what you know about forEach, map, filter, and reduce to complete
// the following problem.
// ---------------------------------------------------------------------

q4.a = function(input) {
  // ---------------------------------------------------------------
  // We are provided ski racer results from the olympics.
  // The input is an array of skier objects with name and time properties.
  // Using forEach, return an object whose keys are skier names and values
  // are associated skier times. You can assume each skier as a unique name.
  //
  // Example input: [{ name: 'Bob', time: 45.00 }]
  // Example output: { 'Bob': 45.00 }
  // ---------------------------------------------------------------

  var obj = {};
  input.forEach(function(/* TODO args */) {
    // TODO your code here
    // add name as key, time as value
  });
  return obj;
};

q4.b = function(input) {
  // ---------------------------------------------------------------
  // The input is an array of skier objects with name and time properties.
  // However, we are only interested in names of skiers with a time less than 48.5.
  // Using filter, map, and the provided input, return an array of skier names whose
  // times are under 48.5.
  //
  // Example input: [{ name: 'Bob', time: 45.00 }, { name: 'Sue', time: 50 }]
  // Example output: ['Bob']
  // ---------------------------------------------------------------

  var res = input
    .filter(function(/* TODO args */) {
      // TODO your code here
    })
    .map(function(/* TODO args */) {
      // TODO your code here
    });
  return res;
};

q4.c = function(input) {
  // ---------------------------------------------------------------
  // The input is now the array of skier names whose times are less than 48.5.
  // We want to convert the array of names into a string of names
  // separated by a comma
  // and a space, preserving order. Complete the reduce function.
  //
  // Example input: ['Bob', 'Sue']
  // Eample output: 'Bob, Sue'
  // ---------------------------------------------------------------

  var res = input.filter(
    function(/* TODO args */) {
      // TODO your code here
    },
    0 /*TODO set correct starting value*/,
  );
  return res;
};

module.exports = { q1, q2, q3, q4 };
