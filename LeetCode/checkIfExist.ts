/* 1346. Check If N and Its Double Exist
Given an array arr of integers, check if there exist two indices i and j such that:

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j] */

function checkIfExist(arr: number[]): boolean {
  for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr.length; x++) {
      if (arr[i] === arr[x] * 2 && i !== x) {
        return true;
      }
    }
  }
  return false;
}

console.log(checkIfExist([10, 2, 5, 3]));
