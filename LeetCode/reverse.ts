/* 7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range 
[-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned). */

function reverse(x: number): number {
  let reverseNumber: string = "";
  let convertedNumber: string = x.toString();
  const maxValue: number = Math.pow(2, 31) - 1;

  for (var i = convertedNumber.length; i >= 0; i--) {
    if (Number(convertedNumber[i]) || Number(convertedNumber[i]) === 0) {
      reverseNumber = reverseNumber + convertedNumber[i];
    }
  }

  if (Number(reverseNumber) > maxValue) {
    return 0;
  }

  return x < 0 ? Number("-" + reverseNumber) : Number(reverseNumber);
}

console.log(reverse(901000));
