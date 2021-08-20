const assertArrayEqual = function (actual, expected) {
  if (actual === expected) {
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

const without = function (source, itemsToRemove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }

  return newArr;
};

const words = ["hello", "world", "lighthouse"];
assertArrayEqual(
  eqArrays(without(words, ["hello", "lighthouse"]), ["world"]),
  true
);
