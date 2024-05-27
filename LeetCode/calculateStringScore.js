/* 3110. Score of a String
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
Return the score of s.

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let x = 0;

  for (var i = 0; i < s.length - 1; i++) {
    x += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
  }

  return x;
};

scoreOfString("hello");
