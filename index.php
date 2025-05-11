<?php
session_start();

// Mensaje de registro exitoso
if (isset($_SESSION['registro_exitoso'])) {
    echo '<div class="registro-exitoso">¡Registro exitoso! Ya puedes iniciar sesión</div>';
    unset($_SESSION['registro_exitoso']);
}

// Mensaje de error de login
if (isset($_SESSION['login_error'])) {
    echo '<div class="login-error">' . $_SESSION['login_error'] . '</div>';
    unset($_SESSION['login_error']);
}
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
        Cálculo Continuo
      </div>
      <nav>
        <a href="index.php">Inicio</a>
        <a href="registro.php">Registro</a>
      </nav>
    </div>
  </header>

  <main class="main-content">
    <section class="section">
      <h1>Bienvenido a Cálculo Continuo</h1>
      <p>Este portal está diseñado para estudiantes de preparatoria y universidad interesados en aprender cálculo.</p>
    </section>

    <section class="section">
      <h3>¿Qué encontrarás aquí?</h3>
      <p>Contenido organizado por temas, ejercicios interactivos, evaluaciones y recursos visuales.</p>
    </section>

    <!-- FORMULARIO DE LOGIN (COMPLETO) -->
    <section class="section">
      <div class="auth-form">
        <h3>Iniciar sesión</h3>
        <form method="POST" action="Sistema/procesar_login.php">
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" name="email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" class="form-control" required>
          </div>
          <button type="submit" class="btn">Iniciar sesión</button>
          <div class="auth-links">
            ¿No tienes cuenta? <a href="registro.php">Regístrate aquí</a>
          </div>
        </form>
      </div>
    </section>
  </main>

  <script src="js/main.js"></script>
</body>
</html>