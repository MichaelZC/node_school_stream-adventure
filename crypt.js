var crypto = require('crypto'),
	phrase = process.argv[2]

process.stdin.pipe(crypto.createDecipher('aes256', phrase)).pipe(process.stdout)