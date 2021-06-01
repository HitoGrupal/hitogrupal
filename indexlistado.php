<?php

require 'indexconexion.php'; // Incluimos el php donde nos conectamos a la BBDD

// Declaramos una variable select que realice el select en la BBDD

$select="SELECT * FROM hitogrupal.alumnos ORDER BY NOMBRE ASC";

// Ejecutamos el select

$rs = $conectar->execute( $select );
?>

<!-- HTML que muestra una tabla con los campos de la tabla de la BBDD -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="description"
	  content="Web que conecta con la BBDD">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <link rel="stylesheet" type="text/css" href="css/index5.css">
    <title>Valoraciones</title>
</head>

<body background="adaya/imagen.jpeg">
    <article>
   <h2>Listado con las valoraciones de los compañeros:</h2>
 </article>
 <article>
  <table>
    <thead>
      <tr>
        <th>Id del alumno</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Página web</th>
        <th>Valoración del trabajo</th>
      </tr>
    </thead>
    <tbody>
    </article>
 <?php

    // PHP donde recorrer cada fila de la tabla de la BBDD, asociando
    // las variables con los campos de la BBDD

    foreach( $rs as $clave=>$fila ){
        $idUsuario  = $fila['idUsuario'];
        $nombre     = $fila['nombre'];
        $apellido  = $fila['apellido'];
        $pagina  = $fila['pagina_web'];
        $valoracion    = $fila['valoracion'];
 ?> 
 
 <!-- HTML donde completar la tabla con los datos recogidos de la BBDD por el PHP -->
    <tr>
      <td><?php echo $idUsuario;       ?></td>
      <td><?php echo $nombre;    ?></td>
      <td><?php echo $apellido; ?></td>
      <td><?php echo $pagina; ?></td>
      <td><?php echo $valoracion; ?></td>
    </tr>
  
<?php 
// Cerramos el foreach del PHP
}
?>

</tbody>
  </table>
  <p></p>
      <a href="javascript: history.go(-1)">Volver</a>
</body>
</html>

<?php
// Cerramos la conexión con la BBDD
include 'indexcerrarconexion.php';
?>
