"use strict";

const findMedianSortedArrays = (nums1, nums2) => {
  const numbers = nums1.concat(nums2).sort((a, b) => a - b);

  if (numbers.length % 2 !== 0) {
    return numbers[Math.ceil(numbers.length / 2) - 1];
  }

  if (numbers.length % 2 === 0) {
    return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([2], []));
