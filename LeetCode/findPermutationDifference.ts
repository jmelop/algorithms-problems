/* 3146. Permutation Difference between Two Strings
You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the 
index of the occurrence of the same character in t.

Return the permutation difference between s and t. */

function findPermutationDifference(s: string, t: string): number {
  let finalValue = 0;
  for (var i = 0; i < s.length; i++) {
    const x = t.indexOf(s[i]);
    if (i < x) {
      finalValue += x - i;
    } else {
      finalValue += i - x;
    }
  }
  return finalValue;
}

console.log(findPermutationDifference("abcde", "edbac"));
