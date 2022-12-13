let range = (start, end, step = start <= end ? 1 : -1) => {
	let array = [];

	if (step > 0 && start < end) {
		for (let n = start; n <= end; n += step) array.push(n);
	} else if (step < 0 && start > end) {
		for (let n = start; n >= end; n += step) array.push(n);
	} else {
		console.log("error: Invalid Array Range");
	}
	return array;
};

let sum = (array) => {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
};

let exampleArray = range(5, 15);
console.log(exampleArray);
console.log("\nThe sum of the array elements is: " + sum(exampleArray));

exampleArray = range(15, 5);
console.log(exampleArray);
console.log("\nThe sum of the array elements is: " + sum(exampleArray));

exampleArray = range(15, 5, -2);
console.log(exampleArray);
console.log("\nThe sum of the array elements is: " + sum(exampleArray));

exampleArray = range(15, 5, 2);
console.log(exampleArray);
console.log("\nThe sum of the array elements is: " + sum(exampleArray));
