// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?

function secondLargest(array) {
    let maxi = -Infinity;
    let second = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxi) {
        second = maxi;
        maxi = array[i];
      } else if (array[i] > second && array[i] !== maxi) {
        second = array[i];
      }
    }
  
    return second;
  }
  
  
  // Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
  
  function calculateFrequency(string) {
    let freq = [];
  
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
  
      if (char >= "a" && char <= "z") {
        let found = false;
  
        for (let j = 0; j < freq.length; j++) {
          if (freq[j][0] === char) {
            freq[j][1]++;
            found = true;
            break;
          }
        }
  
        if (!found) {
          freq.push([char, 1]);
        }
      }
    }
  
    let result = {};
  
    for (let i = 0; i < freq.length; i++) {
      result[freq[i][0]] = freq[i][1];
    }
  
    return result;
  }
  
  
  // Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  
  function flatten(unflatObject) {
    let result = {};
  
    function helper(object, parentKey) {
      for (let key in object) {
        let newKey;
  
        if (parentKey === "") {
          newKey = key;
        } else {
          newKey = parentKey + "." + key;
        }
  
        if (
          typeof object[key] === "object" &&
          object[key] !== null
        ) {
          helper(object[key], newKey);
        } else {
          result[newKey] = object[key];
        }
      }
    }
  
    helper(unflatObject, "");
  
    return result;
  }
  
  
  // Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
  
  function unflatten(flatObject) {
    let result = {};
  
    for (let key in flatObject) {
      let keys = key.split(".");
      let current = result;
  
      for (let i = 0; i < keys.length; i++) {
        let currentKey = keys[i];
        let nextKey = keys[i + 1];
  
        if (i === keys.length - 1) {
          current[currentKey] = flatObject[key];
        } else {
          if (!current[currentKey]) {
            if (!isNaN(nextKey)) {
              current[currentKey] = [];
            } else {
              current[currentKey] = {};
            }
          }
  
          current = current[currentKey];
        }
      }
    }
  
    return result;
  }