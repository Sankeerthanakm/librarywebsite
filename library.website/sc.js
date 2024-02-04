
function validateSignUpForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  
  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    nameError.textContent = 'Name is required';
    return false;
  }

  
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'Invalid email address';
    return false;
  }

  const passwordValue = passwordInput.value.trim();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(passwordValue)) {
    passwordError.textContent = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number';
    return false;
  }

  
  return true;
}
