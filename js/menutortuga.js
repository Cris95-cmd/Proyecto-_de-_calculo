// js/menuToggle.js
document.addEventListener('DOMContentLoaded', function() {
  // Selectores que funcionan en ambas páginas
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar nav');
  const currentPage = window.location.pathname.split('/').pop();

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Actualiza el enlace activo
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active-link');
      }
      
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
});