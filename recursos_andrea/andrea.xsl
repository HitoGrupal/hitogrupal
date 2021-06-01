<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
		<title>Entrenadores</title>
		<link rel="stylesheet" type="text/css" href="../css/andrea2.css"/>
			</head>
		<body>
			<a id="titulo">Los entrenadores</a>
		<table border="1">
			<tr>
				<th>Nombre</th>
				<th>Apellido</th>
				<th>Edad</th>
				<th>País</th>
			</tr>
			<xsl:for-each select="futbol1/futbol">
				<tr>
					<td><xsl:value-of select="nombre"/></td>
					<td><xsl:value-of select="apellidos"/></td>
					<td><xsl:value-of select="edad"/></td>
					<td><xsl:value-of select="pais"/></td>
				</tr>
			</xsl:for-each>
		</table>
		<a href="../andrea.html" id="Boton1">volver</a>

		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>