const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString().split('\n').map(i => i.replace('\r', ''));


function totalRibbonFeet(input) {
	let total = 0

	for (const line of input) {

		let wrapFeet = ribbonWrap(line)
		let bowFeet = ribbonBow(line)
	
		total += wrapFeet + bowFeet
	}

	return total
}

console.log(totalRibbonFeet(input))



function ribbonWrap(line) {
	const arranged = line.split('x').sort((a, b) => a - b)

	return Number(arranged[0])*2 + Number(arranged[1])*2
}

function ribbonBow(line) {
	const [l, w, h] = line.split('x')

	return l*w*h
}