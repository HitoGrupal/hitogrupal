<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
		<head>
			<link rel="stylesheet" href="css/index5.css"/>
		</head>

		<body background="adaya/imagen.jpeg">

		<section>
			<article>
				<h2>Comentarios de los compañeros</h2>
			</article>
			<article>
				<table border="1">
				<tr>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>Comentario</th>
				</tr>
					<xsl:for-each select="clase/alumno">
					<tr>
						<td><xsl:value-of select="nombre"/></td>
						<td><xsl:value-of select="apellido"/></td>
						<td><xsl:value-of select="comentario"/></td>
					</tr>
					</xsl:for-each>
				</table>
				<p></p>
			<a href="javascript: history.go(-1)">Volver</a>
			</article>
		</section>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>