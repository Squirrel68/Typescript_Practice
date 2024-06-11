"use strict";
var _name = "Anh Tú";
var age = 22;
var gender = true;
var hobbies = ["Coding", "Reading", "Traveling"];
var fruits = ["Apple", 1, true];
var person = {
    name: _name,
    age: age,
};
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
