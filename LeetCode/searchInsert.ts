/* 35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 */

function searchInsert(nums, target) {
  if (target < nums[0]) {
    return 0;
}
  let index = nums.findIndex((element, i) => element === target || nums[i + 1] > target)
  return index === -1 ? nums.length : (nums[index] === target ? index : index + 1);
}

console.log(searchInsert([1,3,5,6], 0));
