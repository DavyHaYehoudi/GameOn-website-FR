// Fonction pour modifier la classe du menu de navigation
function editNav() {
  const x = document.getElementById("myTopnav");
  x.className === "topnav"
    ? (x.className += " responsive")
    : (x.className = "topnav");
}
/* ********************************* START GESTION DES ERREURS ENTREES ********************************* */
// Fonction pour basculer la visibilité de l'erreur
function toggleErrorVisibility($container, isValid, errorMessage) {
  // Masquer l'erreur si le champ est valide
  if (isValid) {
    $container.setAttribute("data-error-visible", "false");
  } else {
    // Afficher l'erreur avec le message approprié
    $container.setAttribute("data-error-visible", "true");
    $container.setAttribute("data-error", errorMessage);
  }
}
// Validation du prénom
function validateFirstName() {
  const $firstNameInput = document.getElementById("first");
  const $errorContainer = document.getElementById("firstName");
  const isValidFirstName = $firstNameInput.value.length >= 2;
  // Toggle la visibilité de l'erreur
  toggleErrorVisibility(
    $errorContainer,
    isValidFirstName,
    "Le prénom doit avoir au moins 2 caractères."
  );

  return isValidFirstName;
}
// Validation du nom de famille
function validateLastName() {
  const $lastNameInput = document.getElementById("last");
  const $errorContainer = document.getElementById("lastName");
  const isValidName = $lastNameInput.value.length >= 2;
  // Toggle la visibilité de l'erreur
  toggleErrorVisibility(
    $errorContainer,
    isValidName,
    "Le nom doit avoir au moins 2 caractères."
  );

  return isValidName;
}
// Validation de l'adresse email
function validateEmail() {
  const $email = document.getElementById("email").value;
  const $errorContainer = document.getElementById("emailField");
  // Validation de l'adresse email
  const isValidEmail = controlEmail($email);
  // Toggle la visibilité de l'erreur
  toggleErrorVisibility(
    $errorContainer,
    isValidEmail,
    "Veuillez saisir une adresse email valide."
  );

  return isValidEmail;
}
// Validation de la date de naissance
function validateBirthday() {
  const $errorContainer = document.getElementById("birthday");
  const $birthdate = document.getElementById("birthdate").value;
  // Validation de la date de naissance
  const isValidBirthdate = controlBirthdate($birthdate);
  // Toggle la visibilité de l'erreur
  toggleErrorVisibility(
    $errorContainer,
    isValidBirthdate,
    "Veuillez saisir une date d'anniversaire valide entre il y a 100 ans et 16 ans avant aujourd'hui."
  );

  return isValidBirthdate;
}
// Validation de la quantité
function validateQuantity() {
  const $errorContainer = document.getElementById("howMuch");
  const $quantity = document.getElementById("quantity").value;
  // Validation de la quantité
  const isValidQuantity = controlQuantity($quantity);
  // Toggle la visibilité de l'erreur
  toggleErrorVisibility(
    $errorContainer,
    isValidQuantity,
    "Veuillez saisir un chiffre entre 0 et 99."
  );

  return isValidQuantity;
}
// Validation de la localisation
function validateLocation() {
  const $errorContainer = document.getElementById("location");
  const locationRadios = document.querySelectorAll(
    '.formData#location input[type="radio"]'
  );
  // Vérifie si au moins un bouton radio est sélectionné
  const isSelected = Array.from(locationRadios).some((radio) => radio.checked);
  // Toggle la visibilité de l'erreur
  toggleErrorVisibility(
    $errorContainer,
    isSelected,
    "Veuillez choisir un lieu."
  );

  return isSelected;
}
// Validation de l'acceptation des conditions
function validateAcceptedConditions() {
  const $errorContainer = document.getElementById("acceptedConditions");
  const $acceptedConditions = document.getElementById("checkbox1").checked;
  // Toggle la visibilité de l'erreur
  toggleErrorVisibility(
    $errorContainer,
    $acceptedConditions,
    "Veuillez cocher les conditions d'utilisation."
  );

  return $acceptedConditions;
}
// Validation du format de l'adresse email
function controlEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
// Validation de la date de naissance dans une certaine plage
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
// Validation de la quantité dans une plage spécifique
function controlQuantity(quantity) {
  const regex = /^(?:\d|[1-9]\d|99)$/;
  return regex.test(quantity);
}
/* ********************************* END GESTION DES ERREURS ENTREES ********************************* */

/* ********************************* START GESTION SOUMISSION FORMULAIRE ********************************* */
// DOM Elements
const $modalbg = document.querySelector(".bground");
const $modalContent = document.querySelector(".content");
const $modalBtn = document.querySelectorAll(".modal-btn");
const $form = document.getElementById("myForm");
const $confirmDiv = document.getElementById("confirm");

// launch modal event
$modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  $modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  $modalbg.style.display = "none";
  $modalContent.style.display = "block";
  $confirmDiv.classList.remove("active");
  resetForm();
}

// Form submit
function validate(event) {
  event.preventDefault();
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
    resetForm(); // Réinitialise le formulaire après la confirmation
  }
}

// Fonction pour réinitialiser le formulaire
function resetForm() {
  $form.reset();
}

// Fonction pour afficher la confirmation
function showConfirmation() {
  // Cache le formulaire
  $modalContent.style.display = "none";
  // Affiche la div de confirmation
  $confirmDiv.classList.add("active", "content");
  // Réinitialise le formulaire après la confirmation
  resetForm();
}
/* ********************************* END GESTION SOUMISSION FORMULAIRE ********************************* */
