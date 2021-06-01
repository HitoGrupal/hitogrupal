let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('salida');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			generarTabla();
		}
		else {
			capa.innerHTML = "Error AJAX, no se puede obtener la agenda";
		}
	}
}

function loadDatos() {
	ajax.open("GET", "recursos_andrea/andrea.json");
    ajax.send();
}
function generarTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>CODIGO JUGADOR</th><th>NOMBRE</th><th>APELLIDO</th><th>EQUIPO</th><th>EDAD</th><th>POSICION</th><th>DIVISION</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].cjugador +
            "</td><td>" +
            obj[i].nombre +
            "</td><td>"+
             obj[i].apellido +
            "</td><td>"+
             obj[i].equipo +
            "</td><td>"+
             obj[i].edad +
            "</td><td>"+
             obj[i].posicion +
            "</td><td>"+
             obj[i].division +
            "</td></tr>";

    }
    document.getElementById("demo").innerHTML = table;
}

function generarTabla2(Primera) {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>CODIGO JUGADOR</th><th>NOMBRE</th><th>APELLIDO</th><th>EQUIPO</th><th>EDAD</th><th>POSICION</th><th>DIVISION</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        if(Primera==obj[i].division){
        table += "<tr><td>" +
            obj[i].cjugador +
            "</td><td>" +
            obj[i].nombre +
            "</td><td>"+
             obj[i].apellido +
            "</td><td>"+
             obj[i].equipo +
            "</td><td>"+
             obj[i].edad +
            "</td><td>"+
             obj[i].posicion +
            "</td><td>"+
             obj[i].division +
            "</td></tr>";
}
    }

    document.getElementById("demo").innerHTML = table;
}
function generarTabla3(Segunda) {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>CODIGO JUGADOR</th><th>NOMBRE</th><th>APELLIDO</th><th>EQUIPO</th><th>EDAD</th><th>POSICION</th><th>DIVISION</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        if(Segunda==obj[i].division){
        table += "<tr><td>" +
            obj[i].cjugador +
            "</td><td>" +
            obj[i].nombre +
            "</td><td>"+
             obj[i].apellido +
            "</td><td>"+
             obj[i].equipo +
            "</td><td>"+
             obj[i].edad +
            "</td><td>"+
             obj[i].posicion +
            "</td><td>"+
             obj[i].division +
            "</td></tr>";
}
    }
    document.getElementById("demo").innerHTML = table;
}

function generarTabla4(Tercera) {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>CODIGO JUGADOR</th><th>NOMBRE</th><th>APELLIDO</th><th>EQUIPO</th><th>EDAD</th><th>POSICION</th><th>DIVISION</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        if(Tercera==obj[i].division){
        table += "<tr><td>" +
            obj[i].cjugador +
            "</td><td>" +
            obj[i].nombre +
            "</td><td>"+
             obj[i].apellido +
            "</td><td>"+
             obj[i].equipo +
            "</td><td>"+
             obj[i].edad +
            "</td><td>"+
             obj[i].posicion +
            "</td><td>"+
             obj[i].division +
            "</td></tr>";
}
    }
    document.getElementById("demo").innerHTML = table;
}

