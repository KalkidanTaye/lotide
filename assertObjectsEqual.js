
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  const isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅  Assertion Passed:  ${inspect(actual)}  ===   ${inspect(expected)}`);
  } else console.log(`🛑🛑🛑  Assertion Failed:  ${inspect(actual)}  !==  ${inspect(expected)}`);
  // console.log(`Example label: ${inspect(actual)}`);
  };

  

  const eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };
  
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  
  const eqObjects = function (object1, object2) {
    let isEquivalent = false;
    
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    for (const key in object1) {
    
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        isEquivalent = eqArrays(object1[key], object2[key]);
        if (!isEquivalent) {
         
          return false;
        }
      }
      else{
       if (object1[key] !== object2[key]) {
      
        return false;
      }
    }
    }
  
    return true;
  };
  
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
 assertObjectsEqual(ab, ba); // => true
  
  const abc = { a: "1", b: "2", c: "3" };
  assertObjectsEqual(ab, abc); // => false
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertObjectsEqual(cd, dc); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertObjectsEqual(cd, cd2); // => false
  