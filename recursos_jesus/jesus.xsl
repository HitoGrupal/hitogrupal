<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="css/jesus1.css"/>
			</head>
		<body>
		<h1></h1>
		<table>
			<tr>
				<th>Marca</th>
				<th>Modelo</th>
				<th>Matricula</th>
				<th>Plazas</th>
				<th>Nombre Motor</th>
				<th>Caballos</th>
				<th>Cilindros</th>
				<th>Color</th>
				<th>Precio</th>
			</tr>
			<xsl:for-each select="coches/coche">
				<tr>
					<td><xsl:value-of select="marca"/></td>
					<td><xsl:value-of select="modelo"/></td>
					<td><xsl:value-of select="matricula"/></td>
					<td><xsl:value-of select="plazas"/></td>
					<td><xsl:value-of select="nombremotor"/></td>
					<td><xsl:value-of select="caballos"/></td>
					<td><xsl:value-of select="cilindros"/></td>
					<td><xsl:value-of select="color"/></td>
					<td><xsl:value-of select="precio"/></td>
				</tr>
			</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>