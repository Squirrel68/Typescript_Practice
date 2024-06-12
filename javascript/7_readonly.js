"use strict";
// interface ICar {
//   readonly carName: string;
// }
class Car {
    constructor(carName) {
        this.carName = carName;
    }
}
let car = new Car("BMW");
car.carName = "Audi";
console.log(car);
