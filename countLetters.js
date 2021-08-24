const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}  ===   ${expected}`);
  } else console.log(`Assertion Failed:  ${actual}  !==  ${expected}`);
};

const countLetters = function (countWord) {
  const results = {};

  for (const letter of countWord) {
    if (letter === " ") {
      continue;
    } else if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

module.exports = countLetters;

const resultLetters = countLetters("lighthouse in the house");
assertEqual(resultLetters["h"], 4);
