const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/persona/', (req, res)=>{


    /*Lo que yo programe acá sera la logica 
    que se ejecutara cuando se consuma el WS con el metodo get 
    a la ruta  http://localohost:3000/api/persona/  */


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "passa1234b",
        database: "deswebq12023"
    });

    let sql = "select * from tbl_persona";

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



app.listen(3000);