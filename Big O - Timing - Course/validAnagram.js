/* Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed 
by rearranging the letters of another, such as cinema, formed from iceman.
*/

var arrayPermutation = function (str1, str2) {
  const counter = {};
  if (str1.length !== str2.length) {
    return false;
  }

  for (const element of str1) {
    counter[element] = (counter[element] || 0) + 1;
  }

  for (const element of str2) {
    if (!counter[element]) {
      return false;
    }
    counter[element]--;
  }
  return true;
};

console.log(validAnagram("anagram", "nagaram"));
