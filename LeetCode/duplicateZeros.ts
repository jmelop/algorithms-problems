/* 1089. Duplicate Zeros
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything. */

function duplicateZeros(arr: number[]): void {
    let length = arr.length;
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
          arr.splice(i, 0, 0)
          i++;
      }
    }
    arr.length = length;
  };

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
