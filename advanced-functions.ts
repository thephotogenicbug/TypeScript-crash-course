// rest parameters
function sum(...numbers: number[]) {}
sum(1, 2, 3, 4);
sum();
sum(5, 6, 7, 8, 90, 4, 4, 6, 7);

// overloading functions
function getItemLength(name: string): number;
function getItemLength(names: string[]): string;

function getItemLength(nameOrNames: unknown): unknown {
  if (typeof nameOrNames === "string") {
    return nameOrNames.length;
  } else if (Array.isArray(nameOrNames)) {
    return "hello world";
  }
  return 0;
}

getItemLength("");
getItemLength(["", ""]);
