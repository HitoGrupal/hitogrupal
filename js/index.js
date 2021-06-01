let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
    let capa = document.getElementById('salida');
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            generarPagina();
        }
        else {
            capa.innerHTML = "Error AJAX, no se puede obtener la tabla :(";
        }
    }
}

function loadPagina() {
	ajax.open("GET", "index.json");
    ajax.send();
}

function generarPagina() {
    var i;  
    var textJson = ajax.responseText;
    var table="<tr><th>NOMBRE</th><th>APELLIDO</th><th>TEMÁTICA DE LA WEB</th>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].nombre +
            "</td><td>" +
            obj[i].apellidos +
            "</td><td>" +
            obj[i].tema +
            "</td></tr>";

    }
    document.getElementById("tabla").innerHTML = table;
}