/* 412. Fizz Buzz
Given an integer n, return a string array answer (1-indexed) */

function fizzBuzz(n: number): string[] {
    let i = 1;
    let arr: string[] = [];
    while (i <= n) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            arr.push("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            arr.push(i.toString());
        }
        i++;
    }
    return arr;
};

console.log(fizzBuzz(15));
