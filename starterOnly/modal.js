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
}
function validateBirthday() {
  const $errorContainer = document.getElementById("birthday");
  const $birthdate = document.getElementById("birthdate").value;
  console.log("$birthdate:", $birthdate);
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

      if (birthDate >= minDate && birthDate <= maxDate) {
        return true;
      }
    }

    return false;
  }
  if (controlBirthdate($birthdate)) {
    $errorContainer.setAttribute("data-error-visible", "false");
    return true;
  } else {
    $errorContainer.setAttribute("data-error-visible", "true");
    $errorContainer.setAttribute(
      "data-error",
      "Veuillez saisir une date d'anniversaire valide entre il y a 100 ans et 16 ans avant aujourd'hui."
    );
    return false;
  }
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
