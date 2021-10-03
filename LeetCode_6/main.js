"use strict";

const convert = (s, numRows) => {
  let answer = "";

  // One ZigZag block
  const oneBlock = 2 * numRows - 2;

  // Loop for row
  for (let i = 0; i < numRows; i++) {
    // First loop & Last loop don't have second letters in one block
    const firstLoop = i === 0;
    const lastLoop = i === numRows - 1;

    // Loop for letters
    for (let j = i; j < s.length; j += oneBlock) {
      // Loops loop have 2 letters in one block (except First loop & Last)
      // Go to the next block of numbers j, then decrese 2 * numbers row
      const secondLetters = j + oneBlock - 2 * i;

      // Add without second letters
      answer += s[j];

      // Add second letters
      if (!firstLoop && !lastLoop && secondLetters < s.length)
        answer += s[secondLetters];
    }
  }
  return answer;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("PAYPALISHIRING", 5));

// ===========================================================================

// const convert = (s, numRows) => {
//   // Empty array
//   const arr = []; // 0, 1, 2,
//   const hold = []; // A,L,R,I

//   // The number of zag
//   const zagAmount = numRows - 2;

//   // Iterate for the amount of block
//   for (let i = 0; i < Math.ceil(s.length / (numRows + zagAmount)); i++) {
//     let passedLetters = (numRows + zagAmount) * i;

//     // loop one block
//     for (let j = passedLetters; j < numRows + zagAmount + passedLetters; j++) {
//       // Block If
//       if (j === s.length) break;

//       // Push every letters
//       arr.push(s[j]);

//       // What numbers is the part of zag?
//       if (
//         j > numRows + passedLetters - 1 &&
//         j < numRows + zagAmount + passedLetters
//       ) {
//         // Case 3 (i > 2 || i < 4) -> i = 3
//         // Case 4 (i > 3 || i < 6) -> i = 4, 5
//         // Case 5 (i > 4 || i < 8) -> i = 5, 6, 7

//         // Remove a letter pushed at the start point of this loop
//         const zagNumbers = arr.pop();

//         // Push a letter removed to the another array
//         hold.push(zagNumbers);
//       }
//     }
//   }
//   console.log(arr, hold);
// };

// convert("PAYPALISHIRING", 4);
