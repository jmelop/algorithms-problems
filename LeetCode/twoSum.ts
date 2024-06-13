/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] | null {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    let sum = nums[leftPointer] + nums[rightPointer];
    if (sum === target) {
      return [leftPointer, rightPointer];
    } else if (leftPointer >= rightPointer - 1) {
      rightPointer = nums.length - 1;
      leftPointer = ++leftPointer;
    } else {
      rightPointer = rightPointer - 1;
    }
  }

  return null;
};

console.log(twoSum([3, 2, 4], 6));
