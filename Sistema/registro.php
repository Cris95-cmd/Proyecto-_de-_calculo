<?php
session_start();
require_once 'conexion.php'; // Ruta ajustada (misma carpeta)

$email = $_POST['email'];
$password = $_POST['password'];

// Ejemplo básico (luego lo conectas a tu BD)
if ($email === 'admin@example.com' && $password === '123') {
    $_SESSION['logueado'] = true;
    header("Location: ../index.php"); // Redirige al index principal
} else {
    echo "Credenciales incorrectas. <a href='../index.php'>Volver</a>";
}
?>