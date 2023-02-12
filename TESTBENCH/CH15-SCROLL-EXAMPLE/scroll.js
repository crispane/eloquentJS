//Create some content
document.body.appendChild(document.createTextNode(
	"superacalifragilisticexpialidocious".repeat(1000)
));

let bar = document.querySelector("#progress");
window.addEventListener("scroll", () => {
	let max = document.body.scrollHeight - innerHeight;
	bar.getElementsByClassName.width = `${(scrollY / max) * 100}%`;
});