function listenForValidation() {
  const LOG_IN_FORM = document.getElementById("log-in-form");
  LOG_IN_FORM.addEventListener("submit", validateLogInForm);
}

function validateLogInForm(e) {
  const NAME = e.target.name.value;
  const PASSWORD = e.target.password.value;
  const PASSWORD_CONFIRMATION = e.target["password-confirmation"].value;

  let valid = true;

  if (!NAME) {
    document.getElementById("span-name").style.visibility = "visible";
    valid = false;
  } else document.getElementById("span-name").style.visibility = "hidden";

  if (!PASSWORD) {
    document.getElementById("span-password").style.visibility = "visible";
    valid = false;
  } else document.getElementById("span-password").style.visibility = "hidden";

  if (!PASSWORD_CONFIRMATION) {
    document.getElementById("span-password-confirmation").style.visibility =
      "visible";
    valid = false;
  } else
    document.getElementById("span-password-confirmation").style.visibility = "hidden";

  if (PASSWORD != PASSWORD_CONFIRMATION) {
    document.getElementById("span-password-confirmation-dont-match").style.visibility = "visible";
    valid = false;
  } else
    document.getElementById("span-password-confirmation-dont-match").style.visibility = "hidden";

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME);
  }
}

function saveData(NAME) {
  localStorage.setItem("name", NAME);
}
listenForValidation();
