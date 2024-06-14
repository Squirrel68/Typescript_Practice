// Decorator in TypeScript

// 1. Class Decorator
console.log("1. CLASS DECORATOR");
function logCreate(additionalParam) {
  return function actualDecorator(Class) {
    return function (...args) {
      console.log(
        "Object created with args: ",
        args,
        "; and receive another params: ",
        additionalParam
      );
      return new Class(...args);
    };
  };
}

@logCreate("custom")
class Animal {
  constructor(footCount) {}
}

const dog = new Animal(4);
// => Object created with args: 4; and receive another params: custom

// 2. Method Decorator
console.log("2. METHOD DECORATOR");
function logDecorator(target: any, key: string, descriptor: any) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      console.log('start my job');
      return originalMethod.apply(this, args);
    }
  
    return descriptor;
  }
  
  ///////////////
  
  @logDecorator
  function doBusinessJob(arg) {
    console.log('do my job');
  }
  
  doBusinessJob();
  // start my job
  // do my job

// 3. Accessor Decorator
console.log("3. ACCESSOR DECORATOR");
class Demo {
    private _name: string;
  
    @modify
    get name(): string {
      return `先生 ${this._name}`;
    }
  }

  
// 4. Property Decorator
console.log("4. PROPERTY DECORATOR");

// 5. Parameter Decorator
console.log("5. PARAMETER DECORATOR");
  
// 6. Apply multiple decorators
console.log("6. APPLY MULTIPLE DECORATORS");
function deco1() {
    console.log("deco1(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("deco1(): called");
    }
}

function deco2() {
    console.log("deco2(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("deco2(): called");
    }
}

class C {
    @deco1()
    @deco2()
    method() {}
}

// 7. Metadata Reflection: 
