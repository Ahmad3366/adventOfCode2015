const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().split('\n').map(e => e.replace('\r', ''))

function calcNices(input) {
	let total = 0;

	for (const str of input) {
		if (!contain3Vowels(str) || containDisallowed(str) || !charAppearsTwice(str)) continue
		total++
	}

	console.log(total);
}

calcNices(input)

function contain3Vowels(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u']
	let count = 0

	for (const char of str) {
		if (vowels.indexOf(char) !== -1) count++

		if (count >= 3) return true
	}

	return false
}

function containDisallowed(str) {
	const disallowed = ['ab', 'cd', 'pq', 'xy']

	for (const el of disallowed) {
		if (str.includes(el)) return true
	}

	return false
}

function charAppearsTwice(str) {
	const chars = str.split('')

	for (let i = 0; i < chars.length; i++) {
		const char = chars[i];
		const nextChar = chars[i + 1]

		if (char == nextChar) {
			return char + nextChar
		}
	}

	return false
}