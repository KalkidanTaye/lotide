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

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    } else if (results[sentence[i]]) {
      // elements.push(sentence[i], i);
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;

assertArrayEqual(letterPositions("hello").e, [1]);
