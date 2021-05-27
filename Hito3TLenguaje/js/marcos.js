function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get('http://localhost/Hito3TLenguaje/marcos.json', function(data) {
    console.log(data['Liga'])
    document.getElementById("titulo").innerHTML = data["Liga"];
    let contenidoDatos = ""
    contenidoDatos += '<ul>'
    contenidoDatos += '<li>' + data["Pais"]  + '</li>'
    contenidoDatos += '<li>' + data["formado"]  + '</li>'
    contenidoDatos += '</ul>'
    for (var i = data.clubs.length - 1; i >= 0; i--) {
        contenidoDatos += '<div id="seccion'+ i + '">'
        contenidoDatos += '<h2>' + data.clubs[i].nombre + '</h2>'
        contenidoDatos += '<p><stront>fundacion: </strong> ' + data.clubs[i].fundacion + '</p>'
        contenidoDatos += '<p><stront>entrenador: </strong> ' + data.clubs[i].entrenador + '</p>'
        contenidoDatos += '<ul>'
         for (var j = data.clubs[i].jugadores.length - 1; j >= 0; j--) {
             contenidoDatos += '<li><stront>jugador:</strong> ' + data.clubs[i].jugadores[j] + '</li>'
        
            }
        contenidoDatos += '</ul>'
        contenidoDatos += '</div>'
    }


    document.getElementById("datos").innerHTML =contenidoDatos;
    
});