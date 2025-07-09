class Dog__ {
  static instanceCount: number = 0;
  name: string;
  constructor(name: string) {
    Dog__.instanceCount++;
    this.name = name;
  }
  static decreaseCount() {
    this.instanceCount--;
  }
}

const dog_1 = new Dog__("Tim"); // 1
console.log(Dog__.instanceCount);

const dog_2 = new Dog__("Joe"); // 2
console.log(Dog__.instanceCount);

Dog__.decreaseCount();
console.log(Dog__.instanceCount); // -1
