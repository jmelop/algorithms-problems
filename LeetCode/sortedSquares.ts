/* 977. Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. */

function sortedSquares(nums: number[]): number[] {
  const arr: number[] = [];
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let i = nums.length - 1;
  while (leftPointer <= rightPointer) {
    const leftValue = nums[leftPointer] ** 2;
    const rightValue = nums[rightPointer] ** 2;
    if (leftValue > rightValue) {
      arr[i--] = leftValue;
      leftPointer++;
    } else {
      arr[i--] = rightValue;
      rightPointer--;
    }
  }

  return arr;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
