//Petición Ayax
let ajax = new XMLHttpRequest();
var obj; // Mi array de objejos JSON.

ajax.onreadystatechange = procesarRespuesta;

//Respuesta de Ayax
function procesarRespuesta () {
	let capa = document.getElementById('salida');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			var textojson = ajax.responseText;//Lo que nos devuelve
		
			obj = JSON.parse(textojson);//Convierte a objeto Json
	
			modeloEspecifico();
			tabla();
		}
		else {
			capa.innerHTML = "Error AJAX, no se puede obtener la agenda";
		}
	}
}

//Cargar datos.json
function loaddatos() {
	ajax.open("GET", "pablom.json");
	ajax.send();
}


function modeloEspecifico(){
	var tabla = "<tr><th>INFORMACIÓN PRINCIPAL</th><th>ESPECIFICACIONES</th><th>TIPOS DE CARGA</th><th>VERSIONES/PRECIOS</th><th>IMAGENES</th></tr>";
	var enlacePrecios =["<a href=https://www.apple.com/es/iphone-12/>", 
	"<a href=https://www.samsung.com/es/smartphones/galaxy-s21-5g/buy/>", 
	"<a href= https://mobile.mi.com/es/mi-11/?gid=4210600003>", 
	"<a href= https://www.oneplus.com/es/oneplus-9-pro>",
	"<a href= https://www.phonehouse.es/movil/apple/iphone-x-64gb.html>",
	"<a href= https://www.apple.com/es/shop/buy-iphone/iphone-se>",
	"<a href= https://www.oppo.com/es/smartphones/series-find-x/find-x3-pro/>",
	"<a href= https://www.hebergementwebs.com/noticias/fecha-de-lanzamiento-del-iphone-flip-precio-fugas-y-lo-que-esperamos-del-iphone-plegable-de-apple>",
	"<a href= https://www.samsung.com/es/smartphones/galaxy-z-fold2/buy/>"
	];
	
	var imagenes =["<a href= https://www.xataka.com/analisis/iphone-12-analisis-caracteristicas-precio-especificaciones><img src=../recursos_pablom/imagenespablom/iphone12.jpg></a>", 
	"<a href=https://www.xataka.com/analisis/samsung-galaxy-s21-ultra-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/samsungs21ultra.jpg></a>", 
	"<a href=https://www.xataka.com/analisis/xiaomi-mi-11-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/mi11.jpg></a>",
	"<a href=https://www.xataka.com/analisis/oneplus-9-pro-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/oneplus9pro.jpg></a>",
	"<a href=https://www.xataka.com/analisis/iphone-x-analisis-caracteristicas-precio-y-especificaciones><img src=imagenespablom/oppofindx3pro.jpg></a>",
	"<a href=https://www.xataka.com/analisis/iphone-se-2020-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/iphonese2.jpg></a>",
	"<a href=https://www.xataka.com/analisis/huawei-p40-pro-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/huaweip40pro.jpg></a>",
	"<a href=https://www.movilzona.es/2021/03/18/diseno-concepual-iphone-flip-plegable/><img src=imagenespablom/iphoneflip.jpg></a>",
	"<a href=https://www.movilzona.es/2021/03/18/diseno-concepual-iphone-flip-plegable/><img src=imagenespablom/galaxyzfold2.jpg></a>"
	];

	var valor = document.getElementById("select").value;
	
	switch(valor){
		case "Apple":
		for(var x = 0; x<obj.length; x++){
			if(obj[x].informacion.marca=="Apple"){
				tabla += "<tr><td>"+"Marca: "+obj[x].informacion.marca+"<br>"+"Modelo: "+obj[x].informacion.modelo+
				"<br>"+"S.O: "+obj[x].informacion.sistema_operativo+"<br>"+"Versión S.O: "+obj[x].informacion.version
				+"</td><td>"+obj[x].especificaciones.procesador+"<br>"+obj[x].especificaciones.memoria_ram+"<br>"+obj[x].especificaciones.almacenamiento+"<br>"+obj[x].especificaciones.bateria
				+"</td><td>"+obj[x].tipos_de_carga.carga_rapida+"<br>"+obj[x].tipos_de_carga.carga_inlambrica+"<br>"+obj[x].tipos_de_carga.carga_inversa
				+"</td><td>"+obj[x].versionesyprecios.versiones[0]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[1]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[2]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"</td><td>"+imagenes[x]+obj[x].imagen+"</td></tr>";
			}
		}
		document.getElementById("tabla1").innerHTML=tabla;
		break;


		case "Samsung":
		for(var x = 0; x<obj.length; x++){
			if(obj[x].informacion.marca=="Samsung"){
				tabla += "<tr><td>"+"Marca: "+obj[x].informacion.marca+"<br>"+"Modelo: "+obj[x].informacion.modelo+
				"<br>"+"S.O: "+obj[x].informacion.sistema_operativo+"<br>"+"Versión S.O: "+obj[x].informacion.version
				+"</td><td>"+obj[x].especificaciones.procesador+"<br>"+obj[x].especificaciones.memoria_ram+"<br>"+obj[x].especificaciones.almacenamiento+"<br>"+obj[x].especificaciones.bateria
				+"</td><td>"+obj[x].tipos_de_carga.carga_rapida+"<br>"+obj[x].tipos_de_carga.carga_inlambrica+"<br>"+obj[x].tipos_de_carga.carga_inversa
				+"</td><td>"+obj[x].versionesyprecios.versiones[0]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[1]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[2]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"</td><td>"+imagenes[x]+obj[x].imagen+"</td></tr>";
			}
		}
		document.getElementById("tabla1").innerHTML=tabla;
		break;

		case "Xiaomi":
		for(var x = 0; x<obj.length; x++){
			if(obj[x].informacion.marca=="Xiaomi"){
				tabla += "<tr><td>"+"Marca: "+obj[x].informacion.marca+"<br>"+"Modelo: "+obj[x].informacion.modelo+
				"<br>"+"S.O: "+obj[x].informacion.sistema_operativo+"<br>"+"Versión S.O: "+obj[x].informacion.version
				+"</td><td>"+obj[x].especificaciones.procesador+"<br>"+obj[x].especificaciones.memoria_ram+"<br>"+obj[x].especificaciones.almacenamiento+"<br>"+obj[x].especificaciones.bateria
				+"</td><td>"+obj[x].tipos_de_carga.carga_rapida+"<br>"+obj[x].tipos_de_carga.carga_inlambrica+"<br>"+obj[x].tipos_de_carga.carga_inversa
				+"</td><td>"+obj[x].versionesyprecios.versiones[0]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[1]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[2]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"</td><td>"+imagenes[x]+obj[x].imagen+"</td></tr>";
			}
		}
		document.getElementById("tabla1").innerHTML=tabla;
		break;

		case "OnePlus":
		for(var x = 0; x<obj.length; x++){
			if(obj[x].informacion.marca=="OnePlus"){
				tabla += "<tr><td>"+"Marca: "+obj[x].informacion.marca+"<br>"+"Modelo: "+obj[x].informacion.modelo+
				"<br>"+"S.O: "+obj[x].informacion.sistema_operativo+"<br>"+"Versión S.O: "+obj[x].informacion.version
				+"</td><td>"+obj[x].especificaciones.procesador+"<br>"+obj[x].especificaciones.memoria_ram+"<br>"+obj[x].especificaciones.almacenamiento+"<br>"+obj[x].especificaciones.bateria
				+"</td><td>"+obj[x].tipos_de_carga.carga_rapida+"<br>"+obj[x].tipos_de_carga.carga_inlambrica+"<br>"+obj[x].tipos_de_carga.carga_inversa
				+"</td><td>"+obj[x].versionesyprecios.versiones[0]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[1]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[2]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"</td><td>"+imagenes[x]+obj[x].imagen+"</td></tr>";
			}
		}
		document.getElementById("tabla1").innerHTML=tabla;
		break;

		case "OPPO":
		for(var x = 0; x<obj.length; x++){
			if(obj[x].informacion.marca=="OPPO"){
				tabla += "<tr><td>"+"Marca: "+obj[x].informacion.marca+"<br>"+"Modelo: "+obj[x].informacion.modelo+
				"<br>"+"S.O: "+obj[x].informacion.sistema_operativo+"<br>"+"Versión S.O: "+obj[x].informacion.version
				+"</td><td>"+obj[x].especificaciones.procesador+"<br>"+obj[x].especificaciones.memoria_ram+"<br>"+obj[x].especificaciones.almacenamiento+"<br>"+obj[x].especificaciones.bateria
				+"</td><td>"+obj[x].tipos_de_carga.carga_rapida+"<br>"+obj[x].tipos_de_carga.carga_inlambrica+"<br>"+obj[x].tipos_de_carga.carga_inversa
				+"</td><td>"+obj[x].versionesyprecios.versiones[0]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[1]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[2]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"</td><td>"+imagenes[x]+obj[x].imagen+"</td></tr>";
			}
		}
		document.getElementById("tabla1").innerHTML=tabla;
		break;

		case "Huawei":
		for(var x = 0; x<obj.length; x++){
			if(obj[x].informacion.marca=="Huawei"){
				tabla += "<tr><td>"+"Marca: "+obj[x].informacion.marca+"<br>"+"Modelo: "+obj[x].informacion.modelo+
				"<br>"+"S.O: "+obj[x].informacion.sistema_operativo+"<br>"+"Versión S.O: "+obj[x].informacion.version
				+"</td><td>"+obj[x].especificaciones.procesador+"<br>"+obj[x].especificaciones.memoria_ram+"<br>"+obj[x].especificaciones.almacenamiento+"<br>"+obj[x].especificaciones.bateria
				+"</td><td>"+obj[x].tipos_de_carga.carga_rapida+"<br>"+obj[x].tipos_de_carga.carga_inlambrica+"<br>"+obj[x].tipos_de_carga.carga_inversa
				+"</td><td>"+obj[x].versionesyprecios.versiones[0]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[1]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"<br>"+obj[x].versionesyprecios.versiones[2]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
				+"</td><td>"+imagenes[x]+obj[x].imagen+"</td></tr>";
			}
		}
		document.getElementById("tabla1").innerHTML=tabla;
		break;
	}

}

