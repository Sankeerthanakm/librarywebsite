
function validateLoginForm() {
    const emailPhoneInput = document.getElementById('emailPhone');
    const passwordInput = document.getElementById('password');
    const emailPhoneError = document.getElementById('emailPhoneError');
    const passwordError = document.getElementById('passwordError');
    const passwordStrength = document.getElementById('passwordStrength');
    const form = document.getElementsByClassName('login-form');


    emailPhoneError.textContent = '';
    passwordError.textContent = '';
    passwordStrength.textContent = '';


    const emailPhoneValue = emailPhoneInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    const additionalPhoneFormats = /^(?:(?:\+|0{0,2})91(\s*[-.\s]*)?|[0]?)?[6789]\d{2}[-.\s]?\d{3}[-.\s]?\d{4}$/;

    if (!(emailRegex.test(emailPhoneValue) || phoneRegex.test(emailPhoneValue) || additionalPhoneFormats.test(emailPhoneValue))) {
        emailPhoneError.textContent = 'Invalid email or phone number';
        return false;
    }



    const passwordValue = passwordInput.value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(passwordValue)) {
        passwordError.textContent = 'Invalid password format';
        return false;
    }


    const passwordStrengthText = getPasswordStrengthText(passwordValue);
    passwordStrength.textContent = `Password Strength: ${passwordStrengthText}`;
    passwordStrength.style.color = getPasswordStrengthColor(passwordStrengthText);


    setTimeout(() => {
        form.submit()
    }, 8000);

    return true;
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
