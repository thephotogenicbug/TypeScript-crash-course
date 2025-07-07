const array_1 = [{ name: "tim" }, { name: "joe" }, { name: "jane" }];
const array_2 = [[{ name: "tim" }]];

const element = array_1.pop()?.name; // removes / returns the last element of an array
const element_1 = array_2.pop()?.pop()?.name;
const element_2 = array_2.pop()!.pop()!.name; // bang 
