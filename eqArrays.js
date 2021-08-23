const assertEqual = require("./assertEqual");

const eqArrays = function (array1, array2) {
  isMatching = false;
  if (array1.length !== array2.length) {
    return isMatching;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      isMatching = true;
    }
  }
  return isMatching;
};

module.exports = eqArrays;
