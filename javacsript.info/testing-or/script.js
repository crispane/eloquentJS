let user = prompt("Login username: ");
if (user.toLowerCase() == "admin") {
	let pass = prompt("Login password: ");
	if (pass == "TheMaster") {
		alert("Welcome!");
	} else if (pass == "" || pass == null) {
		alert("Canceled.");
	} else {
		alert("Wrong Password");
	}
} else if (user == "" || user == null) {
	alert("canceled.");
} else {
	alert("I don't know you.");
}