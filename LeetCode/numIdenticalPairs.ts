/* 1512. Number of Good Pairs
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */

function numIdenticalPairs(nums: number[]): number {
  let map1 = new Map();
  let counter = 0;
  for (var i = 0; i < nums.length; i++) {
    counter += map1.get(nums[i]) ?? 0;
    map1.set(nums[i], map1.get(nums[i]) + 1 || 1);
  }

  return counter;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
