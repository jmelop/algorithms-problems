/* 28. Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. */

function strStr(haystack: string, needle: string): number {
  for (var i = 0; i < haystack.length; i++) {
    const substring = haystack.substring(i, i + needle.length);
    if (substring === needle) {
      return i;
    }
  }
  return -1;
}

// Built-in function
/* function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
}; */

console.log(strStr("sadbutsad", "sad"));
