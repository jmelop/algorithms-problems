/* 1672. Richest Customer Wealth
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth. */

function maximumWealth(accounts: number[][]): number {
    let sum: number[] = [];
    for (var i = 0; i < accounts.length; i++) {
        sum.push(accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    }
    return Math.max.apply(null, sum);
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
