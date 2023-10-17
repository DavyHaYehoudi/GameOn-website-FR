function editNav() {
  const x = document.getElementById("myTopnav");
  x.className === "topnav"
    ? (x.className += " responsive")
    : (x.className = "topnav");
}

function toggleErrorVisibility($container, isValid, errorMessage) {
  if (isValid) {
    $container.setAttribute("data-error-visible", "false");
  } else {
    $container.setAttribute("data-error-visible", "true");
    $container.setAttribute("data-error", errorMessage);
  }
}

function validateFirstName() {
  const $firstNameInput = document.getElementById("first");
  const $errorContainer = document.getElementById("firstName");
  const isValidFirstName = $firstNameInput.value.length >= 2;

  toggleErrorVisibility(
    $errorContainer,
    isValidFirstName,
    "Le prénom doit avoir au moins 2 caractères."
  );

  return isValidFirstName;
}

function validateLastName() {
  const $lastNameInput = document.getElementById("last");
  const $errorContainer = document.getElementById("lastName");
  const isValidName = $lastNameInput.value.length >= 2;

  toggleErrorVisibility(
    $errorContainer,
    isValidName,
    "Le nom doit avoir au moins 2 caractères."
  );

  return isValidName;
}

function validateEmail() {
  const $email = document.getElementById("email").value;
  const $errorContainer = document.getElementById("emailField");

  const isValidEmail = controlEmail($email);

  toggleErrorVisibility(
    $errorContainer,
    isValidEmail,
    "Veuillez saisir une adresse email valide."
  );

  return isValidEmail;
}

function validateBirthday() {
  const $errorContainer = document.getElementById("birthday");
  const $birthdate = document.getElementById("birthdate").value;
  const isValidBirthdate = controlBirthdate($birthdate);

  toggleErrorVisibility(
    $errorContainer,
    isValidBirthdate,
    "Veuillez saisir une date d'anniversaire valide entre il y a 100 ans et 16 ans avant aujourd'hui."
  );

  return isValidBirthdate;
}

function validateQuantity() {
  const $errorContainer = document.getElementById("howMuch");
  const $quantity = document.getElementById("quantity").value;
  const isValidQuantity = controlQuantity($quantity);

  toggleErrorVisibility(
    $errorContainer,
    isValidQuantity,
    "Veuillez saisir un chiffre entre 0 et 99."
  );

  return isValidQuantity;
}

function validateLocation() {
  const $errorContainer = document.getElementById("location");
  const locationRadios = document.querySelectorAll(
    '.formData#location input[type="radio"]'
  );
  const isSelected = Array.from(locationRadios).some((radio) => radio.checked);

  toggleErrorVisibility(
    $errorContainer,
    isSelected,
    "Veuillez choisir un lieu."
  );

  return isSelected;
}

function validateAcceptedConditions() {
  const $errorContainer = document.getElementById("acceptedConditions");
  const $acceptedConditions = document.getElementById("checkbox1").checked;

  toggleErrorVisibility(
    $errorContainer,
    $acceptedConditions,
    "Veuillez cocher les conditions d'utilisation."
  );

  return $acceptedConditions;
}

function controlEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function controlBirthdate(dateString) {
  const currentDate = new Date();
  const minDate = new Date(
    currentDate.getFullYear() - 100,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const maxDate = new Date(
    currentDate.getFullYear() - 16,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const regex = /^(19\d\d|20\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  if (regex.test(dateString)) {
    const birthDate = new Date(dateString);
    return birthDate >= minDate && birthDate <= maxDate;
  }

  return false;
}

function controlQuantity(quantity) {
  const regex = /^(?:\d|[1-9]\d|99)$/;
  return regex.test(quantity);
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbd = document.querySelector(".modal-body");
const modalContent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Form submit
function validate(event) {
  event.preventDefault()
  const isFormValid =
  validateFirstName() &&
  validateLastName() &&
  validateEmail() &&
  validateBirthday() &&
  validateQuantity() &&
  validateLocation() &&
  validateAcceptedConditions();

if (isFormValid) {
  showConfirmation(); 
}

return isFormValid || event.preventDefault();
}
function showConfirmation() {
  // Cache le formulaire
  modalContent.style.display = "none";

  // Affiche la div de confirmation
  const confirmDiv = document.getElementById("confirm");
  confirmDiv.classList.add("active","content");

}
