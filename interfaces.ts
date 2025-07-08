interface Person {
  name: string;
  age: number;
  height?: number;
  hello: () => void;
}

const person: Person = {
  name: "naveen",
  age: 20,
  hello: function () {
    console.log(this.name + "says hi");
  },
};

person.hello();

interface Person1 {
  name: string;
  age: number;
  height?: number;
}

interface Employee {
  employeeId: number;
}

interface Manager extends Employee, Person1 {
  employees: Person1[];
}

// const worker: Employee = {
//   name: "Naveen",
//   age: 20,
//   employeeId: 10,
// };

// const manager: Manager = {

// }

function getPerson(p: Person1): Person1 {
  return {
    name: "Naveen",
    age: 20,
  };
}
