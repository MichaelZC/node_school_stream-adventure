var split = require('split'),
	through = require('through2')
current = 1
var filter = through(function(buffer, _, next) { if (current%2 === 0) {this.push(buffer.toString().toUpperCase())} else {this.push(buffer.toString().toLowerCase())} current++;this.push('\n'); next()})

process.stdin.pipe(split()).pipe(filter).pipe(process.stdout)