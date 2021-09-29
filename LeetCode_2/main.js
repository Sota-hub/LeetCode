"use strict";

const addTwoNumbers = (l1, l2) => {
  let answer = [];
  let nextDigit = 0;
  for (let i = 0; l1 < l2 ? i < l2.length : i < l1.length; i++) {
    if (l1[i] + l2[i] >= 10) {
      answer.push(l1[i] + l2[i] - 10 + nextDigit);
      nextDigit = 1;
      if (l1 < l2 ? i === l2.length - 1 : i === l1.length - 1) {
        answer.push(1);
      }
    } else {
      answer.push(l1[i] + l2[i] + nextDigit);
      nextDigit = 0;
    }
  }
  return answer;
};
console.log(addTwoNumbers([3, 5, 7], [2, 4, 6]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9], [9, 9, 9, 9]));
