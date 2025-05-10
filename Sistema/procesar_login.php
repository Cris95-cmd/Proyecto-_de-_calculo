<?php
session_start();
require_once 'Sistema/conexion.php';

$email = $_POST['email'];
$password = $_POST['password'];

// Validación básica (ajusta con tu BD después)
if ($email === 'admin@example.com' && $password === '123') {
    $_SESSION['logueado'] = true;
    header("Location: index.php");
} else {
    echo "Credenciales incorrectas. <a href='index.php'>Volver</a>";
}
?>