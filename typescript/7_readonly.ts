// interface ICar {
//   readonly carName: string;
// }

class Car {
  readonly carName: string;
  constructor(carName: string) {
    this.carName = carName;
  }
}
let car = new Car("BMW");
car.carName = "Audi";
console.log(car);
