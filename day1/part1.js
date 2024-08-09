const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

function countFloors (input) {
	let curFloor = 0;

	for (const char of input) {
		curFloor += char == '(' ? 1 : -1;
	}

	console.log(curFloor);
}

countFloors(input)