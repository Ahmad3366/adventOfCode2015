const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split('\n').map(e => e.replace('\r', ''))

function calcNices(input) {
	let total = 0;

	for (const str of input) {

		if (!containRepeats(str) || !hasPair(str)) continue

		total++
	}

	console.log(total);
}

calcNices(input)

function containRepeats(str) {
	const chars = str.split('')

	for (let i = 0; i < chars.length; i++) {
		const char = chars[i];
		const nextChar = chars[i + 2]

		if (char == nextChar) {
			return char + chars[i + 1] + nextChar
		}
	}

	return false
}

function hasPair(str) {
	let pair = '', pair2 = ''

	for (let i = 0; i < str.length; i++) {
		pair = str[i] + str[i + 1]

		for (let j = i + 2; j < str.length; j++) {
			pair2 = str[j] + str[j + 1]

			if (pair == pair2) {
				return pair
			}
		}
	}

	return false
}