function tabla(){
	var x;
	//alert(textojson);
	var tabla = "<tr><th>INFORMACIÓN PRINCIPAL</th><th>ESPECIFICACIONES</th><th>TIPOS DE CARGA</th><th>VERSIONES/PRECIOS</th><th>IMAGENES</th></tr>";
	
	var enlacePrecios =["<a href=https://www.apple.com/es/iphone-12/>", 
	"<a href=https://www.samsung.com/es/smartphones/galaxy-s21-5g/buy/>", 
	"<a href= https://mobile.mi.com/es/mi-11/?gid=4210600003>", 
	"<a href= https://www.oneplus.com/es/oneplus-9-pro>",
	"<a href= https://www.phonehouse.es/movil/apple/iphone-x-64gb.html>",
	"<a href= https://www.apple.com/es/shop/buy-iphone/iphone-se>",
	"<a href= https://www.oppo.com/es/smartphones/series-find-x/find-x3-pro/>",
	"<a href= https://www.hebergementwebs.com/noticias/fecha-de-lanzamiento-del-iphone-flip-precio-fugas-y-lo-que-esperamos-del-iphone-plegable-de-apple>",
	"<a href= https://www.samsung.com/es/smartphones/galaxy-z-fold2/buy/>"
	];
	
	var imagenes =["<a href= https://www.xataka.com/analisis/iphone-12-analisis-caracteristicas-precio-especificaciones><img src=../recursos_pablom/imagenespablom/iphone12.jpg></a>", 
	"<a href=https://www.xataka.com/analisis/samsung-galaxy-s21-ultra-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/samsungs21ultra.jpg></a>", 
	"<a href=https://www.xataka.com/analisis/xiaomi-mi-11-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/mi11.jpg></a>",
	"<a href=https://www.xataka.com/analisis/oneplus-9-pro-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/oneplus9pro.jpg></a>",
	"<a href=https://www.xataka.com/analisis/iphone-x-analisis-caracteristicas-precio-y-especificaciones><img src=imagenespablom/oppofindx3pro.jpg></a>",
	"<a href=https://www.xataka.com/analisis/iphone-se-2020-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/iphonese2.jpg></a>",
	"<a href=https://www.xataka.com/analisis/huawei-p40-pro-analisis-caracteristicas-precio-especificaciones><img src=imagenespablom/huaweip40pro.jpg></a>",
	"<a href=https://www.movilzona.es/2021/03/18/diseno-concepual-iphone-flip-plegable/><img src=imagenespablom/iphoneflip.jpg></a>",
	"<a href=https://www.movilzona.es/2021/03/18/diseno-concepual-iphone-flip-plegable/><img src=imagenespablom/galaxyzfold2.jpg></a>"
	];

	for(var x = 0; x<obj.length; x++){
		tabla += "<tr><td>"+"Marca: "+obj[x].informacion.marca+"<br>"+"Modelo: "+obj[x].informacion.modelo+
		"<br>"+"S.O: "+obj[x].informacion.sistema_operativo+"<br>"+"Versión S.O: "+obj[x].informacion.version
		+"</td><td>"+obj[x].especificaciones.procesador+"<br>"+obj[x].especificaciones.memoria_ram+"<br>"+obj[x].especificaciones.almacenamiento+"<br>"+obj[x].especificaciones.bateria
		+"</td><td>"+obj[x].tipos_de_carga.carga_rapida+"<br>"+obj[x].tipos_de_carga.carga_inlambrica+"<br>"+obj[x].tipos_de_carga.carga_inversa
		+"</td><td>"+obj[x].versionesyprecios.versiones[0]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
		+"<br>"+obj[x].versionesyprecios.versiones[1]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
		+"<br>"+obj[x].versionesyprecios.versiones[2]+"="+enlacePrecios[x]+obj[x].versionesyprecios.precios[0]+"</a>"
		+"</td><td>"+imagenes[x]+obj[x].imagen+"</td></tr>";
	}
		document.getElementById("tabla2").innerHTML=tabla;
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

