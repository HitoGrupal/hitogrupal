<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
		<link rel="stylesheet" type="text/css" href="../css_xml/estilos_xml.css"/>
		</head>
		<body>
			<table border="1" class="grid-container">
			<tr>
				<th class="item1">Nombre</th>
				<th class="item2">Año</th>
				<th class="item3">Descripción</th>
			</tr>
			<xsl:for-each select="biblioteca/lenguaje">
				<tr>
					<td class="item4"><xsl:value-of select="nombre"/></td>
					<td class="item5"><xsl:value-of select="año"/></td>
					<td class="item6"><xsl:value-of select="desc"/></td>
				</tr>
			</xsl:for-each>
		</table>
		<div id="boton"><a href="../../david.html"><button>Volver</button></a></div>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>