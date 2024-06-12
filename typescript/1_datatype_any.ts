var _name: string = "Anh Tú";
var age: number = 22;
var gender: boolean = true;
var hobbies: Array<string> = ["Coding", "Reading", "Traveling"];
// 1. any
var fruits: Array<any> = ["Apple", 1, true];

var person: object = {
  name: _name,
  age: age,
};
// 2. Enum
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

// 3. Tuple
let student: [string, number, boolean];
student = ["Anh Tú", 22, true];
console.log(student);
// 4. Union
let id: string | number;
id = "123";
id = 123;

// 5. alias
type StringOrNumber = string | number;
let studentId: StringOrNumber;
studentId = "123";
studentId = 123;

// 6. void : không có kiểu dữ liệu trả về
function sayHello(): void {
  console.log("Hello");
}
sayHello();
