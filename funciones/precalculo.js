document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navButtons = document.querySelector('.math-nav-buttons');

    // Función para toggle del menú
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navButtons.classList.toggle('active');
        
        const spans = menuToggle.querySelectorAll('span');
        if (navButtons.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    }

    // Evento para el botón de menú
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita la propagación del evento
            toggleMenu();
        });
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.math-nav-btn');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Solo para móviles
                toggleMenu();
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (navButtons.classList.contains('active') && 
            !e.target.closest('.math-nav-buttons') && 
            !e.target.closest('.menu-toggle')) {
            toggleMenu();
        }
    });
});
