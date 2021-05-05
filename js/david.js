let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('titulo');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			capa.innerText ="Agenda cargada";
			console.log('Agenda cargada');
			
			
		}
		else {
			capa.innerText = ajax.status+"Error AJAX, no se puede obtener la agenda";
			console.log('Error AJAX, no se puede obtener la agenda');
		}
	}
}

function loadlista() {
	ajax.open("GET", "recursos_david/jsonDavid/biblioteca.json");
    ajax.send();
}