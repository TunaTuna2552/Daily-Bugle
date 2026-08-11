document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const pwInput = document.getElementById('password');
  const togglePwBtn = document.getElementById('togglePassword');
  const alertBox = document.getElementById('loginAlert');

  // Manejar inicio de sesión
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = pwInput.value.trim();

    if (!email || !password) {
      showAlert('Por favor, completa todos los campos.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showAlert('Ingresa un correo electrónico válido.', 'error');
      return;
    }

    // Guardar sesión de usuario
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);

    showAlert('¡Inicio de sesión exitoso! Accediendo a noticias exclusivas de Spider-Man...', 'success');
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1200);
  });

  function showAlert(msg, type) {
    alertBox.textContent = msg;
    alertBox.className = `alert ${type}`;
  }
});
