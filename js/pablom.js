//Petición Ayax
let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

//Respuesta de Ayax
function procesarRespuesta () {
	let capa = document.getElementById('salida');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			tabla();
		}
		else {
			capa.innerHTML = "Error AJAX, no se puede obtener la agenda";
		}
	}
}

//Cargar datos.json
function loaddatos() {
	ajax.open("GET", "datos.json");
	ajax.send();
}

function cambioImg1(){
	document.getElementById("img1").src="recursos_pablom/imagenespablom/dispositivomovil2.jpg";
}
function revertirImg1(){
	document.getElementById("img1").src="recursos_pablom/imagenespablom/dispositivomovil.jpg";
}


function cambioImg2(){
	document.getElementById("img2").src="recursos_pablom/imagenespablom/movil2.jpg";
}
function revertirImg2(){
	document.getElementById("img2").src="recursos_pablom/imagenespablom/movil.jpg";
}


function cambioImg3(){
	document.getElementById("img3").src="recursos_pablom/imagenespablom/iosvsandroid2.jpg";
}
function revertirImg3(){
	document.getElementById("img3").src="recursos_pablom/imagenespablom/iosvsandroid.jpg";
}


function cambioImg4(){
	document.getElementById("img4").src="recursos_pablom/imagenespablom/iosvsandroidvsharmonyos2.jpg";
}
function revertirImg4(){
	document.getElementById("img4").src="recursos_pablom/imagenespablom/iosvsandroidvsharmonyos.jpg";
}

