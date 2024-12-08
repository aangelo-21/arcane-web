function listenForValidation() {
  const FAN_ZONE_FORM = document.getElementById("fan-zone-form");
  FAN_ZONE_FORM.addEventListener("submit", validateFanZoneForm);
}

function validateFanZoneForm(e) {
  const SUBJECT = e.target.subject.value;
  const MESSAGE = e.target.message.value;

  let valid = true;

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
  }
}

listenForValidation();
