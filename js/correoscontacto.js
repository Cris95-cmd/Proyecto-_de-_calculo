document.addEventListener('DOMContentLoaded', function() {
  const correos = document.querySelectorAll('.correo-link');
  
  correos.forEach(correo => {
    correo.addEventListener('click', function(e) {
      e.preventDefault();
      
      const email = this.getAttribute('data-email');
      const subject = encodeURIComponent(this.getAttribute('data-subject') || '');
      
      // Primero intentamos con mailto tradicional
      const mailtoLink = `mailto:${email}?subject=${subject}`;
      window.location.href = mailtoLink;
      
      // Si después de 500ms no se abrió el cliente de correo, redirigimos a Gmail
      setTimeout(() => {
        if(document.hidden === false) {
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`, '_blank');
        }
      }, 500);
    });
  });
});