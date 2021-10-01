"use strict";

const lengthOfLongestSubstring = (s) => {
  let longestLength = 0;

  for (let i = 0; i < s.length; i++) {
    let currentArr = [];

    for (let j = i; j < s.length; j++) {
      if (currentArr.includes(s[j])) break;
      else currentArr.push(s[j]);
    }

    if (longestLength < currentArr.length) {
      longestLength = currentArr.length;
    }
  }
  return longestLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("aab")); // 2
