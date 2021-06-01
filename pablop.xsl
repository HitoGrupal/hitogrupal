<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<html>
<link rel="stylesheet" type="text/css" href="pablop.css"/>
<body>
<div class="header">
  
</div>
<div class="row">
<div class="col-3 menu">
    <ul>
      <li  onclick="loadDatos();">FIFA	</li>
      <li onclick="loadDatos2();">Call Of Duty </li>
      <li onclick="loadDatos3();">Grand Theft Auto </li>
      <li onclick="loadDatos4();">Mario bros </li>
      <li onclick="loadDatos5();">Assassin’s Creed</li>
      <li onclick="loadDatos6();">Pokemon</li>
      <li> <span class="texto"><a href="pablop.xml">Otros juegos </a></span></li>
      <img class="img1" src="pablop/gif1.gif"></img>
    </ul>
  </div>
<div class="col-6">

<table border="1">
<thead>
<tr>
<th>Titulo</th>
<th>Fecha</th>
<th>Plataforma</th>
<th>Desarrolladores</th>
</tr>
</thead>
<xsl:for-each select="juegos/juego">
<tbody>
<td>
<xsl:value-of select="titulo"/>
</td>
<td>
<xsl:value-of select="fecha"/>
</td>
<td>
<xsl:value-of select="plataformas"/>
</td>
<td>
<xsl:value-of select="desarrolladores"/>
</td>
</tbody>
</xsl:for-each>
</table>

  <div class="div_personalizado">
<a class="boton_personalizado" href="pablop.html">Volver a juegos</a>
</div>
</div>

<div class="col-3 right">
    <div class="aside">
      <p><a href="https://es-es.facebook.com"><img src="pablop/facebook.jpg"></img></a></p>
     <p><a href="https://www.instagram.com/"><img src="pablop/instagram.jpg"></img></a></p>
      <p><a href="https://web.whatsapp.com/"><img src="pablop/whatshapp.jpg"></img></a></p>
      <p><a href="https://twitter.com/?lang=es"><img src="pablop/twitter.jpg"></img></a></p>
      
      
    </div>
  </div>
 </div>
<div class="footer">
 
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>






