<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">

		<html>
				<head>
				<link rel="stylesheet" type="text/css" href="css/adrian.css"/>
			<style type="text/css">
				body{
					  background-color:#222222;
					}

				  
 			table{
  				border-collapse: collapse;
  				margin: auto;
  				font-family: Helvetica, Arial, sans-serif;
 				width: 640px; 
 				border-collapse: collapse;
 				background-color:#998f8e;
 				text-align:center;
 				width: 75%; 
			}
			header{
			text-align:center;
			font-size: 500%;
			 color: #FF1177 ;
			}
			</style>
				</head>
				<header>Horarios y Precios</header>
		<body>
		
		<table id="tabla2"	border="1">

			<tr>
					<th>Nombre</th>
					<th>Hora</th>
					<th>Precio</th>
					
				
				</tr>
			
		<xsl:for-each select="peliculas/pelicula">
				
				
				<tr>
					<td><xsl:value-of select="nombre"/></td>
					<td><xsl:value-of select="hora"/></td>
					<td><xsl:value-of select="precio"/></td>
					
						
						
				
				</tr>
			
		
		</xsl:for-each>
			
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>


