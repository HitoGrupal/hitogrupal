<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
		<head>
			<link rel="stylesheet" href="css/estilo.css" />
		</head>
		<body>
		<h1>Peliculas</h1>
        <a href="andres.html"> Página Principal </a>
		<table border="1">
			<tr>
				<th>Titulo</th>
				<th>Director</th>
				<th>Asignaturas</th>
			</tr>
			<xsl:for-each select="cine/pelicula">
				<tr>
					<td><xsl:value-of select="titulo"/></td>
					<td><xsl:value-of select="director"/></td>
					<td>
						<xsl:for-each select="reparto">
                        <ul><xsl:value-of select="."/></ul>
                        </xsl:for-each>
					</td>
				</tr>
			</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>