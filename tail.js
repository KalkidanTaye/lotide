const assertEqual = require("./assertEqual");

const tail = function (arr) {
  let tailArr = "";
  for (let i = 0; i < arr.length; i++) {
    tailArr = arr[i];
  }
  return tailArr;
};

module.exports = tail;
