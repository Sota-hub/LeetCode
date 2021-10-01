"use strict";

const lengthOfLongestSubstring = (string) => {
  const s = string.split("");
  let longestLength = 0;
  let currentLength;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        currentLength = j + 1 - (i + 1);
        if (longestLength < currentLength) {
          longestLength = currentLength;
        }
        break;
      }
    }
  }
  return longestLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
