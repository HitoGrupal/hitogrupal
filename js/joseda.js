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

function loadAgenda() {
    ajax.open("GET", "datos.json");
    ajax.send();
}

function generarTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="</th><th>UEFA CHAMPIONS LEAGUE</th><th>MUNDIALES DE CLUBES</th><th>SUPER COPAS DE EUROPA</th><th>LIGAS</th><th>COPAS DEL REY</th><th>SUPERCOPAS DE ESPAÑA</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].uefa +
            "</td><td>" +
            obj[i].mundiales +
            "</td><td>"+
              obj[i].supercopa +
            "</td><td>"+
              obj[i].ligas +
            "</td><td>"+
              obj[i].copas_rey +
            "</td><td>"+
              obj[i].supercopa_españa +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}
