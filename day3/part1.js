const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

function housesReceived(input) {
	const pos = { x: 0, y: 0 }
	let houses = {}

	houses[`${pos.x}, ${pos.y}`] = 1

	for (const char of input) {
		switch (char) {
			case '>':
				pos.x++;
				break;
			case '<':
				pos.x--;
				break;
			case '^':
				pos.y++;
				break;
			case 'v':
				pos.y--;
				break;
		}

		houses[`${pos.x}, ${pos.y}`] = 1

	}

	return Object.values(houses).length
}

console.log(housesReceived(input))