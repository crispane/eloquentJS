let min = (a, b) => {
	if (a > b) {return a;}
	else if (b > a){return b;}
	else return;
};

console.log(min(3,4));
console.log(min(13,4));
console.log(min(4,4));