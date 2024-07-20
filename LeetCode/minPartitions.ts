/* 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n. */

function minPartitions(n: string): number {
  let maxValue = 0;
  for (var i = 0; i < n.length; i++) {
    if (n[i] === "9") {
      return 9;
    }
    if (maxValue < Number(n[i])) {
      maxValue = Number(n[i]);
    }
  }
  return maxValue;
}

/* function minPartitions(n: string): number {
  let maxValue = 0;
  for (var i = 0; i < n.length; i++) {
    maxValue = Math.max(maxValue, Number(n[i]));
  }
  return maxValue;
} */

console.log(minPartitions("27346209830709182346"));
