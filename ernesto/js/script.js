function ejecutarAjax() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "../archivosDatos/clientes.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>NOMBRE</th><th>APELLIDOS</th><th>EDAD</th><th>CIUDAD</th></tr>";
  var x = xmlDoc.getElementsByTagName("cliente");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("apellidos")[0].childNodes[0].nodeValue  +
    "</td><td>"+
    x[i].getElementsByTagName("edad")[0].childNodes[0].nodeValue  +
    "</td><td>"+
    x[i].getElementsByTagName("ciudad")[0].childNodes[0].nodeValue  +
    "</td></tr>";

  }
  document.getElementById("info").innerHTML = table;
}