"use strict";
class MyMath {
    constructor(a, b) {
        this.operand1 = a;
        this.operand2 = b;
    }
    static add(a, b) {
        return a + b;
    }
    // Overload
    static add(a, b) {
        return a + b;
    }
    printOut() {
        console.log("Iam DAD");
    }
}
class Child extends MyMath {
    // Override
    printOut() {
        console.log("Hi DAD, Iam CHILD");
    }
}
console.log(MyMath.add(2, 1));
console.log(MyMath.add("2", "1"));
let dad = new MyMath(1, 2);
let child = new Child(1, 2);
dad.printOut();
child.printOut();
dad.printOut();
