/*
Write a function that computes the dominant writing direction in a
string of text. Remember that each script object has a direction prop-
erty that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top
to bottom).
The dominant direction is the direction of a majority of the char-
acters that have a script associated with them. The characterScript
and countBy functions defined earlier in the chapter are probably useful
here.
*/

import {SCRIPTS} from "./scripts.js";

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
	return null;
}

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({ name, count: 1 });
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

function dominantWritingDir(text) {
	let counted = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.direction : "none";
	}).filter(({ name }) => name != "none");

	if (counted.length == 0) return "ltr";

	return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantWritingDir("Hello!"));
// → ltr
console.log(dominantWritingDir("Hey, مساء الخير"));
// → rtl

