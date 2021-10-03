"use strict";

const twoSum = function (num, target) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([3, 3], 6));
