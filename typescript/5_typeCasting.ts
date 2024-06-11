// 1. ép kiểu ngầm định trong TypeScript:
let x: number = 5;
let y: string = "Hello";
y = x; // TypeScript tự động chuyển đổi kiểu number sang kiểu string
console.log(y); // 5
console.log(typeof y); // number

//2. Ép kiểu tường minh (Explicit Type Casting)

let x1: number = 5;
let y1: string = "Hello";
y1 = <string>x1; // <kiểu-dữ-liệu>biến
console.log(y1); // 5
console.log(typeof y1); // string

let x2: number = 5;
let y2: string = "Hello";
y2 = x2 as string; //  biến as kiểu-dữ-liệu
console.log(y2); // 5
console.log(typeof y2); // string
