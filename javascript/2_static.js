"use strict";
class MathUtilities {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
console.log(MathUtilities.add(5, 3)); // 8
console.log(MathUtilities.subtract(5, 3)); // 2
console.log(MathUtilities.multiply(5, 3)); // Error if not static
