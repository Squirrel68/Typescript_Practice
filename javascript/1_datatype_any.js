"use strict";
var _name = "Anh Tú";
var age = 22;
var gender = true;
var hobbies = ["Coding", "Reading", "Traveling"];
// 1. any & unknown & never
var fruits = ["Apple", 1, true];
let unknownType = "Hello";
console.log(unknownType);
unknownType = unknownType + 1;
console.log(unknownType);
// let neverType: never = (() => {
//   throw new Error("Error");
// })();
var person = {
    name: _name,
    age: age,
};
// 2. Enum
var Rank;
(function (Rank) {
    Rank[Rank["Kha"] = 0] = "Kha";
    Rank[Rank["Gioi"] = 1] = "Gioi";
    Rank[Rank["Yeu"] = 2] = "Yeu";
    Rank[Rank["TrungBinh"] = 3] = "TrungBinh";
})(Rank || (Rank = {}));
console.log(_name, age);
console.log(person);
console.log(Rank);
console.log(fruits);
// 3. Tuple
let student;
student = ["Anh Tú", 22, true];
console.log(student);
// 4. Union type (|) : kiểu dữ liệu có thể là kiểu này hoặc kiểu kia
let id;
id = "123";
id = 123;
let pet;
// 5. Interception type (&) : kiểu dữ liệu phải thỏa mãn tất cả các kiểu
// 5.1. acronyms(viet tat)
let chimera = {
    name: "ChimeraCreateByTwoInterface",
    bark_go_go() {
        console.log("Go go");
    },
    meow_meow() {
        console.log("Meow meow");
    },
};
console.log(chimera);
let chimera2 = {
    name: "ChimeraCreateByNewType",
    bark_go_go() {
        console.log("Go go");
    },
    meow_meow() {
        console.log("Meow meow");
    },
};
console.log(chimera2);
let studentId;
studentId = "123";
studentId = 123;
// 7. void : không có kiểu dữ liệu trả về
function sayHello() {
    console.log("Hello");
}
sayHello();
