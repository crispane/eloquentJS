window.addEventListener("click", event => {
	let dot = document.createElement("div");
	dot.className = "dot";
	dot.style.left = (event.pageX - 4) + "px";
	dot.style.top = (event.pageY - 4) + "px";
	document.body.appendChild(dot);
})

let lastX; // Tracks the last observed mouse X position
let bar = document.querySelector("div");
bar.addEventListener("mousedown", event => {
	if (event.button == 0) {
		lastX = event.clientX;
		window.addEventListener("mousemove", moved);
		event.preventDefault(); // Prevent selection
	}
});

function moved(event) {
	if (event.buttons == 0) {
		window.removeEventListener("mousemove", moved);
	} else {
		let dist = event.clientX - lastX;
		let newWidth = Math.max(10, bar.offsetWidth + dist);
		let newHeight = Math.max(10, bar.offsetHeight + dist);
		bar.style.width = newWidth + "px";
		bar.style.height = newHeight + "px";
		lastX = event.clientX;
	}
}