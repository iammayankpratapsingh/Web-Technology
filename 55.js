const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log(validateEmail("test@example.com")); // true
