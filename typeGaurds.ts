// typeof
// instanceof
// in

type StringOrNumber1 = string | number;

function add1(value: StringOrNumber1): StringOrNumber1 {
  if (typeof value === "string") {
    return value + "1";
  } else {
    return value + 1;
  }
}

// example
class Dog1_ {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Cat1_ {
  firstName: string;
  constructor(firstName: string) {
    this.firstName = firstName;
  }
}

function getName(animal: Cat1_ | Dog1_) {
  if (animal instanceof Cat1_) {
    console.log("The name is ", animal.firstName);
  } else {
    console.log("The name is", animal.firstName + " " + animal.lastName);
  }
}

function getName1(animal: Cat1_ | Dog1_) {
  if ("lastName" in animal) {
    console.log("The name is", animal.firstName + " " + animal.lastName);
  } else {
    console.log("The name is ", animal.firstName);
  }
}

// custom type
function isDog(pet: Dog1_ | Cat1_): pet is Dog1_ {
  return (pet as Dog1_).lastName !== undefined;
}

function getName2(animal: Cat1_ | Dog1_) {
  if (isDog(animal)) {
    console.log("The name is", animal.firstName + " " + animal.lastName);
  } else {
    console.log("The name is ", animal.firstName);
  }
}
