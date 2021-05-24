let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('salida');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			crearTabla();
			cambiarFondo('Principal');
		}
		else {
			capa.innerHTML = "Error AJAX, no se puede obtener la informacio de los coches";
		}
	}
}

function cargarCoches() {
	ajax.open("GET", "../recursos_jesus/jesus.json");
    ajax.send();
}

function crearTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>MARCA</th><th>MODELO</th><th>MATRICULA</th><th>PLAZAS</th><th>MOTOR</th><th>CABALLOS</th><th>CILINDROS</th><th>COLOR</th><th>PRECIO</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].marca +
            "</td><td>" +
            obj[i].modelo +
            "</td><td>" +
            obj[i].matricula +
            "</td><td>" +
            obj[i].plazas +
            "</td><td>" +
            obj[i].motor.nombre_motor +
            "</td><td>" +
            obj[i].motor.caballos +
            "</td><td>" +
            obj[i].motor.cilindros +
            "</td><td>" +
            obj[i].color +
            "</td><td>" +
            obj[i].precio +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}


function filtrarTabla(marcas) {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>MARCA</th><th>MODELO</th><th>MATRICULA</th><th>PLAZAS</th><th>MOTOR</th><th>CABALLOS</th><th>CILINDROS</th><th>COLOR</th><th>PRECIO</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
    	if (marcas == obj[i].marca) {
        table += "<tr><td>" +
            obj[i].marca +
            "</td><td>" +
            obj[i].modelo +
            "</td><td>" +
            obj[i].matricula +
            "</td><td>" +
            obj[i].plazas +
            "</td><td>" +
            obj[i].motor.nombre_motor +
            "</td><td>" +
            obj[i].motor.caballos +
            "</td><td>" +
            obj[i].motor.cilindros +
            "</td><td>" +
            obj[i].color +
            "</td><td>" +
            obj[i].precio +
            "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
}

function cambiarFondo(modelo) {
	if (modelo == 'Principal'){
	document.body.style.backgroundImage = "url('imagenes/principal.jpg')";
	}else if (modelo == 'Mercedes') {
	document.body.style.backgroundImage = "url('imagenes/mercedes.jpg')";
	}else if (modelo == 'Audi') {
	document.body.style.backgroundImage = "url('imagenes/audi.png')";
	}else if (modelo == 'Ferrari') {
	document.body.style.backgroundImage = "url('imagenes/ferrari.png')";
	}else if (modelo == 'Lamborghini') {
	document.body.style.backgroundImage = "url('imagenes/lamborghini.png')";
	}else if (modelo == 'BMW') {
	document.body.style.backgroundImage = "url('imagenes/BMW.jpg')";
	}else {
	document.body.style.backgroundImage = "url('imagenes/bugatti.png')";
	}
}