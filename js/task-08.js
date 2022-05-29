const inputForm = document.querySelector(".login-form");
const emailInputValue = document.querySelector('input[type="email"]');
const passwordInputValue = document.querySelector('input[type="password"]');
const buttonSubmit = document.querySelector("button");

let user = {
  email: "",
  password: "",
};

inputForm.addEventListener("submit", () => {
  if (emailInputValue === "" || passwordInputValue === "") {
    alert("Іи маєте запвнити всі поля!");
  } else {
    user.email = emailInputValue.value;
    user.password = passwordInputValue.value;
  }
  return user;
  inputForm.currentTarget.reset();
});
