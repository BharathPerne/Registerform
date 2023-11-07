function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (!emailPattern.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return false;
    }
  
    if (!passwordPattern.test(passwordInput.value)) {
      alert('Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
      passwordInput.focus();
      return false;
    }
  
    return true;
  }
  