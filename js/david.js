let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('titulo');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			//capa.innerText ="Agenda cargada";
			console.log('Agenda cargada');
			prueba();
			
			
			
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


function prueba(){
	let i;
    
    let textJson = ajax.responseText;
    let lista= "";
    let obj = JSON.parse(textJson);

    for (i= 0;i< obj.length;i++){

    	lista+='<div class="grid-item"><ul>'+
    			'<li class="empresa">'+
    			"<b>"+"Empresa: "+"</b>"+
    				"<br>"+
    			obj[i].empresa+'</li>'+
    			'<li>'+
    			"<b>"+"Nombre: "+"</b>"+
    				"<br>"+
    			obj[i].info_personal.nombre+'</li>'+
    			'<li>'+
    			"<b>"+"Apellidos: "+"</b>"+
    				"<br>"+
    			obj[i].info_personal.apellidos+'</li>'+
    			'<li>'+
    			"<b>"+"Telefono: "+"</b>"+
    				"<br>"+
    			obj[i].info_personal.telefono+'</li>'+
    			'<li>'+
    			"<b>"+"DNI: "+"</b>"+
    				"<br>"+
    			obj[i].info_personal.dni+'</li>'+
    			'<li>'+
    			"<b>"+"ID_empleado: "+"</b>"+
    				"<br>"+
    			obj[i].id_empleado+'</li>'+
    			'<li>'+
    			"<b>"+"Departamento: "+"</b>"+
    				"<br>"+
    			obj[i].departamento+'</li>'+
    			'<li>'+
    			"<b>"+"Lenguajes Manejados: "+"</b>"+
    				"<br>"+
    			obj[i].Lenguajes_manejados+'</li>'+
    			'<li>'+
    			"<b>"+"Sueldo: "+"</b>"+
    				"<br>"+
    			obj[i].sueldo+"€"+'</li>'+
    			'<li>'+
    			"<b>"+"Contrato: "+"</b>"+
    				"<br>"+
    			obj[i].contrato.tipo_contrato+'</li>'+
    			'<li>'+
    			"<b>"+"Horas semanales: "+"</b>"+
    				"<br>"+
    			obj[i].contrato.horas_semanales+'</li>'+
    			'<li>'+
    			"<b>"+"Turno: "+"</b>"+
    				"<br>"+
    			obj[i].contrato.turno+'</li></ul></div>';

    			let insertar = document.getElementsByClassName("item3");
    			insertar[0].innerHTML= lista;


    }
}





 
