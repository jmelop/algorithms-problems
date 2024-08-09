/* 1365. How Many Numbers Are Smaller Than the Current Number
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of 
valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array. */

function smallerNumbersThanCurrent(nums: number[]): number[] {
  let elements: number[] = [];
  let i = 0;
  let z = 0;

  while (i < nums.length) {
    for (var x = 0; x < nums.length; x++) {
      if (nums[x] < nums[i]) {
        z++;
      }
    }
    elements.push(z);
    z = 0;
    i++;
  }
  return elements;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
