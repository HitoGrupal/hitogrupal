<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<meta charset="utf-8"/>
				<title>Animales</title>
				<link rel="stylesheet" type="text/css" href="css/victor.css"/>
			</head>
		<body>
		<h1>Principales animales del safari</h1>
		<section>
			<nav>
				<a href="victor.html">PRINCIPAL</a>
			</nav>
		</section>
		<h2>Carnivoros</h2>
		<table border="2">
			<tr>
				<th>Nombre</th>
				<th>Clase</th>
				<th>Suborden</th>
				<th>Tamaño</th>
				<th>Peso</th>
			</tr>
			<xsl:for-each select="animales/Carnivoros/animal">
				<tr>
					<td><xsl:value-of select="nombre"/></td>
					<td><xsl:value-of select="clase"/></td>
					<td><xsl:value-of select="suborden"/></td>
					<td>Longitud:<xsl:value-of select="./tamaño/longitud"/> <br></br>
					Altura<xsl:value-of select="./tamaño/altura"/></td>
					<td><xsl:value-of select="peso"/></td>
				</tr>
			</xsl:for-each>
		</table>
		<h2>Herbivoros</h2>
		<table border="2">
			<tr>
				<th>Nombre</th>
				<th>Clase</th>
				<th>Suborden</th>
				<th>Tamaño</th>
				<th>Peso</th>
			</tr>
			<xsl:for-each select="animales/Herbivoros/animal">
				<tr>
					<td><xsl:value-of select="nombre"/></td>
					<td><xsl:value-of select="clase"/></td>
					<td><xsl:value-of select="suborden"/></td>
					<td>Longitud:<xsl:value-of select="./tamaño/longitud"/> <br></br>
					Altura<xsl:value-of select="./tamaño/altura"/></td>
					<td><xsl:value-of select="peso"/></td>
				</tr>
			</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
