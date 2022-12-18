/*
Implement every as a function that takes an array and a predicate
function as parameters. Write two versions, one using a loop and one
using the some method.
*/

function every(array, func) {
	for (let element of array) {
		if (!func(element)) {
			return false;
		}
	}
	return true;
}

function every2(array, func){
	return (!array.some(element => !func(element)));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([1, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log("");

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([1, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true