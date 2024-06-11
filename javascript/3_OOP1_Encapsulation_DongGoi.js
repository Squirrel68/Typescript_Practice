"use strict";
// Encapsulation : Đóng gói
class Staff {
    constructor(fullname, age, address, posion) {
        this.fullname = fullname;
        this.age = age;
        this.address = address;
        this.position = posion;
    }
    getFullname() {
        return this.fullname;
    }
    setFullname(fullname) {
        this.fullname = fullname;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
}
class Intern extends Staff {
    constructor(fullname, age, address, position) {
        super(fullname, age, address, position);
    }
    printInfoIntern() {
        console.log("----- Intern Information -----");
        console.log(`Address: ${this.address}, Position: ${this.position}`);
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
