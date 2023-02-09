function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Persona </th> "+
                        "<th> Nombre </th> "+
                        "<th> Apellido </th> "+
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
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function enviarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        nombre_persona : $("#nombre").val(),
        apellido_persona : $("#apellido").val(),
        fecha_nacimiento : $("#fecha").val()
    };

    console.log(datosForm);

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
        contentType: "application/json; charset=utf-8",
        async:false
      });

      cargarDatos();

}