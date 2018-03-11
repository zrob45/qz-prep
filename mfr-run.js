var q4 = require('./map-filter-reduce');

var resA = q4.a([
  { name: 'Henrik', time: 47.72 },
  { name: 'Andre', time: 47.93 },
  { name: 'Victor', time: 48.34 },
  { name: 'Manfred', time: 48.4 },
  { name: 'Sebastian', time: 48.53 },
  { name: 'Alexis', time: 48.54 },
  { name: 'Clement', time: 48.58 },
]);

var resB = q4.b([
  { name: 'Henrik', time: 47.72 },
  { name: 'Andre', time: 47.93 },
  { name: 'Victor', time: 48.34 },
  { name: 'Manfred', time: 48.4 },
  { name: 'Sebastian', time: 48.53 },
  { name: 'Alexis', time: 48.54 },
  { name: 'Clement', time: 48.58 },
]);

var resC = q4.c(['Henrik', 'Andre', 'Victor', 'Manfred']);
