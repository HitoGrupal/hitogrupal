<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<meta charset="utf-8"/>
				<title>Formato XSL</title>
				<link rel="stylesheet" type="text/css" href="css/joseda.css"/>
			</head>
		<body>
		<h1>Su pasado en el Manchester United</h1>
		<table border="2">
			<tr>
				<th>Premier League</th>
				<th>FA Cup</th>
				<th>Community Shield</th>
				<th>League Cup</th>
				<th>Champions League</th>
				<th>FIFA Club World Cup</th>
			</tr>
			<xsl:for-each select="trofeos/trofeo">
				<tr>
					<td><xsl:value-of select="premier"/></td>
					<td><xsl:value-of select="fa"/></td>
					<td><xsl:value-of select="shield"/></td>
					<td><xsl:value-of select="league"/></td>
					<td><xsl:value-of select="champions"/></td>
					<td><xsl:value-of select="world"/></td>

			</tr>
			</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>