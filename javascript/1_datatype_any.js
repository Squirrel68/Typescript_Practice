"use strict";
var _name = "Anh Tú";
var age = 22;
var gender = true;
var hobbies = ["Coding", "Reading", "Traveling"];
// 1. any
var fruits = ["Apple", 1, true];
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
// 4. Union
let id;
id = "123";
id = 123;
let studentId;
studentId = "123";
studentId = 123;
// 6. void : không có kiểu dữ liệu trả về
function sayHello() {
    console.log("Hello");
}
sayHello();
