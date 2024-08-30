const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString().split('\n').map(line => line.replace('\r', ''))

const grid = Array(1000).fill().map(r => Array(1000).fill(0))

for (const line of input) {
	let [, action, fromX, fromY, toX, toY] = /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/.exec(line)

	for (let y = Number(fromY); y <= Number(toY); y++) {
		for (let x = Number(fromX); x <= Number(toX); x++) {

			if (action == 'toggle') {
				grid[y][x] += 2
			} else if (action == 'turn on') {
				grid[y][x]++
			} else {
				grid[y][x]--

				if (grid[y][x] < 0) {
					grid[y][x] = 0
				}
			}
		}
	}
}

let total = 0
for (const y of grid) {
	for (const x of y) {
		total += x
	}
}

console.log(total);