const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || 
  password.value === "" || 
  password.value.indexOf(' ') > -1) {
    alert ("Всі поля повинні бути заповнені без пробілів!");
    return;
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}