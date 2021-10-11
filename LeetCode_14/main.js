"use strict";

const longestCommonPrefix = (str) => {
  let answer = "";

  // Get shortest storing length
  let shortest = 200;
  for (let i = 0; i < str.length; i++) {
    if (shortest > str[i].length) {
      shortest = str[i].length;
    }
  }

  // Compare first letter, second letter...
  for (let j = 0; j < shortest; j++) {
    for (let k = 1; k < str.length; k++) {
      if (str[0][j] !== str[k][j]) return answer;
    }
    answer += str[0][j];
  }

  return answer;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

/* =================== Runtime Error =======================
const longestCommonPrefix = (str) => {
  let answer = "";

  const shorterStr =
    str[0].length < str[1].length ? str[0].length : str[1].length;

  for (let i = 0; i < shorterStr; i++) {
    if (str[0][i] === str[1][i]) answer += str[0][i];
    else break;
  }

  for (let j = 2; j < str.length; j++) {
    for (let k = 0; k < answer.length; k++) {
      if (answer[k] !== str[j][k]) {
        answer = answer.slice(0, k);
        break;
      }
    }
  }

  return answer;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
*/
