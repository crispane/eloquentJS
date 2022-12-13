/*
	Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
	Also write a listToArray function that produces an array from a list. Then add a helper function prepend, 
	which takes an element and a list and creates a new list that adds the element to the front of the input list, 
	and nth, which takes a list and a number and returns the element  at the given position in the list 
	(with zero referring to the first element) or undefined when there is no such element.
*/


let arrayToList = array => {
	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {
		list = { value: array[i], rest: list };
	}
	return list;
};

function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

function prepend(value, list) {
	return { value, rest: list };
}

function nth(list, n) {
	if (!list) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n - 1);
}

console.log(arrayToList([9, 8, 6, 4, 1, 55]));
console.log(arrayToList([45, 13, 5]));
console.log(listToArray(arrayToList([45, 13, 5])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));