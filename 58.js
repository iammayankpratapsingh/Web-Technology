function displayInfo() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const color = document.getElementById("color").value;
  
  document.getElementById("output").value = `${name}, ${email}, ${mobile}, ${gender}, ${color}`;
}
