// let output = "# # # #";
// for (let n = 0; n < 8; n++){
//     if ( n % 2 == 0){
//         console.log(" " + output);
//     }else{
//         console.log(output);
//     }
// }

var size = 12;

var board = "";

for (var y = 0; y < size; y++) {
	for (var x = 0; x < size; x++) {
		if ((x + y) % 2 == 0)
			board += " ";
		else
			board += "#";
	}
	board += "\n";
}

console.log(board);