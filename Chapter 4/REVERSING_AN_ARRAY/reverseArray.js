/* 
Write two functions, reverseArray and reverseArrayInPlace . 
The first, reverseArray,takes an array as argument and produces 
a new array that has thesame elements in the inverse order. 
The second, reverseArrayInPlace,does what the reverse method does: 
it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method.
*/

let reverseArray = (array) => {
	let i = 0;
	let arrayRev = [];
	while (i < array.length) {
		arrayRev.push(array[array.length - 1 - i]);
		i++;
	}
	return arrayRev;
};

let reverseArrayInPlace = (array) => {
	let i = 0;
	let temp;
	while (i < array.length - 1 - i) {
		temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
		i++;
	}
	return array;
};

let exampleArray = [1, 2, 3, 4, 5, 6,];
console.log(exampleArray);
console.log(reverseArray(exampleArray));
console.log(reverseArrayInPlace(exampleArray));
console.log(exampleArray);


let exampleArray1 = [7, 6, 5, 4, 3, 2, 1, 0];
console.log(exampleArray1);
console.log(reverseArray(exampleArray1));
console.log(reverseArrayInPlace(exampleArray1));
console.log(exampleArray1);

let exampleArray2 = [7, 10, 5121, 41, 3, "2asd" , 1];
console.log(exampleArray2);
console.log(reverseArray(exampleArray2));
console.log(reverseArrayInPlace(exampleArray2));
console.log(exampleArray2);