var quiz = require('./exercise.js');

// ----------------------------------------
//   QUESTION 01
// ----------------------------------------
var q1a = quiz.q1.a();
console.log(q1a);

var q1b = quiz.q1.b();
console.log(q1b);

var q1c = quiz.q1.c();
console.log(q1c);

// ----------------------------------------
//   QUESTION 02
// ----------------------------------------
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var q2a = quiz.q2.a(arr);
console.log(q2a);

var q2b = quiz.q2.b(arr);
console.log(q2b);

// ----------------------------------------
//   QUESTION 03
// ----------------------------------------
var q3a = quiz.q3.a();
console.log(q3a);

var q3b = quiz.q3.b('BMW', 'series 3', 'red');
console.log(q3b);

var q3c = quiz.q3.c();
console.log(q3c);

// ----------------------------------------
//   QUESTION 04
// ----------------------------------------
var input = [
  { name: 'Henrik', time: 47.72 },
  { name: 'Andre', time: 47.93 },
  { name: 'Victor', time: 48.34 },
  { name: 'Manfred', time: 48.4 },
  { name: 'Sebastian', time: 48.53 },
  { name: 'Alexis', time: 48.54 },
  { name: 'Clement', time: 48.58 },
];

var q4a = quiz.q4.a(input);
console.log(q4a);

var q4b = quiz.q4.b(input);
console.log(q4b);

var q4c = quiz.q4.c(['Henrik', 'Andre', 'Victor', 'Manfred']);
console.log(q4c);
