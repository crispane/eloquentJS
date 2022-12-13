/* 
Eloquent JS / Exercises / Ch6 / Groups

The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn't have any effect. Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn't already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group. Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same. Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

class Group {
	constructor() {
		this.items = [];
	}

	[Symbol.iterator]() {
		return new GroupIterator(this);
	}

	has(candidate) {
		return this.items.includes(candidate);
	}

	add(candidate) {
		if (!this.has(candidate)) {
			this.items.push(candidate);
		}
	}

	delete(candidate) {
		if (this.has(candidate)) {
			this.items = this.items.filter(item => item !== candidate);
			// -----My initial implementation(using deep copy and splice)-----
			// let arrayCopy = JSON.parse(JSON.stringify(this.items));
			// let index = this.items.indexOf(candidate);
			// this.items = this.items.splice(0, index);
			// for (let item of arrayCopy.splice(index + 1, arrayCopy.length - 1))
			// 	this.items.push(item);
		}
	}

	static from(iterObject) {
		let group = new Group;
		for (let item of iterObject)
			group.add(item);
		return group;
	}

}

class GroupIterator {
	constructor(group) {
		this.group = group;
		this.position = 0;
	}

	next(){
		if (this.position >= this.group.items.length) {
			return{done: true};
		}else {
			let result = {value: this.group.items[this.position], done: false};
			this.position++;
			return result;
		}
	}
}

let group1 = new Group();
group1.add(0);
group1.add(1);
group1.add(2);
group1.add(3);
console.log(group1.has(1));

console.log(group1);
group1.delete(2);
console.log(group1);

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);

for (let value of (Group.from(["a", "b", "c"]))) {
	console.log(value);
}

for (let value of group1) {
	console.log(value);
}