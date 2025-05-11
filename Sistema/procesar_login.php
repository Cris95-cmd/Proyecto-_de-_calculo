<?php
session_start();
require_once 'conexion.php'; // Ya está usando PDO

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);
    $password = $_POST['password'];

    // 1. Validar campos vacíos
    if (empty($email) || empty($password)) {
        $_SESSION['login_error'] = "Todos los campos son obligatorios";
        header("Location: ../index.php");
        exit();
    }

    try {
        // 2. Buscar usuario en la BD (con PDO)
        $sql = "SELECT id, email, password FROM usuarios WHERE email = :email";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->execute();

        if ($stmt->rowCount() === 1) {
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            // 3. Verificar contraseña (asume que usaste password_hash)
            if (password_verify($password, $usuario['password'])) {
                // 4. Crear sesión y redirigir
                $_SESSION['usuario_id'] = $usuario['id'];
                $_SESSION['usuario_email'] = $usuario['email'];
                header("Location: ../cursos.html");
                exit();
            } else {
                $_SESSION['login_error'] = "Contraseña incorrecta";
            }
        } else {
            $_SESSION['login_error'] = "Usuario no encontrado";
        }
    } catch (PDOException $e) {
        $_SESSION['login_error'] = "Error en el sistema. Intenta más tarde.";
        error_log("Error de login: " . $e->getMessage()); // Registra el error en el servidor
    }

    // Redirigir de vuelta si hay errores
    header("Location: ../index.php");
    exit();
}
?>