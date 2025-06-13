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


 // Función para mostrar/ocultar soluciones
    function toggleSolution1(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    // Función para verificar evaluación de función (versión mejorada)
    function checkEvaluation1() {
      const inputs = [
        document.getElementById('eval-input1.1').value.trim(),
        document.getElementById('eval-input1.2').value.trim(),
        document.getElementById('eval-input1.3').value.trim(),
        document.getElementById('eval-input1.4').value.trim(),
        document.getElementById('eval-input1.5').value.trim()
      ];
      
      const correctAnswers = ["3", "3", "9", "6", "14"];
      const feedback = document.getElementById('eval-feedback1');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }

    function toggleSolution2(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkEvaluation2() {
      const inputs = [
        document.getElementById('eval-input2.1').value.trim(),
        document.getElementById('eval-input2.2').value.trim(),
        document.getElementById('eval-input2.3').value.trim()
      ];
      
      const correctAnswers = ["2", "8", "1" ];
      const feedback = document.getElementById('eval-feedback2');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }

     function toggleSolution3(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkEvaluation3() {
      const inputs = [
        document.getElementById('eval-input3.1').value.trim(),
        document.getElementById('eval-input3.2').value.trim(),
        document.getElementById('eval-input3.3').value.trim(),
        document.getElementById('eval-input3.4').value.trim(),
        document.getElementById('eval-input3.5').value.trim(),
        document.getElementById('eval-input3.6').value.trim(),
        document.getElementById('eval-input3.7').value.trim()
      ];
      
      const correctAnswers = ["5", "5", "10", "25", "10", "75", "85" ];
      const feedback = document.getElementById('eval-feedback3');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }
    

     function toggleSolution4(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkEvaluation4() {
      const inputs = [
        document.getElementById('eval-input4.1').value.trim(),
        document.getElementById('eval-input4.2').value.trim(),
        document.getElementById('eval-input4.3').value.trim(),
        document.getElementById('eval-input4.4').value.trim(),
        document.getElementById('eval-input4.5').value.trim(),
        document.getElementById('eval-input4.6').value.trim(),
        document.getElementById('eval-input4.7').value.trim(),
        document.getElementById('eval-input4.8').value.trim(),
        document.getElementById('eval-input4.9').value.trim(),
        document.getElementById('eval-input4.10').value.trim()
      ];
      
      const correctAnswers = ["2", "2", "2", "16", "4", "2", "16", "8", "2", "4" ];
      const feedback = document.getElementById('eval-feedback4');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }

     function toggleSolution5(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkEvaluation5() {
      const inputs = [
        document.getElementById('eval-input5.1').value.trim(),
        document.getElementById('eval-input5.2').value.trim(),
        document.getElementById('eval-input5.3').value.trim()
      ];
      
      const correctAnswers = ["20", "60", "-40" ];
      const feedback = document.getElementById('eval-feedback5');
      
      let allCorrect = true;
      for (let i = 0; i < 5; i++) {
        if (inputs[i] !== correctAnswers[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Correcto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }
    

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Función para verificar dominio

    function toggleSolution6(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkDomain1() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback1');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "A") {
        feedback.textContent = "¡Correcto! El dominio es (-∞, 4] porque la expresión dentro de la raíz debe ser ≥ 0";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (-∞, 4) U (4, ∞) porque la expresión de debajo de la fracción debe ser distinta de 0";
        feedback.className = "feedback incorrect";
      }
    }

    function toggleSolution8(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkDomain3() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback3');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "A") {
        feedback.textContent = "¡Correcto! El dominio es (0, ∞) porque la expresión de debajo de la fracción debe ser distinta de 0 y ademas la raiz debe ser positiva";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (0, ∞) porque x debe ser > 0";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution7(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkDomain2() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback2');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "B") {
        feedback.textContent = "¡Correcto! El dominio es (-∞, 4) U (4, ∞) porque la expresión de debajo de la fracción debe ser distinta de 0";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (-∞, 4] porque 4-x debe ser ≥ 0";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution9(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkDomain4() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback4');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "C") {
        feedback.textContent = "¡Correcto! El dominio es (-∞, ∞) porque no hay ninguna restricción para esta función";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (-∞, ∞) porque no hay ninguna restricción para x - 1";
        feedback.className = "feedback incorrect";
      }
    }



    function toggleSolution10(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkDomain5() {
      const selected = document.querySelector('input[name="dominio"]:checked');
      const feedback = document.getElementById('domain-feedback5');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "D") {
        feedback.textContent = "¡Correcto! El dominio es (-∞, 1) U (1, ∞) porque conflictua solo en el 1";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (-∞, 1) U (1, ∞) porque conflictua solo en el 1";
        feedback.className = "feedback incorrect";
      }
    }


    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Función para verificar tabla de valores
    function toggleSolution11(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable1() {
      const val1 = document.getElementById('val1.1').value.trim();
      const val2 = document.getElementById('val1.2').value.trim();
      const val3 = document.getElementById('val1.3').value.trim();
      const val4 = document.getElementById('val1.4').value.trim();
      const feedback = document.getElementById('table-feedback1');
      
      const correct = ["1", "2", "4", "8"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }


     function toggleSolution12(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable2() {
      const val1 = document.getElementById('val2.1').value.trim();
      const val2 = document.getElementById('val2.2').value.trim();
      const val3 = document.getElementById('val2.3').value.trim();
      const val4 = document.getElementById('val2.4').value.trim();
      const feedback = document.getElementById('table-feedback2');
      
      const correct = ["0", "-1", "0", "3"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution13(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable3() {
      const val1 = document.getElementById('val3.1').value.trim();
      const val2 = document.getElementById('val3.2').value.trim();
      const val3 = document.getElementById('val3.3').value.trim();
      const val4 = document.getElementById('val3.4').value.trim();
      const feedback = document.getElementById('table-feedback3');
      
      const correct = ["0", "1", "2", "3"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }


     function toggleSolution14(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable4() {
      const val1 = document.getElementById('val4.1').value.trim();
      const val2 = document.getElementById('val4.2').value.trim();
      const val3 = document.getElementById('val4.3').value.trim();
      const val4 = document.getElementById('val4.4').value.trim();
      const feedback = document.getElementById('table-feedback4');
      
      const correct = ["-3", "0", "3", "24"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }

     function toggleSolution15(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    
    function checkTable5() {
      const val1 = document.getElementById('val5.1').value.trim();
      const val2 = document.getElementById('val5.2').value.trim();
      const val3 = document.getElementById('val5.3').value.trim();
      const val4 = document.getElementById('val5.4').value.trim();
      const feedback = document.getElementById('table-feedback5');
      
      const correct = ["0", "1", "2", "3"];
      const answers = [val1, val2, val3, val4];
      
      let allCorrect = true;
      for (let i = 0; i < 4; i++) {
        if (answers[i] !== correct[i]) {
          allCorrect = false;
          break;
        }
      }
      
      if (allCorrect) {
        feedback.textContent = "¡Perfecto! Todos los valores son correctos";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Algunos valores son incorrectos. Revisa tus cálculos.";
        feedback.className = "feedback incorrect";
      }
    }
    

    //----------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Función para verificar paridad

     function toggleSolution16(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity1() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback1');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "B") {
        feedback.textContent = "¡Correcto! La función es impar porque f(-x) = -f(x)";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función es impar porque f(-x) = -f(x)";
        feedback.className = "feedback incorrect";
      }
    }


     function toggleSolution17(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity2() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback2');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "A") {
        feedback.textContent = "¡Correcto! La función es par porque f(-x) = f(x)";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función es par porque f(-x) = f(x)";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution18(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity3() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback3');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "C") {
        feedback.textContent = "¡Correcto! La función no cumple con las condiciones de par e impar";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función no cumple con las condiciones de par e impar";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution19(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity4() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback4');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "C") {
        feedback.textContent = "¡Correcto! La función no cumple con las condiciones de par e impar";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función no cumple con las condiciones de par e impar";
        feedback.className = "feedback incorrect";
      }
    }




    function toggleSolution20(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }
    function checkParity5() {
      const selected = document.querySelector('input[name="paridad"]:checked');
      const feedback = document.getElementById('parity-feedback5');
      
      if (!selected) {
        feedback.textContent = "Por favor selecciona una opción";
        feedback.className = "feedback incorrect";
        return;
      }
      
      if (selected.value === "A") {
        feedback.textContent = "¡Correcto! La función es par porque f(-x) = f(x)";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La función es par porque f(-x) = f(x)";
        feedback.className = "feedback incorrect";
      }
    }
    
    


    //----------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Función para verificar transformación

     function toggleSolution21(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkTransform1() {
      const input = document.getElementById('transform-input1').value.trim().replace(/\s+/g, '');
      const feedback = document.getElementById('transform-feedback1');
      
      // Acepta diferentes formas equivalentes de la respuesta
      const correctAnswers = [
        "(x-2)^2+3",
        "1*(x-2)^2+3",
        "3+(x-2)^2",
        "pow(x-2,2)+3",
        "3+pow(x-2,2)"
      ];
      
      if (correctAnswers.includes(input)) {
        feedback.textContent = "¡Correcto! La función transformada es (x-2)² + 3";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (x-2)² + 3";
        feedback.className = "feedback incorrect";
      }
    }


    function toggleSolution22(id) {
      const solution = document.getElementById(id);
      solution.style.display = solution.style.display === 'block' ? 'none' : 'block';
    }

    function checkTransform2() {
      const input = document.getElementById('transform-input2').value.trim().replace(/\s+/g, '');
      const feedback = document.getElementById('transform-feedback2');
      
      // Acepta diferentes formas equivalentes de la respuesta
      const correctAnswers = [
        "(x-5)-1",
        "-1+(x-5)"
      ];
      
      if (correctAnswers.includes(input)) {
        feedback.textContent = "¡Correcto! La función transformada es (x-5) - 1";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrecto. La respuesta correcta es (x-5) - 1";
        feedback.className = "feedback incorrect";
      }
    }