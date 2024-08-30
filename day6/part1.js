const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString().split('\n').map(line => line.replace('\r', ''))

const grid = Array(1000).fill().map(r => Array(1000).fill(false))

for (const line of input) {
	let [, action, fromX, fromY, toX, toY] = /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/.exec(line)

	for (let y = Number(fromY); y <= Number(toY); y++) {
		for (let x = Number(fromX); x <= Number(toX); x++) {

			if (action == 'toggle') {
				grid[y][x] = !grid[y][x]
			} else if (action == 'turn on') {
				grid[y][x] = true
			} else {
				grid[y][x] = false
			}
		}
	}
}

let total = 0
for (const y of grid) {
	for (const x of y) {
		if (x) {
			total++
		}
	}
}
console.log(total);