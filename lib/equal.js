const equal = require('deep-equal');
console.log(
  equal(
    { a : [ 2, 3 ], b : [ 4 ] },
    { a : [ 2, ], b : [ 4 ] }
  ),
  equal(
    { x : 5, y : [6] },
    { x : 5, y : 6 }
  )
);