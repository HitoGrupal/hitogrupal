<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
<header>
			<link rel="stylesheet" type="text/css" href="css/marcos_xml.css"/>
		</header>
		<body>
		<h1>Liga: <xsl:value-of select="root/Liga"/>; pais: <xsl:value-of select="root/Pais"/> </h1>

		<table border="0" cellpadding="0" cellspacing="0" >
			<tr>
				<th>Entrenador</th>
				<th>Año de fundacion</th>
				<th>   Jugadores</th>
			</tr>
			<xsl:for-each select="root/clubs/element">
				<tr>
					<td><xsl:value-of select="entrenador"/></td>
					<td><xsl:value-of select="fundacion"/></td>
					<td>
						<ul>
						<xsl:for-each select="jugadores/element">

							<li><xsl:value-of select="name"/></li>

						</xsl:for-each>
						</ul>
					</td>
				</tr>
			</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
