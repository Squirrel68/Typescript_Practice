// Encapsulation : Đóng gói

class Staff {
  private fullname: string;
  private age: number;
  protected address: string;
  public position: string;

  constructor(fullname: string, age: number, address: string, posion: string) {
    this.fullname = fullname;
    this.age = age;
    this.address = address;
    this.position = posion;
  }

  public getFullname(): string {
    return this.fullname;
  }

  public setFullname(fullname: string): void {
    this.fullname = fullname;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }
}

class Intern extends Staff {
  constructor(
    fullname: string,
    age: number,
    address: string,
    position: string
  ) {
    super(fullname, age, address, position);
  }
  printInfoIntern(): void {
    console.log("----- Intern Information -----");
    console.log(`Address: ${this.address}, Position: ${this.position}`); // address is protected property, position is public property, so we can access them directly
    console.log(`Fullname: ${this.getFullname()}, Age: ${this.getAge()}`);
  }
}
let staff = new Staff("Nguyen Van A", 20, "Ha Noi", "Developer");
console.log(staff.getFullname());
console.log(staff.getAge());
console.log(staff.getAddress());
console.log(staff.position); // public property

let intern = new Intern("Nguyen Van B", 21, "Ha Noi", "Intern");
intern.printInfoIntern();
