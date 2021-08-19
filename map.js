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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArrayEqual(eqArrays(results1, ["g", "c", "t", "m", "t"]), true);
