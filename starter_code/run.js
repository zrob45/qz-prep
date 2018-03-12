var quiz = require('./exercise.js');
var carData = require('./carData');

// ----------------------------------------
//   BASICS
// ----------------------------------------
var q0 = quiz.question_00();
console.log(q0);

var q1 = quiz.question_01();
console.log(q1);

var q2 = quiz.question_02();
console.log(q2);

var q3 = quiz.question_03();
console.log(q3);

var q4 = quiz.question_04();
console.log(q4);

var q5 = quiz.question_05();
console.log(q5);

// ----------------------------------------
//   OBJECTS
// ----------------------------------------

var q6 = quiz.question_06(carData, 'BMW', 'series 3', 'red');
console.log(q6);

var q7 = quiz.question_07(carData);
console.log(q7);

var q8 = quiz.question_08(carData);
console.log(q8);

// ----------------------------------------
//   ARRAY FUNCTIONS
// ----------------------------------------
var skierData = [
  { name: 'Clement', time: 48.58 },
  { name: 'Henrik', time: 47.72 },
  { name: 'Sebastian', time: 48.53 },
  { name: 'Andre', time: 47.93 },
  { name: 'Ted', time: 102.3 },
  { name: 'Manfred', time: 48.4 },
  { name: 'Alexis', time: 48.54 },
  { name: 'Victor', time: 48.34 },
];

var q9 = quiz.question_09(skierData);
console.log(q9);

var q10 = quiz.question_10(skierData);
console.log(q10);

var q11 = quiz.question_11(['Henrik', 'Andre', 'Victor', 'Manfred']);
console.log(q11);

var q12 = quiz.question_12(skierData);
console.log(q12);
