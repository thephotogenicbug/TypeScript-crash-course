// literals
let direction: "north" | "south" | "east" | "west";

direction = "north";

let responseCode: 200 | 400 | 500;
responseCode = 200;

// enums
enum Size {
  Smallest = 1,
  Small,
  Medium,
  Large,
}

var size: Size = Size.Smallest;

if (size === Size.Smallest) {
  // return something
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

var value: Direction;

enum Description {
  SmallText = "this is small sub text to",
}

console.log(Description.SmallText);
