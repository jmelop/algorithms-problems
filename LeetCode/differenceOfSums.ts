/* 2894. Divisible and Non-divisible Sums Difference
You are given positive integers n and m.

Define two integers, num1 and num2, as follows:

num1: The sum of all integers in the range [1, n] that are not divisible by m.
num2: The sum of all integers in the range [1, n] that are divisible by m.
Return the integer num1 - num2. */

function differenceOfSums(n: number, m: number): number {
  let x = 0;
  let y = 0;
  for (var i = 0; i < n + 1; i++) {
    i % m === 0 ? (x += i) : (y += i);
  }
  return y - x;
};

console.log(differenceOfSums(5, 1));
