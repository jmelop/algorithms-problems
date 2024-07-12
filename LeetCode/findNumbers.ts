/* 1295. Find Numbers with Even Number of Digits
Given an array nums of integers, return how many of them contain an even number of digits. */

function findNumbers(nums: number[]): number {
    let counter = 0;
    for(let element of nums) {
        if(element.toString().length % 2 == 0) {
            counter++;
        }
    }
    return counter;
}

console.log(findNumbers([12,345,2,6,7896]));
