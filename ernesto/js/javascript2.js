function ajax(){
     var resultado=document.getElementById("info");
     var xmlhttp;
     if(window.XMLHttpRequest){
          xmlhttp=new XMLHttpRequest();
      }else{
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      
      xmlhttp.onreadystatechange=function(){
           
              if(xmlhttp.readyState==4&&xmlhttp.status==200){
              
                     var datos= JSON.parse(xmlhttp.responseText);
                     
                     if(resultado.innerHTML==""){
                              for(var i in datos){
                                      resultado.innerHTML += i + ": " + datos[i] + "<br/>";
                               }
                     }
               }
         }
         xmlhttp.open("GET","../archivosDatos/datos2.json",true);
          xmlhttp.send();
    }