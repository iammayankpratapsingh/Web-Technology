const validateForm = (name, password, email, phone) => {
  const errors = {};
  if (!/^[a-zA-Z]{6,}$/.test(name)) {
    errors.name = "Name must contain only alphabets and be at least 6 characters long.";
  }
  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email must follow the standard pattern (e.g., name@domain.com).";
  }
  if (!/^\d{10}$/.test(phone)) {
    errors.phone = "Phone number must contain exactly 10 digits.";
  }
  if (Object.keys(errors).length === 0) {
    return { isValid: true, message: "Form is valid!" };
  } else {
    return { isValid: false, errors };
  }
};
const name = "JohnDoe";
const password = "pass123";
const email = "john.doe@example.com";
const phone = "1234567890";
const validationResult = validateForm(name, password, email, phone);
if (validationResult.isValid) {
  console.log(validationResult.message);
} else {
  console.error("Validation errors:", validationResult.errors);
}
