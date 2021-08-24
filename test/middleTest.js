const middle = require("../middle");
const assertArrayEqual = require("../assertArraysEqual");

console.log(middle([1])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => [2]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [3,4]

assertArrayEqual(middle([1, 2, 3, 4, 5]), [3], true); // => true
