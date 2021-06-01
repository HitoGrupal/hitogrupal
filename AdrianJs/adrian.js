let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
    let capa = document.getElementById('salida');
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            generarTabla();
        }
        else {
            capa.innerHTML = "Error AJAX, no se puede obtener los datos";
        }
    }
}

function loadDatos() {
    ajax.open("GET", "adrian.json");
    ajax.send();
}



function generarTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>Pelicula</th><th>Año</th><th>Calificacion</th><th>Genero</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].nombre +
            "</td><td>" +
            obj[i].año +
            "</td><td>" +
            obj[i].clasificacion +
            "</td><td>" +
            obj[i].genero +
            "</td><tr>";
    }
    document.getElementById("salida").innerHTML = table;
}

