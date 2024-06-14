var _name: string = "Anh Tú";
var age: number = 22;
var gender: boolean = true;
var hobbies: Array<string> = ["Coding", "Reading", "Traveling"];
// 1. any & unknown & never
var fruits: Array<any> = ["Apple", 1, true];

let unknownType: unknown = "Hello";
console.log(unknownType);
unknownType = <number>unknownType + 1;
console.log(unknownType);

// let neverType: never = (() => {
//   throw new Error("Error");
// })();

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

// 4. Union type (|) : kiểu dữ liệu có thể là kiểu này hoặc kiểu kia
let id: string | number;
id = "123";
id = 123;
// union with class
interface Dog {
  name: string;
  bark_go_go(): void;
}
interface Cat {
  name: string;
  meow_meow(): void;
}
let pet: Dog | Cat;

// 5. Interception type (&) : kiểu dữ liệu phải thỏa mãn tất cả các kiểu
// 5.1. acronyms(viet tat)
let chimera: Dog & Cat = {
  name: "ChimeraCreateByTwoInterface",
  bark_go_go() {
    console.log("Go go");
  },
  meow_meow() {
    console.log("Meow meow");
  },
};
console.log(chimera);

// 5.2. viet day du
type DogCat = Dog & Cat;
let chimera2: DogCat = {
  name: "ChimeraCreateByNewType",
  bark_go_go() {
    console.log("Go go");
  },
  meow_meow() {
    console.log("Meow meow");
  },
};
console.log(chimera2);

// 6. alias: định nghĩa kiểu dữ liệu mới
type StringOrNumber = string | number;
let studentId: StringOrNumber;
studentId = "123";
studentId = 123;

// 7. void : không có kiểu dữ liệu trả về
function sayHello(): void {
  console.log("Hello");
}
sayHello();
