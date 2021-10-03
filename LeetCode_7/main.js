"use strict";

const reverse = (x) => {
  const reversedNumber = Math.abs(x).toString().split("").reverse().join("");

  if (reversedNumber.startsWith("0")) reversedNumber.slice(1);

  if (reversedNumber > 2 ** 31) return 0;

  if (x < 0) return -reversedNumber;

  return +reversedNumber;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
