//0. Awaited<Type>: Wait for the Promise<T> to resolve and return the resolved type.
type PromiseType = Promise<string>;
type AwaitedType = Awaited<PromiseType>;
const awaitedValue: AwaitedType = "Hello";
console.log(awaitedValue); // => Hello
console.log(typeof awaitedValue); // => string

// 1. Partial<Type>: Make all properties in T optional
interface Todo {
  title: string;
  description: string;
}

let todo: Partial<Todo> = {};
todo.title = "Hello";
console.log(todo);
// => { title: 'Hello' }

// 2. Required<Type>: Make all properties in T required
let todo2: Required<Todo> = {
  title: "Hello",
  description: "World",
};
console.log(todo2);

// 3. Readonly<Type>: Make all properties in T readonly
let todo3: Readonly<Todo> = {
  title: "Hello",
  description: "World",
};
// todo3.title = "Hi"; // Error: Cannot assign to 'title' because it is a read-only property
console.log(todo3);

// 4. Record<Keys, Type>: a shortcut to defining an object type with a specific key type and value type.
const users: Record<string, { name: string }> = {
  user1: { name: "John" },
  user2: { name: "Jane" },
};
console.log(users);

// 5. Omit<Type, Keys>: removes keys from an object type.
interface User {
  name: string;
  age: number;
  email: string;
}

let UserWithoutEmail: Omit<User, "age"> = {
  name: "John",
  email: "abc@g.com",
  // age: 20, // Error: 'age' does not exist in type 'Omit<User, "age">'
};
console.log(UserWithoutEmail);

// 5.2. Pick<Type, Keys>: picks keys from an object type.
let UserWithAge: Pick<User, "age"> = {
  age: 20,
  // name: "John", // Error: 'name' does not exist in type 'Pick<User, "age">'
};
console.log(UserWithAge);

// 6. Exclude<UnionType, ExcludedMembers>
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
console.log(value);

// 7. ReturnType<Type>: Extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = { x: 10, y: 20 };
console.log(point);

// 7.2 Parameters<Type>: Extracts the parameters of a function type.
type PointGenerator2 = (x: number, y: number) => void;
const point2: Parameters<PointGenerator2> = [10, 20];
console.log(point2);
