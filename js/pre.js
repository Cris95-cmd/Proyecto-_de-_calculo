document.querySelectorAll('.acordeon-titulo').forEach((boton) => {
  boton.addEventListener('click', () => {
    const seccion = boton.parentElement;
    seccion.classList.toggle('active');
  });
});
