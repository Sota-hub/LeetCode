// Gave up cause there are many exceptions

"use strict";

const myAtoi = (s) => {
  let minus = false;

  // Step.1 trim whitespac
  const stringArr = s.trim().split("");

  // In case the first letter is the string
  if (stringArr[0] !== "+" && stringArr[0] !== "-") {
    if (!+stringArr[0] && +stringArr[0] !== 0) return 0;
  }

  // In case the beggining word is -+
  if (stringArr[0] === "-" && stringArr[1] === "+") return 0;
  if (stringArr[0] === "+" && stringArr[1] === "-") return 0;

  // Step.2 check the first character
  if (stringArr[0] === "-") minus = true;

  // In case the decimal number
  if (stringArr.includes(".")) {
    if (!minus) return +stringArr.slice(0, stringArr.indexOf(".")).join("");
    if (minus) return -stringArr.slice(0, stringArr.indexOf(".")).join("");
  }

  for (let i = 0; i < stringArr.length - 1; i++) {
    if (
      !isNaN(stringArr[i - 1]) &&
      isNaN(stringArr[i]) &&
      !isNaN(stringArr[i + 1])
    )
      return 0;
  }

  // Step.3 read just a numbers
  const numberArr = stringArr.filter((word) => isNaN(word) === false);
  const number = numberArr.join("").trim();

  // Step.4 convert digits into an integer
  // Step.5 clamp the integer and return it
  // Step.6 return the integer
  if (minus && Math.abs(number) > 2147483648) return -2147483648;
  if (!minus && Math.abs(number) > 2147483648) return 2147483647;

  if (minus) return -+number;
  if (!minus) return +number;
};

// console.log(myAtoi("+42"));
// console.log(myAtoi("-42"));
// console.log(myAtoi("4193 with words"));
// console.log(myAtoi("word and 987"));
// console.log(myAtoi("-91283472332"));
// console.log(myAtoi("3.1419"));
// console.log(myAtoi("+1"));
// console.log(myAtoi("+-12"));
// console.log(myAtoi("0000000001234"));

// ===================================================================================
