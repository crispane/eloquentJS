let heading = document.createElement("h1");
let text = document.createTextNode("what's up");
heading.appendChild(text);
document.body.appendChild(heading);

const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
	story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
	story.textContent = "";
});

function generateTables() {
	let tbl = document.createElement("table");
	let tblHead = document.createElement("thead");
	let headRow = document.createElement("tr");

	for (let i = 0; i < 5; i++) {
		let headCell = document.createElement("th");
		headCell.appendChild(document.createTextNode(`header ${i + 1}`));
		headRow.appendChild(headCell);
	}
	tblHead.appendChild(headRow);
	tbl.appendChild(tblHead);

	let tblBody = document.createElement("tbody");
	for (let i = 0; i < 3; i++) {
		let row = document.createElement("tr");
		for (let j = 0; j < 5; j++) {
			let cell = document.createElement("td");
			cell.appendChild(document.createTextNode(`cell ${i}-${j}`));
			row.appendChild(cell);
		}
		tblBody.appendChild(row)
	}
	tbl.appendChild(tblBody);
	tbl.setAttribute("border", "6");
	document.body.appendChild(tbl);
}

document.getElementById("gen-table").addEventListener("click", generateTables);
document.getElementById("remove-table").addEventListener("click", document.body.getElementsByTagName("table").parentElement.remove);