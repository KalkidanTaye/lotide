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

const takeUntil = function (array, callback) {
  const newArr = [];
  for (const iterator of array) {
    if (callback(iterator)) {
      break;
    }
    newArr.push(iterator);
  }
  return newArr;
};
module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArrayEqual(results1, [1, 2, 5, 7, 2], true);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArrayEqual(results2, ["I've", "been", "to", "Hollywood"], true);
