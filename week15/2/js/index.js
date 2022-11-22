function checkForm() {
  let name = document.getElementById("InputName");
  let surname = document.getElementById("InputSurname");
  let email = document.getElementById("InputEmail");
  let password = document.getElementById("InputPassword");
  let confpassword = document.getElementById("InputConfPassword");
  document.getElementById('ErrorMessage').innerHTML = "";
  if (email.value == ''){
  document.getElementById('ErrorMessage').innerHTML += "Your email is empty<br><br>";
  }

  if (name.value == ''){
  document.getElementById('ErrorMessage').innerHTML += "Your name is empty<br><br>";
  }

  if (surname.value == ''){
  document.getElementById('ErrorMessage').innerHTML += "Your surname is empty<br><br>";
  }

  if (password.value == ''){
  document.getElementById('ErrorMessage').innerHTML += "Your password is empty<br><br>";
  }

  if (confpassword.value != password.value){
  document.getElementById('ErrorMessage').innerHTML += "Passwords are different<br><br>";
  }
}
function checkPasswordLength(password){
  if (password.length < 6) {
      document.getElementById("ErrorMessage").innerHTML = "Password is too short — min. 6 symbols<br><br>";
  }
}