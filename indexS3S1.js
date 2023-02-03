const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/telefono/', (req, res)=>{


    /*Lo que yo programe acá sera la logica 
    que se ejecutara cuando se consuma el WS con el metodo get 
    a la ruta  http://localohost:3000/api/persona/  */


    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'registros'
    });

    let sql = "select * from tbl_telefonos";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/telefonos/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'registros'
    });

    let sql = "select * from tbl_telefonos where id_persona = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/telefono/', (req, res)=>{

    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'registros'
    });

    let sql = "insert into tbl_telefonos " +
            " (id_persona, numero, id_persona) " +
            " values (?, ?, ?)";
    
    let parametros = [  req.body.id_persona, 
                        req.body.numero, 
                        req.body.id_persona
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

app.put('/api/persona/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'registros'
    });

    let sql = " update tbl_telefonos set id_telefono, " +
                " apellido_perso = ?,  "+
                " where id_persona = ? ";

    let parametros = [  req.body.nombre_persona, 
                        req.body.apellido_persona, 
                        req.body.fecha_nacimiento, 
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/api/persona/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "passa1234b",
        database: "deswebq12023"
    });

    let sql = "delete from tbl_persona where id_persona = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.listen(3000);