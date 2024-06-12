// default parameter
function sum(a: number, b: number = 0) {
  return a + b;
}

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3

// optional parameter
function sum2(a: number, b?: number) {
  if (b) {
    return a + b;
  }
  return a;
}

console.log(sum2(1)); // 1
console.log(sum2(1, 2)); // 3
