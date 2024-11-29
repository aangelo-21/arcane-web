function listenToNavigate() {
  const HOME_BUTTON = document.getElementById("home-button");
  HOME_BUTTON.addEventListener("click", navigateToHeader);
  const CHARACTERS = document.getElementById("characters");
  CHARACTERS.addEventListener("click", navigateToCharacters);
  const LOCATIONS = document.getElementById("locations");
  LOCATIONS.addEventListener("click", navigateToLocations);
  const FAN_ZONE = document.getElementById("fan-zone");
  FAN_ZONE.addEventListener("click", navigateToFanZone);
  const SIDE_MENU_CHARACTERS = document.getElementById("side-menu-characters");
  SIDE_MENU_CHARACTERS.addEventListener("click", navigateToCharacters);
  const SIDE_MENU_LOCATIONS = document.getElementById("side-menu-locations");
  SIDE_MENU_LOCATIONS.addEventListener("click", navigateToLocations);
  const SIDE_MENU_FAN_ZONE = document.getElementById("side-menu-fan-zone");
  SIDE_MENU_FAN_ZONE.addEventListener("click", navigateToFanZone);
}

function navigateToHeader() {
  window.location.href = "index.html";
}

function navigateToCharacters() {
  window.location.href = "characters.html";
}

function navigateToLocations() {
  window.location.href = "locations.html";
}

function navigateToFanZone() {
  window.location.href = "fan-zone.html";
}

listenToNavigate();
