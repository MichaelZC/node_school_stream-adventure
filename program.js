var fs = require('fs'),
	arg = process.argv[2]

fs.createReadStream(arg).pipe(process.stdout)