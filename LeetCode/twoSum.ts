/* 1. Two Sum. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

function twoSum(nums: number[], target: number): number[] | null {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return null;
}

console.log(twoSum([2 ,3, 2, 4], 6));
