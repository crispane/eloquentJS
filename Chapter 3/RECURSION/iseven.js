function isEven(n) {
	if (n == 0){
		return true;
	}else if (n == 1) {
		return false;
	}else if (n < 0){
		return isEven(-n);
	}else
		return isEven(n-2);
}

console.log(isEven(13));
console.log(isEven(113));
console.log(isEven(11224));
console.log(isEven(5400));
console.log(isEven(-53));
console.log(isEven(-1));