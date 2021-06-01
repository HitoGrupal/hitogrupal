let ajax = new XMLHttpRequest();

loadSuper();
registrarEventos();
ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('salida');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			generarTabla();
		}
		else {
			capa.innerHTML = "Error AJAX, no se pueden obtener los superheroes";
		}
	}
}

function loadSuper() {
	ajax.open("GET", "super.json");
    ajax.send();
}

function generarTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>Escuadron</th><th>Formacion</th><th>Base</th><th>Activo</th></tr>";
    var table2 = "<tr><th>Nombre</th><th>Edad</th><th>Identidad</th><th>Poderes</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].escuadron +
            "</td><td>" +
            obj[i].formacion +
            "</td><td>" +
            obj[i].base +
            "</td><td>" +
            obj[i].activo + 
            "</td></tr>";
    }

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < obj[i].miembros.length; j++) {
     
        table2 += "<tr><td>"+
            obj[i].miembros[j].nombre + 
            "</td><td>" +
            obj[i].miembros[j].edad + 
            "</td><td>" +
            obj[i].miembros[j].identidad + 
            "</td><td>";

            for (var x = 0; x < obj[i].miembros[j].poderes.length; x++) {
               table2 += obj[i].miembros[j].poderes[x] + ", ";
            }
            
            "</td></tr>";
        
        }
    }

    document.getElementById("demo").innerHTML = table;
    document.getElementById("demo2").innerHTML = table2;
}

function tablaEscuadrones(){
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>Logo</th><th>Escuadron</th><th>Formacion</th><th>Base</th><th>Activo</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td><img src='imagenes/escuadron"+[i]+".jpg'</img></td><td>" +
            obj[i].escuadron +
            "</td><td>" +
            obj[i].formacion +
            "</td><td>" +
            obj[i].base +
            "</td><td>" +
            obj[i].activo + 
            "</td></tr>";
    }
     document.getElementById("tablaEscuadrones").innerHTML = table;
}

function tablaMiembros() {
    var i;
    var textJson = ajax.responseText;
    var table2 = "<tr><th>Foto</th><th>Nombre</th><th>Edad</th><th>Identidad</th></tr>";
    var obj = JSON.parse(textJson);
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < obj[i].miembros.length; j++) {
     
        table2 += "<tr><td><img src='imagenes/miembro"+[i]+[j]+".jpg'</img></td><td>"+
            obj[i].miembros[j].nombre + 
            "</td><td>" +
            obj[i].miembros[j].edad + 
            "</td><td>" +
            obj[i].miembros[j].identidad + 
            "</td></tr>";
    }
}
    document.getElementById("tablaEscuadrones").innerHTML = table2;
}

function superpoderes(){

    var i;
    var textJson = ajax.responseText;
    var table = "<tr><th>Foto</th><th>Superpoderes</th></tr>";
    var obj = JSON.parse(textJson);
    var poderes = document.getElementById("superheroe").value;
    var combo = document.getElementById("superheroe");
    var selected = combo.options[combo.selectedIndex].text;
    table += "<tr><td><img src='imagenes/"+poderes+"'</img></td><td>"; 
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < obj[i].miembros.length; j++) {
            for (var x = 0; x < obj[i].miembros[j].poderes.length; x++) {
                if (obj[i].miembros[j].nombre == selected ){
               table += obj[i].miembros[j].poderes[x] + ", ";
           }
           "</td></tr>";
                }
            
            

            }
        }
        document.getElementById("tablaEscuadrones").innerHTML = table;
    }

    function heroespersona(){
    var i;
    var textJson = ajax.responseText;
    var obj = JSON.parse(textJson);
    var poderes = document.getElementById("superheroe").value;
    var combo = document.getElementById("superheroe");
    var selected = combo.options[combo.selectedIndex].text;      
        document.getElementById("img").src = "imagenes/"+poderes;

}

function registrarEventos() {

    document.getElementById("img").onmouseover = cambia;
    document.getElementById("img").onmouseout = recupera;
}

function cambia() {
    var textJson = ajax.responseText;
    var obj = JSON.parse(textJson);
    var poderes = document.getElementById("superheroe").value;
    document.getElementById("img").src="imagenes/id"+poderes;
}

function recupera() {
    var textJson = ajax.responseText;
    var obj = JSON.parse(textJson);
    var poderes = document.getElementById("superheroe").value;
    document.getElementById("img").src="imagenes/"+poderes;
}