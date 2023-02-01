const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
const boardHeight = 300;
const ballDiameter = 20;
let score = 0;
let timerId;
let xDirection = 2;
let yDirection = 2;
const userStart = [230, 10];
let currentPosition = userStart; // = [230, 10]
const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

class Block {
	constructor(xAxis, yAxis) {
		this.bottomLeft = [xAxis, yAxis];
		this.bottomRight = [xAxis + blockWidth, yAxis];
		this.topLeft = [xAxis, yAxis + blockHeight];
		this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
	}
}
const blocks = [
	new Block(10, 270),
	new Block(120, 270),
	new Block(230, 270),
	new Block(340, 270),
	new Block(450, 270),
	new Block(10, 240),
	new Block(120, 240),
	new Block(230, 240),
	new Block(340, 240),
	new Block(450, 240),
	new Block(10, 210),
	new Block(120, 210),
	new Block(230, 210),
	new Block(340, 210),
	new Block(450, 210),
	new Block(10, 180),
	new Block(120, 180),
	new Block(340, 180),
	new Block(450, 180),
	new Block(10, 150),
	new Block(450, 150)
];
function addBlock() {
	for (let i = 0; i < blocks.length; i++) {
		const block = document.createElement("div");
		block.classList.add("block");

		if (i < 5) {
			// document.getElementById("MyElement").classList.add('MyClass');
			block.style.backgroundColor = "blue";
		} else if (i < 10) {
			block.style.backgroundColor = "green";
		} else if (i < 15) {
			block.style.backgroundColor = "purple";
		} else if (i < 19) {
			block.style.backgroundColor = "red";
		} else {
			block.style.backgroundColor = "yellow";
		}



		block.style.left = blocks[i].bottomLeft[0] + "px";
		block.style.bottom = blocks[i].bottomLeft[1] + "px";
		grid.appendChild(block);
	}
}

addBlock();

//tha ftiaxo enan user tha einai ena div me to onoma user san
//metavliti kai tha exei tin class = user
//kai auto tha to valoume mesa sto grid
function drawUser() {
	user.style.left = currentPosition[0] + "px";
	user.style.bottom = currentPosition[1] + "px";
}
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

function moveUser(e) {
	switch (e.key) {
	case "ArrowLeft":
		if (currentPosition[0] > 0) {
			currentPosition[0] -= 10;
			drawUser();
		}
		break;
	case "ArrowRight":
		if (currentPosition[0] < (boardWidth - blockWidth)) {
			currentPosition[0] += 10;
			drawUser();
		}
		break;
	}
}
document.addEventListener("keydown", moveUser);
function drawBall() {
	ball.style.left = ballCurrentPosition[0] + "px";
	ball.style.bottom = ballCurrentPosition[1] + "px";
}
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

function moveBall() {
	ballCurrentPosition[0] += xDirection;
	ballCurrentPosition[1] += yDirection;
	drawBall();
	checkForCollisions();

}

timerId = setInterval(moveBall, 25);

function checkForCollisions() {
	//check for block collisions
	for (let i = 0; i < blocks.length; i++) {
		if
		(
			(ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&
				ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
			((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] &&
				ballCurrentPosition[1] < blocks[i].topLeft[1])
		) {
			const allBlocks = Array.from(document.querySelectorAll(".block"));
			allBlocks[i].classList.remove("block");
			blocks.splice(i, 1);
			changeDirection();
			score++;
			scoreDisplay.innerHTML = score;
			if (blocks.length == 0) {
				scoreDisplay.innerHTML = "You Win!";
				clearInterval(timerId);
				document.removeEventListener("keydown", moveUser);
			}
		}
	}

	//check for wall collisions
	if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) ||
		ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
		ballCurrentPosition[0] <= 0) {
		changeDirection();
	}
	//check for user collisions
	if (
		(ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
		(ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
	) {
		changeDirection();
	}


	// game over

	if (ballCurrentPosition[1] <= 0) {
		clearInterval(timerId);
		scoreDisplay.innerHTML = "You lose!";
		document.removeEventListener("keydown", moveUser);
	}


}

function changeDirection() {
	if (xDirection === 2 && yDirection === 2) {
		yDirection = -2;
		return;
	}

	if (xDirection === 2 && yDirection === -2) {
		xDirection = -2;
		return;
	}
	if (xDirection === -2 && yDirection === -2) {
		yDirection = 2;
		return;
	}
	if (xDirection === -2 && yDirection === 2) {
		xDirection = 2;
		return;
	}
}