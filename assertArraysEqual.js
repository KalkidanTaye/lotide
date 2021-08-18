const assertArrayEqual = function (actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`Assertion Passed:  ${actual}  ===   ${expected}`);
  } else console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
};

const eqArrays = function (array1, array2) {
  isMatching = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isMatching = false;
    }
  }
  return isMatching;
};

assertArrayEqual([1, 2, 3], [1, 2, 3], true); // => trueCLEAR

// assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

// assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
