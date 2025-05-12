<?php
$host = "localhost";
$dbname = "proyecto_calculo";  // Nombre de tu BD
$user = "root";                // Usuario por defecto en XAMPP
$pass = "";                    // Contraseña vacía por defecto

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>
