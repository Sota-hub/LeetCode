"use strict";

var isPalindrome = function (x) {
  if (x < 0) return false;

  let number = x;
  let reverse = 0;

  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = parseInt(number / 10);
  }

  return x === reverse;
};

// ============================= Runtime Error =============================

// const palindrome = (numbers) => {
//   // Block Code
//   if (numbers < 0) return false;

//   numbers = numbers.toString();

//   let formerNums;
//   let latterNums;

//   // ODD
//   if (numbers.length % 2 !== 0) {
//     formerNums = numbers.substring(0, Math.floor(numbers.length / 2));
//     latterNums = numbers.substring(Math.floor(numbers.length / 2) + 1);
//     latterNums = latterNums.split("").reverse().join("");

//     if (formerNums === latterNums) return true;
//     if (formerNums !== latterNums) return false;
//   }

//   // EVEN
//   if (numbers.length % 2 === 0) {
//     formerNums = numbers.slice(0, numbers.length / 2);
//     latterNums = numbers.slice(numbers.length / 2);
//     latterNums = latterNums.split("").reverse().join("");

//     if (formerNums === latterNums) return true;
//     if (formerNums !== latterNums) return false;
//   }
// };

console.log(palindrome(121));
console.log(palindrome(-121));
console.log(palindrome(10));
console.log(palindrome(-101));
