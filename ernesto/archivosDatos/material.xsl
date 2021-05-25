<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template match="/">
		<html>
			<link rel="stylesheet" href="../css/materiales.css"/>
		<body>
		<h1>Alquiler de material</h1>
		<table>
			<tr>
				<th>Nombre</th>
				<th>Descripción</th>
				<th>Imagen</th>
				
			</tr>
			<xsl:for-each select="listaMaterial/articulo">
				<tr>
					<td><xsl:value-of select="nombre"/></td>
					<td><xsl:value-of select="descripcion"/></td>
					<td>
       				 	<img>
         			 	<xsl:attribute name="src">
            		 		<xsl:value-of select="imagen"/>
         			 	</xsl:attribute>       
       				 </img>
   				 </td>					
					
				</tr>
			</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>