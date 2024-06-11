//1. Create Interface
interface ITree {
  height: number;
  grow(): void;
  dropLeaf(): void;
}

//2. Create abstract class
abstract class Tree {
  private _height: number;
  constructor(height: number) {
    this._height = height;
  }
  abstract grow(): void;
  public dropLeaf(): void {
    console.log("Tree is dropping leaf");
  }
  get height(): number {
    return this._height;
  }
  set height(value: number) {
    this._height = value;
  }
}

//3.1 Use Interface
class Tree1 implements ITree {
  height: number;
  constructor(height: number) {
    this.height = height;
  }
  grow(): void {
    console.log("Tree1 is growing");
  }
  dropLeaf(): void {
    console.log("Tree1 is dropping leaf");
  }
}

// 3.2 Use Abstract class
class Tree2 extends Tree {
  constructor(height: number) {
    super(height);
  }
  grow(): void {
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
