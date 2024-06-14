"use strict";
const awaitedValue = "Hello";
console.log(awaitedValue); // => Hello
console.log(typeof awaitedValue); // => string
let todo = {};
todo.title = "Hello";
console.log(todo);
// => { title: 'Hello' }
// 2. Required<Type>: Make all properties in T required
let todo2 = {
    title: "Hello",
    description: "World",
};
console.log(todo2);
// 3. Readonly<Type>: Make all properties in T readonly
let todo3 = {
    title: "Hello",
    description: "World",
};
// todo3.title = "Hi"; // Error: Cannot assign to 'title' because it is a read-only property
console.log(todo3);
// 4. Record<Keys, Type>: a shortcut to defining an object type with a specific key type and value type.
const users = {
    user1: { name: "John" },
    user2: { name: "Jane" },
};
console.log(users);
let UserWithoutEmail = {
    name: "John",
    email: "abc@g.com",
    // age: 20, // Error: 'age' does not exist in type 'Omit<User, "age">'
};
console.log(UserWithoutEmail);
// 5.2. Pick<Type, Keys>: picks keys from an object type.
let UserWithAge = {
    age: 20,
    // name: "John", // Error: 'name' does not exist in type 'Pick<User, "age">'
};
console.log(UserWithAge);
const value = true; // a string cannot be used here since Exclude removed it from the type.
console.log(value);
const point = { x: 10, y: 20 };
console.log(point);
const point2 = [10, 20];
console.log(point2);
