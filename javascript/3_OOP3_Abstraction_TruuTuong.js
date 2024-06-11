"use strict";
//2. Create abstract class
class Tree {
    constructor(height) {
        this._height = height;
    }
    dropLeaf() {
        console.log("Tree is dropping leaf");
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
}
//3.1 Use Interface
class Tree1 {
    constructor(height) {
        this.height = height;
    }
    grow() {
        console.log("Tree1 is growing");
    }
    dropLeaf() {
        console.log("Tree1 is dropping leaf");
    }
}
// 3.2 Use Abstract class
class Tree2 extends Tree {
    constructor(height) {
        super(height);
    }
    grow() {
        console.log("Tree2 is growing");
    }
}
let tree1 = new Tree1(10);
tree1.grow();
tree1.dropLeaf();
console.log(tree1.height);
let tree2 = new Tree2(20);
tree2.grow();
tree2.dropLeaf();
console.log(tree2.height);
