/* 1512. Number of Good Pairs
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */

function numJewelsInStones(jewels, stones) {
  const map1 = new Map();
  let counter = 0;

  for (let jewel of jewels) {
    map1.set(jewel, true);
  }

  for (let stone of stones) {
    if (map1.has(stone)) {
      counter += 1;
    }
  }

  return counter;
}

console.log(numJewelsInStones("z", "ZZ"));
