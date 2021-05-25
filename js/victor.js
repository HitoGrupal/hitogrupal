let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('salida');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			generarTablaYFormulario();
		}
		else {
			capa.innerHTML = "Error AJAX, no se puede obtener la agenda";
		}
	}
}

function loadSafari() {
	ajax.open("GET", "agendavictor.json");
    ajax.send();
}

function generarTablaYFormulario() {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>ZONA</th><th>ANIMALES</th><th>ATRACCIONES</th><th>COCHE</th><th>PRECIO</th></tr>";
    var formulario="<fieldset><legend>Quiz</legend><p><label>Cúal es tu zona favorita</label><select name='form_Zfavorito' id='Zfavorito'>";
    var formulario2="";
    var formulario3="<fieldset><legend>Entradas</legend><p><label for='zona'>Mapa de la zona: </label><select name='form_zona' id='zona' onchange='cargarFoto()'>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].Zona +
            "</td><td><ul><li>" +
            obj[i].Animales[0] +" </li><li> "+
            obj[i].Animales[1] +" </li><li> "+
            obj[i].Animales[2] +" </li><li> "+
            obj[i].Animales[3] +" </li><li> "+
            obj[i].Animales[4] +" </li> "+
            "</ul></td><td><b>Infantil:</b> " + obj[i].Atracciones.Infantil +
            "<br><b>Acuática:</b> " + obj[i].Atracciones.Acuática +
            "<br><b>Atrevida:</b> " + obj[i].Atracciones.Atrevida +
            "<br><b>Familiar:</b> " + obj[i].Atracciones.Familiar +
            "</td><td>" +
            ((obj[i].Coche)?"Necesario":"No Necesario" )+
            "</td><td>"+
            obj[i].Precio + " €/persona"
            "</td>"
            "</tr>";
            formulario += "<option>"+obj[i].Zona+"</option>";
            formulario2 +="<p><label>Cúal es tu animal favorito "+ obj[i].Zona +"</label><select name='form_Afavorito' id='Afavorito'>"+
            "<option>"+obj[i].Animales[0]+"</option><option>"+obj[i].Animales[1]+"</option><option>"+obj[i].Animales[2]+"</option>"+
            "<option>"+obj[i].Animales[3]+"</option><option>"+obj[i].Animales[4]+"</option></select></p>";
            formulario3 += "<option value='zona"+[i]+"'>"+obj[i].Zona+"</option>"
    }
    formulario += "</select></p><p><textarea name='comentarios' rows='10' cols='40'>¿Por qué?</textarea></p>"+formulario2+"<p><input type='submit' value='Enviar'></p></fieldset>";
    formulario3 +="</select></p><p><label for='visitantes'>Seleccione el numero de visitantes</label><select name='form_visitante' id='visitante'><option>1</option>"+
                "<option>2</option><option>3</option><option>4</option><option>5</option></select></p><p><input type='button' value='Comprar Entrada'></input></p></fieldset>";
    document.getElementById("demo").innerHTML = table;
    document.getElementById("formulario").innerHTML = formulario;
    document.getElementById("formulario3").innerHTML = formulario3;
}

function cargarFoto(){
    var zona = document.getElementById("zona").value;
    var miImagen= document.getElementById("imagen");
    miImagen.src="victor/"+zona+".jpg";
}