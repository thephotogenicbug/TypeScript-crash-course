class Person_1 {
  //   private name: string;
  //   public name: string;
  protected name: string;
  constructor(name: string) {
    this.name = name;
    this.greet();
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  // getter
  getName() {
    return this.name;
  }
  // setter
  setName(name: string) {
    return (this.name = name);
  }
}

const p1 = new Person_1("Naveen");

class Employee__ extends Person_1 {
  callMe() {
    console.log(this.name);
  }
}

// abstract class - base class
abstract class Animal {
  abstract makeSound(duration: number): void;
  move(duration: number) {
    console.log("Moving along...");
    this.makeSound(duration);
  }
}

class Dog extends Animal {
  makeSound(duration: number): void {
    console.log("Woof Woof");
  }
}

class Cat extends Animal {
  makeSound(duration: number): void {
    console.log("Meow Meow");
  }
}

const dog = new Dog();
dog.move(10);
