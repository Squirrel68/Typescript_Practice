interface IAnimal {
  readonly name: string;
  sound(): void;
}

interface IFood {
  readonly meal: string;
  cook(): void;
}

class Animal implements IAnimal, IFood {
  name: string;
  meal: string;
  constructor(name: string, meal: string) {
    this.name = name;
    this.meal = meal;
  }
  sound(): void {
    console.log("Oink Oink");
  }
  cook(): void {
    console.log("Cooking pig");
  }
}

let animal1 = new Animal("animal1", "Fry Pork");
animal1.sound();
animal1.cook();
console.log(animal1.name);
console.log(animal1.meal);
