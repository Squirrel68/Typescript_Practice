"use strict";
// default parameter
function sum(a, b = 0) {
    return a + b;
}
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
// optional parameter
function sum2(a, b) {
    if (b) {
        return a + b;
    }
    return a;
}
console.log(sum2(1)); // 1
console.log(sum2(1, 2)); // 3
