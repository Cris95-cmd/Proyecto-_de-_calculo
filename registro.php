<?php
session_start();
require_once 'Sistema/conexion.php';

$error = '';

// Al registrar exitosamente (dentro del else)
$_SESSION['registro_exitoso'] = true;
unset($_SESSION['login_error']); // Limpia posibles errores previos
header("Location: index.php");
exit();

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
                header("Location: index.php");
                exit();
            }
        } catch(PDOException $e) {
            $error = "Error al registrar: " . $e->getMessage();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro | Cálculo Continuo</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/registro.css">
</head>
<body>
  <main class="main-content">
    <section class="section">
      <div class="auth-form">
        <h3>Crear cuenta nueva</h3>
        
        <?php if ($error): ?>
          <div class="alert error"><?php echo $error; ?></div>
        <?php endif; ?>

        <form method="POST" action="registro.php">
          <div class="form-group">
            <label for="nombre">Nombre completo</label>
            <input type="text" id="nombre" name="nombre" class="form-control" required>
          </div>
          
          <div class="form-group">
            <label for="edad">Edad</label>
            <input type="number" id="edad" name="edad" class="form-control" min="15" max="100" required>
          </div>
          
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" name="email" class="form-control" required>
          </div>
          
          <div class="form-group">
            <label for="password">Contraseña (máx. 20 caracteres)</label>
            <input type="password" id="password" name="password" class="form-control" maxlength="20" required>
          </div>
          
          <div class="form-group">
            <label for="confirm_password">Repetir contraseña</label>
            <input type="password" id="confirm_password" name="confirm_password" class="form-control" maxlength="20" required>
          </div>
          
          <button type="submit" class="btn">Registrarse</button>
        </form>
      </div>
    </section>
  </main>
</body>
</html>