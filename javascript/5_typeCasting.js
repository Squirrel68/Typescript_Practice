"use strict";
// 1. ép kiểu ngầm định trong TypeScript:
let x = 5;
let y = "Hello";
y = x; // TypeScript tự động chuyển đổi kiểu number sang kiểu string
console.log(y); // 5
console.log(typeof y); // number
//2. Ép kiểu tường minh (Explicit Type Casting)
let x1 = 5;
let y1 = "Hello";
y1 = x1; // <kiểu-dữ-liệu>biến
console.log(y1); // 5
console.log(typeof y1); // string
let x2 = 5;
let y2 = "Hello";
y2 = x2; //  biến as kiểu-dữ-liệu
console.log(y2); // 5
console.log(typeof y2); // string
