/* 1512. Number of Good Pairs
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */

function numIdenticalPairs(nums: number[]): number {
    let map1 = new Map();

  nums.forEach((element, index) => {
    if (!map1[element]) {
      map1[element] = [];
    }
    map1[element].push(index);
  });

  let counter = 0;
  for (const key in map1) {
    let keyLength = map1[key].length;
    if (keyLength > 1) {
        counter += (keyLength * (keyLength - 1)) / 2
    }
  }

  return counter;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
