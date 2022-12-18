console.log("//Script to testing.html");
console.log("");

function test(label, body) {
	if (!body()) console.log(`Failed: ${label}`);
	else console.log(`Success: ${label}`);
}

test("convert Latin text to uppercase", () => {
	return "hello".toUpperCase() == "HELLO";
});

test("convert Greek text to uppercase", () => {
	return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});

test("don't convert case-less characters", () => {
	return "ابحرم".toUpperCase() == "ابحرم";
});
console.log("//Script to testing.html");
console.log("");

function test(label, body) {
	if (!body()) console.log(`Failed: ${label}`);
	else console.log(`Success: ${label}`);
}

test("convert Latin text to uppercase", () => {
	return "hello".toUpperCase() == "HELLO";
});

test("convert Greek text to uppercase", () => {
	return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});

test("don't convert case-less characters", () => {
	return "ابحرم".toUpperCase() == "ابحرم";
});
