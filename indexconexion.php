<?php

// PHP con el que establecemos la conexión a la BBDD

include( 'C:\xampp\htdocs\adodb5\adodb.inc.php' ); // Incluimos las librerías de ADOdb

$conectar = newADOConnection( 'mysqli' ); // Creamos la variable conectar, con la que crear una conexión

// Establecemos para crear esta conexión todos los datos necesarios

$host	= 'localhost:3306';
$user	= 'root';
$pwd	= 'curso';
$dbname	= 'hitogrupal';

$conectar->connect($host, $user, $pwd, $dbname); // Y nos conectamos

?>