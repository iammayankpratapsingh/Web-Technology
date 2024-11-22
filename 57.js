const validateForm = (name, password, email, phone) => {
  const nameValid = /^[a-zA-Z]{6,}$/.test(name);
  const passwordValid = password.length >= 6;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^\d{10}$/.test(phone);
  
  return nameValid && passwordValid && emailValid && phoneValid;
};
