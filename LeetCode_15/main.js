"use strict";

const threeSum = (nums) => {
  let answer = [];

  // Ascending Sort
  nums.sort((a, b) => {
    return a - b;
  });

  // ========================= Runtime Error ==============================
  if (nums[0] === 0 && nums[nums.length - 1] === 0 && nums.length > )
    return [0, 0, 0];
  // ======================================================================

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i - 1] === nums[i]) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];

      if (total === 0) {
        answer.push([nums[i], nums[left], nums[right]]);
        left += 1;
      }
      if (total < 0) left += 1;
      if (total > 0) right -= 1;
    }
  }

  return answer;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
