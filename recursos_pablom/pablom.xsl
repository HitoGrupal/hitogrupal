<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   	<xsl:template match="/">
         	<html>
                <head>
                    <link rel="stylesheet" type="text/css" href="estilo2.css"/>
                </head>
         	<body>
         	<h1>Información sobre las Principales Marcas de SmartPhones</h1>
                <center>
                    <a href="../pablom.html" class="botones">Volver a la Página Principal</a>
                </center>
                    <table border="1">
                        <tr>
                            <th align="center">Marca</th>
                            <th align="center">Año de Fundacion</th>
                            <th align="center">Fundador</th>
                            <th align="center">Sede</th>
                            <th align="center">Principales Modelos</th>
                            <th align="center">Logo</th>
                        </tr>
            <xsl:for-each select="marcas/tipo1">
                        <tr>
                            <td align="center"><xsl:value-of select="marca/nombreMarca"/></td>
                            <td align="center"><xsl:value-of select="marca/nombreMarca"/></td>
                            <td align="center"><xsl:value-of select="fundador/persona"/></td>
                            <td align="center"><xsl:value-of select="origen/pais"/></td>
                            <td align="center"><xsl:value-of select="modelo/nombre"/></td>
                            <td align="center">
                                <center>
                                <img src="imagenespablom/logoapple.jpg"/>
                                </center>
                            </td>
                        </tr>
         	</xsl:for-each>
            <xsl:for-each select="marcas/tipo2">
                        <tr>
                            <td align="center"><xsl:value-of select="marca/nombreMarca"/></td>
                            <td align="center"><xsl:value-of select="año/fundacion"/></td>
                            <td align="center"><xsl:value-of select="fundador/persona"/></td>
                            <td align="center"><xsl:value-of select="origen/pais"/></td>
                            <td align="center"><xsl:value-of select="modelo/nombre"/></td>
                            <td align="center">
                                <center>
                                <img src="imagenespablom/logosamsung.jpg"/>
                                </center>
                            </td>
                        </tr>
            </xsl:for-each>
             <xsl:for-each select="marcas/tipo3">
                        <tr>
                            <td align="center"><xsl:value-of select="marca/nombreMarca"/></td>
                            <td align="center"><xsl:value-of select="año/fundacion"/></td>
                            <td align="center"><xsl:value-of select="fundador/persona"/></td>
                            <td align="center"><xsl:value-of select="origen/pais"/></td>
                            <td align="center"><xsl:value-of select="modelo/nombre"/></td>
                            <td align="center">
                                <center>
                                <img src="imagenespablom/logoxiaomi.jpg"/>
                                </center>
                            </td>
                        </tr>
            </xsl:for-each>
             <xsl:for-each select="marcas/tipo4">
                        <tr>
                            <td align="center"><xsl:value-of select="marca/nombreMarca"/></td>
                            <td align="center"><xsl:value-of select="año/fundacion"/></td>
                            <td align="center"><xsl:value-of select="fundador/persona"/></td>
                            <td align="center"><xsl:value-of select="origen/pais"/></td>
                            <td align="center"><xsl:value-of select="modelo/nombre"/></td>
                            <td align="center">
                                <center>
                                <img src="imagenespablom/logooneplus.jpg"/>
                                </center>
                            </td>
                        </tr>
            </xsl:for-each>
             <xsl:for-each select="marcas/tipo5">
                        <tr>
                            <td align="center"><xsl:value-of select="marca/nombreMarca"/></td>
                            <td align="center"><xsl:value-of select="año/fundacion"/></td>
                            <td align="center"><xsl:value-of select="fundador/persona"/></td>
                            <td align="center"><xsl:value-of select="origen/pais"/></td>
                            <td align="center"><xsl:value-of select="modelo/nombre"/></td>
                            <td align="center">
                                <center>
                                <img src="imagenespablom/logooppo.jpg"/>
                                </center>
                            </td>
                        </tr>
            </xsl:for-each>
             <xsl:for-each select="marcas/tipo6">
                        <tr>
                            <td align="center"><xsl:value-of select="marca/nombreMarca"/></td>
                            <td align="center"><xsl:value-of select="año/fundacion"/></td>
                            <td align="center"><xsl:value-of select="fundador/persona"/></td>
                            <td align="center"><xsl:value-of select="origen/pais"/></td>
                            <td align="center"><xsl:value-of select="modelo/nombre"/></td>
                            <td align="center">
                                <center>
                                <img src="imagenespablom/logohuawei.jpg"/>
                                </center>
                            </td>
                        </tr>
                       <br/>
            </xsl:for-each>
             </table>
         	</body>
         	</html>
   	</xsl:template>
</xsl:stylesheet>
