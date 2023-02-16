let balloon = document.getElementById('balloon');
let size;
function setSize(newSize) {
	size = newSize;
	balloon.style.fontSize = size + "px";
}
setSize(20);

function handleArrow(event) {
	if (event.key == "ArrowUp") {
		if (size > 70) {
			balloon.textContent = "💥";
			document.body.removeEventListener("keydown", handleArrow);
		} else {
			setSize(size * 1.1);
			event.preventDefault();
		}
	} else if (event.key == "ArrowDown" && size > 20) {
		setSize(size * 0.9);
		event.preventDefault();
	}
}
document.body.addEventListener("keydown", handleArrow);