/* 4. Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)). */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let map: number[] = [];

  for (var i = 0; i < nums1.length; i++) {
    map.push(nums1[i]);
  }

  for (var i = 0; i < nums2.length; i++) {
    map.push(nums2[i]);
  }

  map.sort();

  const middle = Math.floor(map.length / 2);

  if (map.length % 2 !== 0) {
    return map[middle];
  } else {
    return (map[middle - 1] + map[middle]) / 2;
  }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
