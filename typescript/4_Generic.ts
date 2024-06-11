// Generic: Chung chung
// 1. Generic Function: hàm generic có thể hoạt động với nhiều kiểu dữ liệu khác nhau

function printOut<T>(arg: T): T {
  return arg;
}

console.log(printOut<number>(5)); // 5
console.log(printOut<string>("hello")); // "hello"
console.log(printOut<boolean>(true)); // true
console.log(printOut<number[]>([1, 2, 3])); // [1, 2, 3]

// 2. Generic Class: lớp generic có thể hoạt động với nhiều kiểu dữ liệu khác nhau
class GenericClass<T> {
  private _value: T;
  constructor(value: T) {
    this._value = value;
  }
  getValue(): T {
    return this._value;
  }
}

let genericClass1 = new GenericClass<number>(5);
console.log(genericClass1.getValue()); // 5

let genericClass2 = new GenericClass<string>("hello");
console.log(genericClass2.getValue()); // "hello"

// 3. Generic Interface: interface generic có thể hoạt động với nhiều kiểu dữ liệu khác nhau
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const numberKeyValuePair: KeyValuePair<number, string> = {
  key: 1,
  value: "one",
};

const stringKeyValuePair: KeyValuePair<string, boolean> = {
  key: "isAvailable",
  value: true,
};

console.log(numberKeyValuePair); // { key: 1, value: "one" }
console.log(stringKeyValuePair); // { key: "isAvailable", value: true }
