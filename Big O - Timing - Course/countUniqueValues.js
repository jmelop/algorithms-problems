/* Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in 
the array, but it will always be sorted.
*/

function countUniqueValues(n) {
  const map1 = new Map();
  for (var i = 0; i < n.length; i++) {
    map1.set(n[i], true);
  }
  return map1.size;
}

console.log(countUniqueValues([-2,-1,-1,0,1]));
