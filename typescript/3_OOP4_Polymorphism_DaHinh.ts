class MyMath {
  private operand1;
  private operand2;
  constructor(a: number, b: number) {
    this.operand1 = a;
    this.operand2 = b;
  }
  static add(a: number, b: number): number {
    return a + b;
  }
  // Overload
  static add(a: string, b: string): string {
    return a + b;
  }
  public printOut(): void {
    console.log("Iam DAD");
  }
}
class Child extends MyMath {
  // Override
  public printOut(): void {
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
