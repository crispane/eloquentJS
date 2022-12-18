class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	minus(vector) {
		let vecReturn = new Vec(this.x - vector.x, this.y - vector.y);
		return vecReturn;
	}

	plus(vector) {
		let vecReturn = new Vec(this.x + vector.x, this.y + vector.y);
		return vecReturn;
	}

	get length() {
		return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
	}
}

let vector1 = new Vec(3, 4);
let vector2 = new Vec(6, 8);

console.log(vector1.plus(vector2));
console.log(vector1.minus(vector2));
console.log(vector1.length);
console.log(vector2.length);