const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

function countFloors (input) {
	let curFloor = 0;
	let floorIndex = 0

	for (const char of input) {
		curFloor += char == '(' ? 1 : -1;
		floorIndex += 1
		if (curFloor == -1) {
			return console.log(floorIndex);
		}
	}
}

countFloors(input)