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

console.log(middle([1])); // => []
console.log(middle([1, 2, 3, 4, 5])); // => [2]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [3,4]

assertArrayEqual(middle([1, 2, 3, 4, 5]), [3], true); // => true
