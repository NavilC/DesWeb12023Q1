var http = require('http');

http.createServer( function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hola este es mi primer programa en node");

}).listen(8080);
