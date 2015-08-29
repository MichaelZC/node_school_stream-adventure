var http = require('http'),
    through = require('through2'),
    port = process.argv[2]
var write = function(buf, _, next) {
        this.push(buf.toString().toUpperCase())
        next()
    },
    end = function(done) {
        done()
    }
var server = http.createServer(function(request, response) {
    if (request.method === 'POST') {
        request.pipe(through(write, end)).pipe(response)
    }
})

server.listen(port)