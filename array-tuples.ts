// arrays
var arr: number[] = [1, 2, 3, 4, 5];
var arr1: string[] = ["naveen", "kumar"];
var arr2: string[][] = [["naveen"], ["kumar"], []]; // nested array
arr2[0].length;
var arr3: number[] = [];

// tuples
// coordinate pair x,y
const coord: [number, string, number, number] = [1, "2", 3, 4];
console.log(coord[1]);

const coord1: [number, number][] =[
    [1,2],
    [-1,3]
]
coord1[0][1]