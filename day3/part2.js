const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

function housesReceived(input) {
	const SantaPos = { x: 0, y: 0 }
	const RoboPos = { x: 0, y: 0 }
	let houses = {}

	houses[`${SantaPos.x}, ${SantaPos.y}`] = 1

	for (let i = 0; i < input.length; i++) {
		switch (input[i]) {
			case '>':
				i % 2 == 0 ? SantaPos.x++ : RoboPos.x++
				break;
			case '<':
				i % 2 == 0 ? SantaPos.x-- : RoboPos.x--
				break;
			case '^':
				i % 2 == 0 ? SantaPos.y++ : RoboPos.y++
				break;
			case 'v':
				i % 2 == 0 ? SantaPos.y-- : RoboPos.y--
				break;
		}

		if (i % 2 == 0) {
			houses[`${SantaPos.x}, ${SantaPos.y}`] = 1
		} else {
			houses[`${RoboPos.x}, ${RoboPos.y}`] = 1
		}
	}

	return Object.values(houses).length
}

console.log(housesReceived(input));