/* Use the reduce method in combination with the concat method to “flat-
ten” an array of arrays into a single array that has all the elements of
the original arrays.
*/

let array=[[14, 2, 33], [7,4], [99,23], [1], 2];

console.log(array);

let reducer = (a,b) => a.concat(b);
console.log(array.reduce(reducer));