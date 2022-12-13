let countB = function(n) {
	let count = 0;
	for (let i = 0; i < n.length; i++) {
		if (n[i] == "B")
			count++;
	}
	return count;
};

console.log(countB("asdasdBB"));
console.log(countB("BasdaBasBd"));
console.log(countB("asdasd"));
console.log(countB(""));
console.log(countB("BBBBBBBBBBBBBBBBBBBBBBBBB"));


let countChar = function(word, char) {
	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if (word[i] == char)
			count++;
	}
	return count;
};

console.log(countChar("aaaaadvdfsdff", "a"));
console.log(countChar("aaaaadvdfsdff", "d"));
console.log(countChar("aaaaadvdfsdff", "v"));
console.log(countChar("aaaaadvdfsdff", "f"));
console.log(countChar("aaaaadvdfsdff", "s"));