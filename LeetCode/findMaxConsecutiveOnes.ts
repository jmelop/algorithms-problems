/* 485. Max Consecutive Ones
Given a binary array nums, return the maximum number of consecutive 1's in the array. */

var findMaxConsecutiveOnes = function (nums: number[]): number {
  let maxConsec = 0;
  let consec = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      consec += 1;
      maxConsec = Math.max(maxConsec, consec);
    } else {
      consec = 0;
    }
  }

  return maxConsec;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
