function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
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
  return (
    (validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validateBirthday() &&
      validateQuantity() &&
      validateLocation() &&
      validateAcceptedConditions()) ||
    event.preventDefault()
  );
}
function validateFirstName() {
  const $firstNameInput = document.getElementById("first");
  const $errorContainer = document.getElementById("firstName");

  const isValidFirstName = $firstNameInput.value.length >= 2;

  if (isValidFirstName) {
    $errorContainer.setAttribute("data-error-visible", "false");
    return true;
  } else {
    $errorContainer.setAttribute("data-error-visible", "true");
    $errorContainer.setAttribute(
      "data-error",
      "Le prénom doit avoir au moins 2 caractères."
    );
  }
}
function validateLastName() {
  const $lastNameInput = document.getElementById("last");
  const $errorContainer = document.getElementById("lastName");

  const isValidName = $lastNameInput.value.length >= 2;

  if (isValidName) {
    $errorContainer.setAttribute("data-error-visible", "false");
    return true;
  } else {
    $errorContainer.setAttribute("data-error-visible", "true");
    $errorContainer.setAttribute(
      "data-error",
      "Le nom doit avoir au moins 2 caractères."
    );
  }
}

function validateEmail() {
  function controlEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  const $email = document.getElementById("email").value;
  const $errorContainer = document.getElementById("emailField");
  if (controlEmail($email)) {
    $errorContainer.setAttribute("data-error-visible", "false");
    return true;
  } else {
    $errorContainer.setAttribute("data-error-visible", "true");
    $errorContainer.setAttribute(
      "data-error",
      "Veuillez saisir une adresse email valide."
    );
  }
  // ^ : Le début de la chaîne.
  // [a-zA-Z0-9._-]+ : Un ou plusieurs caractères alphanumériques, points, underscores ou tirets.
  // @ : Le symbole "@".
  // [a-zA-Z0-9.-]+ : Un ou plusieurs caractères alphanumériques, points ou tirets pour le nom de domaine.
  // \. : Le point (il doit être échappé car dans une regex, le point correspond à n'importe quel caractère).
  // [a-zA-Z]{2,} : Deux caractères alphabétiques ou plus pour l'extension (par exemple, com, org).
  // $ : La fin de la chaîne.
}
function validateBirthday() {
  const $errorContainer = document.getElementById("birthday");
  const $birthdate = document.getElementById("birthdate").value;
  function controlBirthdate(date) {
    const regex =
      /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
    return regex.test(date);
  }
  if (!controlBirthdate($birthdate)) {
    $errorContainer.setAttribute("data-error-visible", "false");
    return true;
  } else {
    $errorContainer.setAttribute("data-error-visible", "true");
    $errorContainer.setAttribute(
      "data-error",
      "Veuillez saisir une date d'anniversaire valide."
    );
  }
  // En résumé, la regex vérifie que la date est au format "dd/mm/yyyy" et respecte les règles du calendrier.
  //   ^ : Le début de la chaîne.

  // ( : Ouverture du groupe de conditions.

  // (0[1-9]|[12]\d|3[01]) : Jour, de 01 à 31.
  // \/ : Le caractère barre oblique pour séparer le jour du mois.
  // (0[13578]|1[02]) : Mois, avec 31 jours.
  // \/ : Le caractère barre oblique pour séparer le mois de l'année.
  // ((19|[2-9]\d)\d{2}) : Année, 4 chiffres, débutant par 19 ou une autre décennie commençant par 2-9.
  // | : Ou bien...
  // (0[1-9]|[12]\d|30) : Jour, de 01 à 30.
  // \/ : Le caractère barre oblique pour séparer le jour du mois.
  // (0[13456789]|1[012]) : Mois, avec 30 jours.
  // \/ : Le caractère barre oblique pour séparer le mois de l'année.
  // ((19|[2-9]\d)\d{2}) : Année, 4 chiffres, débutant par 19 ou une autre décennie commençant par 2-9.
  // | : Ou bien...
  // (0[1-9]|1\d|2[0-8]) : Jour, de 01 à 28.
  // \/ : Le caractère barre oblique pour séparer le jour du mois.
  // 02 : Mois de février.
  // \/ : Le caractère barre oblique pour séparer le mois de l'année.
  // ((19|[2-9]\d)\d{2}) : Année, 4 chiffres, débutant par 19 ou une autre décennie commençant par 2-9.
  // | : Ou bien...
  // 29\/02\/ : Le 29 février.
  // ((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))) : Conditions pour les années bissextiles.
  // $ : La fin de la chaîne.
}
function validateQuantity() {
  const $errorContainer = document.getElementById("howMuch");
  const $quantity = document.getElementById("quantity").value;
  function controlQuantity(quantity) {
    const regex = /^(?:\d|[1-9]\d|99)$/;
    return regex.test(quantity);
  }
  if (controlQuantity($quantity)) {
    $errorContainer.setAttribute("data-error-visible", "false");
    return true;
  } else {
    $errorContainer.setAttribute("data-error-visible", "true");
    $errorContainer.setAttribute(
      "data-error",
      "Veuillez saisir un chiffre entre 0 et 99."
    );
  }
  //   ^ : Le début de la chaîne.
  // (?: ... ) : Un groupe non capturant.
  // \d : Correspond à un chiffre de 0 à 9.
  // | : Ou bien...
  // [1-9]\d : Un chiffre de 10 à 99 (ne commence pas par zéro).
  // | : Ou bien...
  // 99 : La valeur 99.
  // $ : La fin de la chaîne.
}

function validateLocation() {
  const $errorContainer = document.getElementById("location");
  const locationRadios = document.querySelectorAll(
    '.formData#location input[type="radio"]'
  );
  let isSelected = false;

  locationRadios.forEach((radio) => {
    if (radio.checked) {
      isSelected = true;
    }
  });

  if (isSelected) {
    $errorContainer.setAttribute("data-error-visible", "false");
    return true;
  } else {
    $errorContainer.setAttribute("data-error-visible", "true");
    $errorContainer.setAttribute("data-error", "Veuillez choisir un lieu.");
  }
}
function validateAcceptedConditions() {
  const $errorContainer = document.getElementById("acceptedConditions");
  const $acceptedConditions = document.getElementById("checkbox1").checked;
  if ($acceptedConditions) {
    $errorContainer.setAttribute("data-error-visible", "false");
    return true;
  } else {
    $errorContainer.setAttribute("data-error-visible", "true");
    $errorContainer.setAttribute(
      "data-error",
      "Veuillez cocher les conditions d'utilisation."
    );
  }
}
