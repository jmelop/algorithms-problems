/* Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/

function sameFrequency(n, x) {
  const firstElement = n.toString();
  const secondElement = x.toString();

  const map1 = new Map();
  const map2 = new Map();

  if (firstElement.length !== secondElement.length) {
    return false;
  }

  for (let element of firstElement) {
    map1.set(element, (map1.get(element) || 0) + 1);
  }

  for (let element of secondElement) {
    map2.set(element, (map2.get(element) || 0) + 1);
  }

  for (let [key, value] of map1) {
    if (map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
