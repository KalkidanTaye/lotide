const assertArrayEqual = require("./assertArraysEqual");

// middle function

const middle = function (array) {
  let middleArray = [];

  if (array.length > 2) {
    let arrayLength;
    //for  Arrays with an Odd number of elements
    if (array.length % 2 === 1) {
      arrayLength = Math.floor(array.length / 2);
      middleArray.push(array[arrayLength]);
    }
    //for  Arrays with an Even number of elements
    else if (array.length % 2 === 0) {
      arrayLength = array.length / 2;
      middleArray.push(array[arrayLength - 1]);
      middleArray.push(array[arrayLength]);
    }
  }

  return middleArray;
};

module.exports = middle;
