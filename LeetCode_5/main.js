"use strict";

const longestPalindrome = (s) => {
  // In case there is no duplication
  if (new Set(s).size === s.length) return s[0];

  let palindrome = "";

  for (let i = 0; i < s.length; i++) {
    let arr = "";

    for (let j = i; j < s.length; j++) {
      // In case all letters are same
      if (s[j] === s[j - 1]) {
        s[j].length === j ? (arr += s[j]) : "";
        arr += s[j];
        break;
      }

      // In case letters are duplicated
      if (arr.includes(s[j])) {
        arr += s[j];
        break;
      }

      // In case letters are not duplicated
      if (!arr.includes(s[j])) {
        arr += s[j];
      }
    }

    // In case the first letter doesn't have dupulication
    if (arr.lastIndexOf(arr[0]) === 0) {
      arr = "";
    }

    // In case array length is longer than palindrome one
    if (palindrome.length < arr.length) palindrome = arr;
  }

  return palindrome;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("ccc"));
