/********* FUNCTIONS *********/
/* Function ouverture de la modale */
function displayModal() {
   const body = document.querySelector("body");
   const header = document.querySelector(".header");
   const main = document.querySelector(".content");
   const modal = document.querySelector("#contactModal");
   const buttonClose = document.querySelector(".modal__close--form");
   modal.style.display = "block";
   header.setAttribute("aria-hidden", "true");
   main.setAttribute("aria-hidden", "true");
   modal.setAttribute("aria-hidden", "false");
   body.classList.add("body--no-scroll");
   buttonClose.focus();
}
/* Function fermeture de la modale */
function closeModal() {
   const body = document.querySelector("body");
   const header = document.querySelector(".header");
   const main = document.querySelector(".content");
   const buttonContact = document.querySelector(".button__contact");
   const modal = document.querySelector("#contactModal");
   modal.style.display = "none";
   header.setAttribute("aria-hidden", "false");
   main.setAttribute("aria-hidden", "false");
   modal.setAttribute("aria-hidden", "true");
   body.classList.remove("body--no-scroll");
   buttonContact.focus();
}

/* Function ouverture du message de validation*/
function displayValidationMessage() {
   const body = document.querySelector("body");
   const header = document.querySelector(".header");
   const main = document.querySelector(".content");
   const modalbgValidate = document.querySelector("#contactModalValidate");
   const buttonClose = document.querySelector(".modal__close--validate");
   modalbgValidate.style.display = "block";
   header.setAttribute("aria-hidden", "true");
   main.setAttribute("aria-hidden", "true");
   modalbgValidate.setAttribute("aria-hidden", "false");
   body.classList.add("body--no-scroll");
   buttonClose.focus();
}

/* Function fermeture ouverture du message de validation */
function closeModalValidate() {
   const body = document.querySelector("body");
   const header = document.querySelector(".header");
   const main = document.querySelector(".content");
   const buttonContact = document.querySelector(".button__contact");
   const modalbgValidate = document.querySelector("#contactModalValidate");
   modalbgValidate.style.display = "none";
   header.setAttribute("aria-hidden", "false");
   main.setAttribute("aria-hidden", "false");
   modalbgValidate.setAttribute("aria-hidden", "true");
   body.classList.remove("body--no-scroll");
   buttonContact.focus();
}

// FUNCTIONS VALIDATION FORM
/* Function verification Firstname*/
function checkFirstNameInput() {
   const regexName = /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/;
   const firstName = document.querySelector("#first");
   const formData = document.querySelectorAll(".form__data");
   if (firstName.value.length >= 2 && firstName.value.length <= 100 && regexName.test(firstName.value)) {
      formData[0].setAttribute("data-error-visible", "false");
      formData[0].setAttribute("role", "");
      console.log(firstName.value);
      return true;
   } else if (firstName.value.length < 2 && regexName.test(firstName.value)) {
      formData[0].setAttribute("data-error-visible", "true");
      formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
      formData[0].setAttribute("role", "alert");
      return false;
   } else if (firstName.value.length > 100 && regexName.test(firstName.value)) {
      formData[0].setAttribute("data-error-visible", "true");
      formData[0].setAttribute("data-error", "Ce champ ne peut pas contenir plus de 100 caractères.");
      formData[0].setAttribute("role", "alert");
      return false;
   } else {
      formData[0].setAttribute("data-error-visible", "true");
      formData[0].setAttribute("data-error", "Veuillez entrer votre prénom.");
      formData[0].setAttribute("role", "alert");
      return false;
   }
}

/* Function verification Lastname */
function checkLastNameInput() {
   const regexName = /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/;
   const lastName = document.querySelector("#last");
   const formData = document.querySelectorAll(".form__data");
   if (lastName.value.length >= 2 && lastName.value.length <= 100 && regexName.test(lastName.value)) {
      formData[1].setAttribute("data-error-visible", "false");
      formData[1].setAttribute("role", "");
      console.log(lastName.value);
      return true;
   } else if (lastName.value.length < 2 && regexName.test(lastName.value)) {
      formData[1].setAttribute("data-error-visible", "true");
      formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      formData[1].setAttribute("role", "alert");
      return false;
   } else if (lastName.value.length > 100 && regexName.test(lastName.value)) {
      formData[1].setAttribute("data-error-visible", "true");
      formData[1].setAttribute("data-error", "Ce champ ne peut pas contenir plus de 100 caractères.");
      formData[1].setAttribute("role", "alert");
      return false;
   } else {
      formData[1].setAttribute("data-error-visible", "true");
      formData[1].setAttribute("data-error", "Veuillez entrer votre nom.");
      formData[1].setAttribute("role", "alert");
      return false;
   }
}

/* Function verification Email */
function checkEmailInput() {
   const regexEmail = /^((?!\.)[\w_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
   const email = document.querySelector("#email");
   const formData = document.querySelectorAll(".form__data");
   if (regexEmail.test(email.value)) {
      formData[2].setAttribute("data-error-visible", "false");
      formData[2].setAttribute("role", "");
      console.log(email.value);
      return true;
   } else {
      formData[2].setAttribute("data-error-visible", "true");
      formData[2].setAttribute("data-error", "Vous devez saisir une adresse mail au format : pseudo@domaine.extension.");
      formData[2].setAttribute("role", "alert");
      return false;
   }
}

/* Function verification Message */
function checkMessageInput() {
   const regexMessage = /^[a-zA-Z\s\-À-ÖØ-öø-ÿ\0-9\$&+,:;=?@#|'<>.-^*()%!]+$/;
   const message = document.querySelector("#message");
   const formData = document.querySelectorAll(".form__data");
   if (message.value.length >= 10 && message.value.length <= 360 && regexMessage.test(message.value)) {
      formData[3].setAttribute("data-error-visible", "false");
      formData[3].setAttribute("role", "");
      console.log(message.value);
      return true;
   } else if (message.value.length < 10 && regexMessage.test(message.value)) {
      formData[3].setAttribute("data-error-visible", "true");
      formData[3].setAttribute("data-error", "Veuillez entrer 10 caractères ou plus pour votre message.");
      formData[3].setAttribute("role", "alert");
      return false;
   } else if (message.value.length > 100 && regexMessage.test(message.value)) {
      formData[3].setAttribute("data-error-visible", "true");
      formData[3].setAttribute("data-error", "Votre message ne peut pas contenir plus de 360 caractères.");
      formData[3].setAttribute("role", "alert");
      return false;
   } else {
      formData[3].setAttribute("data-error-visible", "true");
      formData[3].setAttribute("data-error", "Veuillez entrer un message d'au moins 10 caractères.");
      formData[3].setAttribute("role", "alert");
      return false;
   }
}

// Function submit form
addEventListener("submit", (e) => {
   //on submit, verify if the functions of verification are true
   e.preventDefault(); // if it's true, the form is reset and closed and the message of validation appears
   checkFirstNameInput();
   checkLastNameInput();
   checkEmailInput();
   checkMessageInput();
   if (checkFirstNameInput() && checkLastNameInput() && checkEmailInput() && checkMessageInput() == true) {
      document.querySelector(".form").reset();
      closeModal();
      displayValidationMessage();
   }
});
