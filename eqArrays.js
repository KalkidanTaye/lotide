const assertEqual = function (actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`Assertion Passed:  ${actual}  ===   ${expected}`);
  } else console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
};

const eqArrays = function (array1, array2) {
  isMatching = false;
  if (array1.length !== array2.length) {
    return isMatching;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      isMatching = true;
    } else {
      isMatching = false;
    }
  }

  return isMatching;
};

module.exports = eqArrays;

// assertEqual([1, 2, 3], [1, 2, 3]); // => true
// assertEqual([1, 2, 3], [3, 2, 1]); // => false

// assertEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertEqual(["1", "2", "3"], ["1", "2", 3]); // => false
