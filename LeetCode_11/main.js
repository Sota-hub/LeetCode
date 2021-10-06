"use strict";

const maxArea = (height) => {
  let maxContainer = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let smaller = Math.min(height[left], height[right]);
    let distance = right - left;

    if (maxContainer < smaller * distance) maxContainer = smaller * distance;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxContainer;
};

// ===== Time Over =====
// const maxArea = (height) => {
//   let maxContainer = 0;

//   for (let i = 0; i < height.length; i++) {
//     for (let j = 0; j < height.length; j++) {
//       const x = j - i;
//       const y = height[i] < height[j] ? height[i] : height[j];

//       const container = x * y;

//       if (container > maxContainer) maxContainer = container;
//     }
//   }

//   return maxContainer;
// };

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
