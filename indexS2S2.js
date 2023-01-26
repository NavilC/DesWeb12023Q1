var mysql =  require('mysql');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/json'});
    var q = url.parse(req.url, true);
    var datos = q.query; 

    var accion = datos.accion;

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "passa1234b",
        database: "deswebq12023"
    });

    let sql="";
    let parametros = [];

    let tabla = datos.tabla;

    if (tabla == "Persona"){
        switch (accion){

            case "insert":
                sql = "insert into tbl_persona "+
                " ( nombre_persona, apellido_persona, fecha_nacimiento) "+
                " values  "+
                " (?, ?, ?) ";
                parametros = [  datos.nombre, 
                                datos.apellido, 
                                datos.fecha_nacimiento ];
                break;
            case "select":
                sql = "select * from tbl_persona ";
                break;
            case "update":

                sql = " update tbl_persona "+
                        " set  nombre_persona = ? ,  "+
                                " apellido_persona = ? , " +
                                " fecha_nacimiento = ? "+
                                " where id_persona = ? ";
                parametros = [  datos.nombre, 
                                datos.apellido, 
                                datos.fecha_nacimiento,
                                datos.id_persona  ];

                break;
            case "delete":
                sql = "delete from tbl_persona where id_persona = ?"
                parametros = [ datos.id_persona ];
                break;
            default:
                sql = "";
                break;

        }
    }

    if (tabla == "Telefono"){

        switch (accion){
            case "select":
                sql = "select * from tbl_telefonos";
                break;
            case "insert":
                sql = "insert into tbl_telefonos "+ 
                    " ( numero, id_persona) " +
                    " values "+
                    " ( ?, ?) ";
                parametros = [ datos.numero, datos.id_persona ];
                break;
            
            case "update":
                sql = " update  tbl_telefonos "+
                        " set numero = ? , id_persona = ? "+
                        " where id_telefono = ? ";
                parametros = [  datos.numero, 
                                datos.id_persona, 
                                datos.id_telefono ];  
            case "delete":
                sql = "delete from tbl_telefonos where id_telefono = ?";
                parametros = [datos.id_telefono ];
                break;
            default:
                break;

        }

    }
    

    if (sql != ""){

        con.connect(function(err){

            if (err){
                console.log(err);
            }else{
    
                con.query( sql,parametros, function(err, result){
    
                    if (err){
                        console.log(err);
    
                    }else{
                        res.write( JSON.stringify(result) );
                        res.end();
                    }
    
                } );
    
            }
    
        });

    }else{

        let retorno = { mensaje : "Metodo no encontrado" };

        res.write( JSON.stringify(retorno) );
        res.end();

    }

    

}).listen(3000);