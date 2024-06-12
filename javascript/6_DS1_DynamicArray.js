"use strict";
// Dynamic Array
const nums = [];
// write/update - O(1)
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;
nums.push(4);
nums.push(5);
// O(n)
nums.unshift(0); // insert at the beginning
nums.unshift(-1); // [-1, 0, 1, 2, 3, 4, 5]
// Delete - O(n)
nums.slice(2, 1);
console.log(nums); // [-1, 0, 2, 3, 4, 5]
// Can use Dynamic array to implement Stack and Queue
