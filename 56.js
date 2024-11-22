const validateLogin = (username, password) => {
  if (username.length >= 6 && password.length >= 6) {
    return "Login successful";
  } else {
    return "Invalid credentials";
  }
};
console.log(validateLogin("user123", "pass123"));
