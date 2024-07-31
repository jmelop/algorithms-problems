/* 2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

var addTwoNumbers = function (l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const list: ListNode = new ListNode(0);
  let current: ListNode = list;
  let carry: number = 0;

  while (l1 !== null || l2 !== null) {
    const x: number = l1 ? l1.val : 0;
    const y: number = l2 ? l2.val : 0;
    const sum: number = x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return list.next;
};
