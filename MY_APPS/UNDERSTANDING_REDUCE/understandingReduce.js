let array = [4, 6, 2, 8, 9, 0];

let reducer1 = (a, b) => a < b ? b : a;
let reducer2 = (a, b) => a + b;

console.log(array);
console.log(array.reduce(reducer1, array[0]));
console.log(array.reduce(reducer1));
console.log(array.reduce(reducer2, 0));
console.log(array.reduce(reducer2));
console.log("The avg of the array is: " + array.reduce(reducer2) / array.length);