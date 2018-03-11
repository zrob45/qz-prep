var q4 = {};

q4.a = function(input) {
  /* We are provided ski racer results from the olympics.
   * The input is an array of skier objects with name and time properties.
   * Using forEach, return an object whose keys are skier names and values
   * are associated skier times. You can assume each skier as a unique name.
   *
   * Example input: [{ name: 'Bob', time: 45.00 }]
   * Example output: { 'Bob': 45.00 }
   */
  var obj = {};
  input.forEach(function(/* TODO args */) {
    // TODO add name as key, time as value
  });
  return obj;
};

q4.b = function(input) {
  /* The input is an array of skier objects with name and time properties.
   * However, we are only interested in names of skiers with a time less than 48.5.
   * Using filter, map, and the provided input, return an array of skier names whose
   * times are under 48.5.
   *
   * Example input: [{ name: 'Bob', time: 45.00 }, { name: 'Sue', time: 50 }]
   * Example output: ['Bob']
   */
  var res = input
    .filter(function(/* TODO args */) {
      // TODO
    })
    .map(function(/* TODO args */) {
      // TODO
    });
  return res;
};

q4.c = function(input) {
  /* The input is now the array of skier names whose times are less than 48.5.
   * We want to convert the array of names into a string of names separated by a comma
   * and a space, preserving order. Complete the reduce function.
   *
   * Example input: ['Bob', 'Sue']
   * Eample output: 'Bob, Sue'
   */
  var res = input.filter(
    function(/* TODO args */) {
      // TODO
    },
    0 /*TODO set correct starting value*/,
  );
  return res;
};

module.exports = q4;
