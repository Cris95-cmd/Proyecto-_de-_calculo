<?php
session_start();
require_once 'Sistema/conexion.php';

$error = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Validaciones
    if ($password !== $confirm_password) {
        $error = "Las contraseñas no coinciden";
    } elseif (strlen($password) > 20) {
        $error = "La contraseña no debe exceder 20 caracteres";
    } else {
        try {
            // Verificar si el correo ya existe
            $stmt = $conn->prepare("SELECT id FROM usuarios WHERE email = ?");
            $stmt->execute([$email]);
            
            if ($stmt->rowCount() > 0) {
                $error = "Este correo ya está registrado";
            } else {
                // Registrar usuario
                $hashed_password = password_hash($password, PASSWORD_BCRYPT);
                $stmt = $conn->prepare("INSERT INTO usuarios (nombre, edad, email, password) VALUES (?, ?, ?, ?)");
                $stmt->execute([$nombre, $edad, $email, $hashed_password]);
                
                $_SESSION['registro_exitoso'] = true;
                header("Location: ../index.php");
                exit();
            }
        } catch(PDOException $e) {
            $error = "Error al registrar: " . $e->getMessage();
        }
    }
}
?>