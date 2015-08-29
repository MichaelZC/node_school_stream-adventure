var duplex = require('duplexer2')
var through = require('through2').obj

module.exports = function(counter) {
    var count = {}
    var writer = through(function(buffer, _, next) {
        count[buffer.country] = (count[buffer.country] || 0) + 1;
        next()
    }, function(done) {
        counter.setCounts(count);
        done()
    })
    return duplex(writer, counter)
}
