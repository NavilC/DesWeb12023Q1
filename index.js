var http = require('http');
var mismodulos = require('./mismodulos');
var fs = require('fs');

http.createServer( function(req, res){

    fs.readFile( 'hola.html',  function(err, data){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();

    });

    /*res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('La suma es :' + mismodulos.suma('1', '2'));
    res.write(' ');
    res.end( 'Mi fecha de cumple es: ' +  mismodulos.miFecha());*/

}).listen(3000);
