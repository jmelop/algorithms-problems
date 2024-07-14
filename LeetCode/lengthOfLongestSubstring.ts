/* 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters. */

var lengthOfLongestSubstring = function (s: string): number {
  let map1 = new Map();
  let left = 0;
  let counterMax = 0;

  for (let i = 0; i < s.length; i++) {
    if (map1.has(s[i])) {
      left = Math.max(map1.get(s[i]) + 1, left);
    }
    map1.set(s[i], i);
    counterMax = Math.max(counterMax, i - left + 1);
  }

  return counterMax;
};

console.log(lengthOfLongestSubstring("dvdf"));
