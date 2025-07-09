interface Animal_1 {
  speak(): void;
}

class Dog1 implements Animal_1 {
  private name: string;
  private color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
  speak(): void {
    console.log(`I am ${this.name} and I am ${this.color}`);
  }
  test() {
    return 1;
  }
}

class Cat1 implements Animal_1 {
  speak(): void {
    console.log("Meow");
  }
}
const dog1: Animal_1 = new Dog1("Rufas", "Brown");
const cat1 = new Cat1();
const animals: Animal_1[] = [cat1, dog1];
animals[0].speak;
dog1.speak();

function makeSound1(animal: Animal_1) {
  animal.speak();
}

makeSound1(cat1);
