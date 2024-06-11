"use strict";
class Animal {
    constructor(name, meal) {
        this.name = name;
        this.meal = meal;
    }
    sound() {
        console.log("Oink Oink");
    }
    cook() {
        console.log("Cooking pig");
    }
}
let animal1 = new Animal("animal1", "Fry Pork");
animal1.sound();
animal1.cook();
console.log(animal1.name);
console.log(animal1.meal);
