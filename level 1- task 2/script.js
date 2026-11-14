
const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const successMessage = document.getElementById("successMessage");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

// Validate name
function validateName() {
    const name = nameInput.value.trim();
    const error = document.getElementById("nameError");

    if (name === "") {
        return showError(nameInput, error, "Name is required.");
    }

    if (!/^[a-zA-Z ]+$/.test(name)) {
        return showError(nameInput, error, "Enter a valid name.");
    }

    return showSuccess(nameInput, error);
}

// Validate email
function validateEmail() {
    const email = emailInput.value.trim();
    const error = document.getElementById("emailError");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        return showError(emailInput, error, "Email is required.");
    }

    if (!emailPattern.test(email)) {
        return showError(emailInput, error, "Enter a valid email address.");
    }

    return showSuccess(emailInput, error);
}

// Validate phone
function validatePhone() {
    const phone = phoneInput.value.trim();
    const error = document.getElementById("phoneError");

    if (phone === "") {
        return showError(phoneInput, error, "Phone number is required.");
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        return showError(phoneInput, error, "Enter a valid 10-digit phone number.");
    }

    return showSuccess(phoneInput, error);
}

// Check password strength
function checkPasswordStrength() {
    const password = passwordInput.value;

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    strengthBar.style.width = (strength * 20) + "%";

    if (password.length === 0) {
        strengthText.textContent = "";
        strengthBar.style.background = "";
    } else if (strength <= 2) {
        strengthText.textContent = "Weak password";
        strengthBar.style.background = "#e34c4c";
    } else if (strength <= 3) {
        strengthText.textContent = "Medium password";
        strengthBar.style.background = "#e5a52b";
    } else {
        strengthText.textContent = "Strong password";
        strengthBar.style.background = "#269c68";
    }
}

// Validate password
function validatePassword() {
    const password = passwordInput.value;
    const error = document.getElementById("passwordError");

    if (password === "") {
        return showError(passwordInput, error, "Password is required.");
    }

    const strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    if (!strongPassword.test(password)) {
        return showError(
            passwordInput,
            error,
            "Use 8+ characters with uppercase, lowercase and a number."
        );
    }

    return showSuccess(passwordInput, error);
}

// Display error
function showError(input, errorElement, message) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorElement.textContent = message;
    return false;
}

// Display success
function showSuccess(input, errorElement) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorElement.textContent = "";
    return true;
}

// Connect validation functions to inputs
const fields = [
    { input: nameInput, validate: validateName },
    { input: emailInput, validate: validateEmail },
    { input: phoneInput, validate: validatePhone },
    { input: passwordInput, validate: validatePassword }
];

// Focus and blur events
fields.forEach(field => {

    field.input.addEventListener("focus", function() {
        this.style.backgroundColor = "#faf9ff";
    });

    field.input.addEventListener("blur", function() {
        this.style.backgroundColor = "white";
        field.validate();
    });

    // Real-time validation after the field has been visited
    field.input.addEventListener("input", function() {
        if (this.classList.contains("invalid") ||
            this.classList.contains("valid")) {
            field.validate();
        }

        successMessage.textContent = "";
    });
});

// Update password strength while typing
passwordInput.addEventListener("input", checkPasswordStrength);

// Prevent page reload and validate the complete form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();

    if (
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid
    ) {
        successMessage.textContent =
            "Congratulations! Your account has been created successfully.";

        form.reset();

        fields.forEach(field => {
            field.input.classList.remove("valid", "invalid");
        });

        strengthBar.style.width = "0";
        strengthBar.style.background = "";
        strengthText.textContent = "";
    } else {
        successMessage.textContent = "";
    }
});
