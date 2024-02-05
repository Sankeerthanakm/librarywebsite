function validateSignUpForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');
  const form = document.getElementsByClassName('signup-form');


  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';

  // Validate Name
  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    nameError.textContent = 'Name is required';
    return false;
  }

  // Validate Email
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    emailError.textContent = 'Invalid email address';
    return false;
  }

  // Validate Phone Number
  const phoneValue = phoneInput.value.trim();
  const phoneValidation = validatePhoneNumber(phoneValue);
  if (!phoneValidation.valid) {
    phoneError.textContent = phoneValidation.message;
    return false;
  }

  // Validate Password
  const passwordValue = passwordInput.value.trim();
  const passwordValidation = validatePassword(passwordValue);
  if (!passwordValidation.valid) {
    passwordError.textContent = passwordValidation.message;
    return false;
  }

  // Indicate password strength
  indicatePasswordStrength(passwordValue);

  return true;
}

function validatePhoneNumber(phone) {
  const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
  const additionalPhoneFormats = /^(?:(?:\+|0{0,2})91(\s*[-.\s]*)?|[0]?)?[6789]\d{2}[-.\s]?\d{3}[-.\s]?\d{4}$/;

  if (phoneRegex.test(phone) || additionalPhoneFormats.test(phone)) {
    return { valid: true };
  } else {
    return { valid: false, message: 'Invalid phone number format' };
  }
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (passwordRegex.test(password)) {
    return { valid: true };
  } else {
    return {
      valid: false,
      message: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number',
    };
  }
  

}

function indicatePasswordStrength(password) {
  const strengthIndicator = document.getElementById('passwordStrength');
  const strength = getPasswordStrengthText(password);

  strengthIndicator.textContent = `Password Strength: ${strength}`;
  strengthIndicator.style.color = getPasswordStrengthColor(strength);
}



function getPasswordStrengthText(password) {
  const passwordLength = password.length;
  if (passwordLength >= 12) {
    return 'Strong';
  } else if (passwordLength >= 8) {
    return 'Medium';
  } else {
    return 'Weak';
  }
}

function getPasswordStrengthColor(strength) {
  switch (strength) {
    case 'Strong':
      return 'green';
    case 'Medium':
      return 'orange';
    case 'Weak':
    default:
      return 'red';
  }
}
