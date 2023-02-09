function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Persona </th> "+
                        "<th> Nombre </th> "+
                        "<th> Apellido </th> "+
                        "<th> Fecha Nacimiento </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/ejemplo/api/persona",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_persona + "</td>" +
                                "<td>" + data[i].nombre_persona+ "</td>"+
                                "<td>" + data[i].apellido_persona+ "</td>"+
                                "<td>" + data[i].fecha_nacimiento+ "</td>"+
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre_persona : $("#nombre").val(),
        apellido_persona : $("#apellido").val(),
        fecha_nacimiento : $("#fecha").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/ejemplo/api/persona",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}


function actualizarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre_persona : $("#nombre").val(),
        apellido_persona : $("#apellido").val(),
        fecha_nacimiento : $("#fecha").val()
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/ejemplo/api/persona/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}

function borrarDatos(){

    jQuery.ajaxSetup({async:false});

    let id = $("#id").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/ejemplo/api/persona/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}