/* 9. Palindrome Number
Given an integer x, return true if x is a palindrome, and false otherwise.
 */

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  const value = x.toString();
  const reverseValue = value.split("").reverse().join("");

  return reverseValue === value;
};

console.log(isPalindrome(6));
