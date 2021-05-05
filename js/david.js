let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('titulo');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			capa.innerText ="Agenda cargada";
			
			
		}
		else {
			capa.innerText = ajax.status+"Error AJAX, no se puede obtener la agenda";
		}
	}
}

function loadlista() {
	ajax.open("GET", "biblioteca.json");
    ajax.send();
}