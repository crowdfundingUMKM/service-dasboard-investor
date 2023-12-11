// utils.js

export function togglePasswordVisibility() {
    const passwordInput = document.getElementById('yourPassword');
    const showHideBtn = document.getElementById('showHideBtn');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showHideBtn.innerHTML = '<i class="bi bi-eye"></i>';
    } else {
      passwordInput.type = 'password';
      showHideBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
  }
  