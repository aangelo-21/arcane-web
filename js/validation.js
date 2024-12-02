function listenForValidation() {
  const FAN_ZONE_FORM = document.getElementById("fan-zone-form");
  FAN_ZONE_FORM.addEventListener("submit", validateFanZoneForm);
}

function validateFanZoneForm(e) {

  const NAME = e.target.name.value;
  const SUBJECT = e.target.subject.value;
  const MESSAGE = e.target.message.value;

  let valid = true;

  if (!NAME) {
    document.getElementById("span-name").style.visibility = "visible";
    valid = false;
  } else document.getElementById("span-name").style.visibility = "hidden";

  if (!SUBJECT) {
    document.getElementById("span-subject").style.visibility = "visible";
    valid = false;
  } else document.getElementById("span-subject").style.visibility = "hidden";

  if (!MESSAGE) {
    document.getElementById("span-message").style.visibility = "visible";
    valid = false;
  } else document.getElementById("span-message").style.visibility = "hidden";

  if (!valid) {
    e.preventDefault();
  } else {
    saveData(NAME, SUBJECT, MESSAGE);
  }
}

function saveData(NAME, SUBJECT, MESSAGE) {
  localStorage.setItem("name", NAME);
  localStorage.setItem("subject", SUBJECT);
  localStorage.setItem("message", MESSAGE);
}
listenForValidation();