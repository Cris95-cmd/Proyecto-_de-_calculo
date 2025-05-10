<?php
// Inicia sesiones (útil para logins futuros)
session_start();

if (isset($_SESSION['registro_exitoso'])) {
    echo '<div class="alert success" style="text-align: center; margin: 20px auto; max-width: 500px;">¡Registro exitoso! Ya puedes iniciar sesión</div>';
    unset($_SESSION['registro_exitoso']);
}

// Conecta a la base de datos (si es necesario)
require_once 'Sistema/conexion.php';

// Ejemplo: Mostrar un mensaje dinámico
$mensaje_bienvenida = "¡Bienvenido al curso de cálculo!";
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cálculo Continuo</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/index.css" />
</head>
<body>

  <header>
    <div class="navbar">
      <div class="logo">
        <img src="Imagenes/logo.png" alt="Logo" class="logo-img" />
        Cálculo Continuo</div>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Acceder</a>
        <!-- Más enlaces -->
      </nav>
    </div>
  </header>

  <main class="main-content">
    <section class="section">
      <h1>Bienvenido a Cálculo Continuo</h1> <br><br>
      <p>Este portal está diseñado para estudiantes de preparatoria y universidad interesados en aprender cálculo </p> <br><br>
    </section>

    <section class="section">
      <h3>¿Qué encontrarás aquí?</h3>
      <p>Contenido organizado por temas, ejercicios interactivos, evaluaciones y recursos visuales para mejorar tu comprensión del cálculo.</p>
    </section>

 <!-- ===== NUEVO FORMULARIO DE LOGIN ===== -->
    <section class="section">
      <div class="auth-form">
        <h3>Iniciar sesión</h3>
        <form action="Sistema/procesar_login.php" method="POST">
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" name="email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" class="form-control" required>
          </div>
          <button type="submit" class="btn">Acceder</button>
        </form>
        <div class="auth-links">
          <a href="registro.php">¿No tienes cuenta? Regístrate</a>
        </div>
      </div>
    </section>

  </main>

  <script src="js/main.js"></script>
  
</body>
</html>


