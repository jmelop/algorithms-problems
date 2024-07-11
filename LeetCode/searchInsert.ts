/* 35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 */

function searchInsert(nums: number[], target: number): number {
    let start = 0;
  let end = nums.length - 1;

  if (target <= nums[0]) {
    return 0;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    start = nums[mid] < target ? mid + 1 : start;
    end = nums[mid] < target ? end : mid - 1;
  }

  return target > nums[end] && target < nums[start] ? end + 1 : nums.length;
}

console.log(searchInsert([1, 3, 5, 6], 4));

/* function searchInsert(nums: number[], target: number): number {
    if (target < nums[0]) {
        return 0;
    }
    let index = nums.findIndex((element, i) => element === target || nums[i + 1] > target)
    return index === -1 ? nums.length : (nums[index] === target ? index : index + 1);
}; */
