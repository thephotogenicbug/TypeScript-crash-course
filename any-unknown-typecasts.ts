// any Type
let anyType: any = 1;

// unknown Type
let unknownType: unknown = 1;

if (typeof unknownType == "number") {
  const result = unknownType + 1;
} else if (typeof unknownType === "string") {
  const result = unknownType.length;
}

// Typecast
const r = (unknownType as string) + "hello";
const r1 = (unknownType as number[][])[1][0];

// example using any
function processFeedback(input: any): void {
  console.log(`Processing: ${input}`);
}
// this can be a string, number, file, etc.
processFeedback("Great service!");
processFeedback(5);
processFeedback(new Blob());

// example using unknown
function processFeedback1(input: unknown): void {
  if (typeof input === "string") {
    console.log(`Processing text: ${input}`);
  } else if (typeof input === "number") {
    console.log(`Processing rating: ${input}`);
  } else if (input instanceof Blob) {
    console.log(`Processing file:`);
  } else {
    console.log(`Unsupported type of input`);
  }
}

// This ensures that operations are safe and based on the actual type of input
processFeedback1("Great service!");
processFeedback1(5);
processFeedback1(new Blob());
processFeedback1([1, 2, 3]);
