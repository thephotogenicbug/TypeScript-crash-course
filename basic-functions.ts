function add(x: number, y: number): number | string {
  if (x === 0) {
    return "invalid";
  }
  return x + y;
}

function makeName(firstName: string, lastName: string, middleName?: string) {
  if (middleName) return firstName + " " + middleName + " " + lastName;
  return firstName + " " + lastName;
}

function callFunc(
  func: (firstName: string, lastName: string, middleName?: string) => string,
  param1: string,
  param2: string
) {
  func(param1, param2);
}

function multiply(x: number, y: number): number {
  return x * y;
}

function div(x: number, y: number): number {
  return x / y;
}

function applyFunc(
  funcs: ((a: number, b: number) => number)[],
  values: [number, number][]
): number[] {
  const results = [] as number[];
  for (let i = 0; i < funcs.length; i++) {
    const args = values[i];
    const result = funcs[i](args[0], args[1]);
    results.push(result);
  }
  return results;
}

applyFunc(
  [multiply, div],
  [
    [1, 2],
    [4, 5],
  ]
);

const result_1 = add(1, 2);
const fullName = makeName("Naveen", "Kumar");
callFunc(makeName, "Naveen", "Kumar");
