const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString().split('\n').map(i => i.replace('\r', ''));


function totalSquareFeet(input) {
	let total = 0

	for (const line of input) {
		
		let smallest = smallestSideArea(line)
		let surfaceArea = calcSurfaceArea(line)
	
		total += surfaceArea + smallest
	}

	return total
}

console.log(totalSquareFeet(input))



function calcSurfaceArea(line) {
	const [l, w, h] = line.split('x')
	return 2*l*w + 2*w*h + 2*l*h
}

function smallestSideArea(line) {
	const [l, w, h] = line.split('x')

	let sides = [l*w, w*h, l*h]

	return Math.min(...sides)
}