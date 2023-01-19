var http = require('http');
var mismodulos = require('./mismodulos');

http.createServer( function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('La suma es :' + mismodulos.suma('1', '2'));
    res.write(' ');
    res.end( 'Mi fecha de cumple es: ' +  mismodulos.miFecha());

}).listen(3000);
