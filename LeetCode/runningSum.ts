/* 1480. Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums. */

function runningSum(nums: number[]): number[] {
    for (var i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
};

console.log(runningSum([3,1,2,10,1]));
