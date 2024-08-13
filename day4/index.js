const crypto = require('crypto')

const key = 'ckczppom'
let i = 0

while (true) {
	console.log(i);
	const string = `${key}${i}`
	const hash = crypto.createHash('md5').update(string).digest('hex')
	if (startWithNZeros(6, hash)) {
		return console.log(i, hash);
	}

	i++
}

// for part one use 5 as argument and for part 2 use 6
function startWithNZeros(n, str) {
	for (let i = 0; i < n; i++) {
		if (str[i] != 0) return false 	
	}

	return true
}