let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
    let capa = document.getElementById('salida');
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            generarTabla();
        }
        else {
            capa.innerHTML = "Error AJAX, no se puede obtener los datos";
        }
    }
}

function loadDatos() {
    ajax.open("GET", "pablop.json");
    ajax.send();
}
function loadDatos2() {
    ajax.open("GET", "pablop1.json");
    ajax.send();
}

function loadDatos3() {
    ajax.open("GET", "pablop2.json");
    ajax.send();
}

function loadDatos4() {
    ajax.open("GET", "pablop3.json");
    ajax.send();
}

function loadDatos5() {
    ajax.open("GET", "pablop4.json");
    ajax.send();
}

function loadDatos6() {
    ajax.open("GET", "pablop5.json");
    ajax.send();
}






function generarTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="<thead><tr><th>Titulo</th><th>Fecha</th><th>Plataformas</th><th>Desarrolladores</th></tr></thead>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tbody><td>" +
            obj[i].titulo +
            "</td><td>" +
            obj[i].fecha +
            "</td><td>" +
            obj[i].plataformas +
            "</td><td>" +
            obj[i].desarrolladores +
            "</td></tbody>" ;
    }
    document.getElementById("demo").innerHTML = table;

}


