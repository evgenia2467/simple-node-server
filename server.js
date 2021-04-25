const http = require('http')

http.createServer(function (req, res) {
    res.writeHead(201, {'Content-Type': 'text/plain'})
    // res.end('I dont like school')
    if (req.method == 'GET') {
        res.end('Hello World!')
    } else {
        res.end('Hi!')
    }
    console.log(req.method)
}).listen(8080)

console.log("Listening on port 8080. Ctrl-C to exit.")
