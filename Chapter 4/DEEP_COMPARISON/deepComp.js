/*
Write a function deepEqual that takes two values and returns true
only if they are the same value or are objects with the same properties,
where the values of the properties are equal when compared with a
recursive call to deepEqual.
*/

function deepEqual(data1, data2) {
	if (typeof data1 != "object" && typeof data2 != "object")
		return data1 === data2;
	else if (data1 == null || data2 == null)
		return (data1 == null?"First item is null":"Second item is null");
	else if (data1.length != data2.length)
		return false;
	else {
		for (let key of Object.keys(data1)) {
			if (!Object.keys(data2).includes(key) || !deepEqual(data1[key], data2[key])) return false;
		}

		return true;
	}
}

let data1 = 12;
let data11 = 12;
let data111 = -13;
let data2 = "twelve";
let data3 = null;
let data33 = null;
let data4 = [1, 2, 3, 4];
let data5 = [1, 2, 3, 4];
let data6 = [1, 2, 3, 4, 5];
console.log(typeof 12);
console.log(typeof 12 == "number");
console.log(typeof data1);
console.log(typeof data2);
console.log(typeof data3);
console.log(typeof data4);
console.log(typeof data5);
console.log(typeof null);
console.log(deepEqual(data1, data11));
console.log(deepEqual(data3, data33));
console.log(deepEqual(data4, data5));
console.log(deepEqual(data4, data3));
console.log(deepEqual(data4, data6));
console.log(deepEqual(data1, data3));
console.log(deepEqual(data1, data111));
