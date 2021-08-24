const middle = require("../middle");
const assertArrayEqual = require("../assertArraysEqual");

assertArrayEqual(middle([1]), [1]); // => []
assertArrayEqual(middle([1, 2, 3, 4, 5]), [2]); // => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // => [3,4]

assertArrayEqual(middle([1, 2, 3, 4, 5]), [3], true); // => true
