"use strict";
// Generic: Chung chung
// 1. Generic Function: hàm generic có thể hoạt động với nhiều kiểu dữ liệu khác nhau
function printOut(arg) {
    return arg;
}
console.log(printOut(5)); // 5
console.log(printOut("hello")); // "hello"
console.log(printOut(true)); // true
console.log(printOut([1, 2, 3])); // [1, 2, 3]
// 2. Generic Class: lớp generic có thể hoạt động với nhiều kiểu dữ liệu khác nhau
class GenericClass {
    constructor(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
}
let genericClass1 = new GenericClass(5);
console.log(genericClass1.getValue()); // 5
let genericClass2 = new GenericClass("hello");
console.log(genericClass2.getValue()); // "hello"
const numberKeyValuePair = {
    key: 1,
    value: "one",
};
const stringKeyValuePair = {
    key: "isAvailable",
    value: true,
};
console.log(numberKeyValuePair); // { key: 1, value: "one" }
console.log(stringKeyValuePair); // { key: "isAvailable", value: true }
