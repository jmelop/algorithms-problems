/* 1342. Number of Steps to Reduce a Number to Zero
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it. */

function numberOfSteps(num: number): number {
  let i = 0;
  while (num > 0) {
      num & 1 ? (num = num - 1) : (num = num / 2);
      i++;
  }
  return i;
};

console.log(numberOfSteps(123));
