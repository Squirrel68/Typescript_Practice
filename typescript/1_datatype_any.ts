var _name: string = "Anh Tú";
var age: number = 22;
var gender: boolean = true;
var hobbies: Array<string> = ["Coding", "Reading", "Traveling"];
var fruits: Array<any> = ["Apple", 1, true];

var person: object = {
  name: _name,
  age: age,
};

enum Rank {
  Kha,
  Gioi,
  Yeu,
  TrungBinh,
}

console.log(_name, age);
console.log(person);
console.log(Rank);
console.log(fruits);
