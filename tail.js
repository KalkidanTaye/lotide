const assertEqual = require("./assertEqual");

const tail = function (arr) {
  const tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

module.exports = tail;
