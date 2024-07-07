/* 2011. Final Value of Variable After Performing Operations
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations. */
/**

/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations: string[]): number {
    let x = 0;
  for (let operation of operations) {
    if (operation === "++X" || operation === "X++") {
      x += 1;
    } else {
      x -= 1;
    }
  }
  return x;
};

console.log(finalValueAfterOperations(["++X","++X","X++"]));
