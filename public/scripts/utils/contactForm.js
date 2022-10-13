/********* FUNCTIONS *********/
/* Function ouverture de la modale */
 function displayModal() {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const main = document.querySelector(".content");
    const modal = document.querySelector("#contact__modal");
    const buttonClose = document.querySelector(".modal__close");
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
    const modal = document.querySelector("#contact__modal");
    modal.style.display = "none";
    header.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("body--no-scroll");
    buttonContact.focus();
}

/* Function fermeture de la modale avec la touche escape*/

// $(document).on('keydown', e => {
//     const keyCode = e.keyCode ? e.keyCode : e.which

//     if ($modal.attr('aria-hidden') == 'false' && keyCode === 27) {
//         onCloseModal()
//     }
//  })


/* Function ajout de l'id photographer*/
// function addId(){

// }


// FUNCTIONS VALIDATION FORM
// Function verification Firstname
function checkFirstNameInput() {
    const regexName = /^[a-zA-Z\s\-À-ÖØ-öø-ÿ]+$/;
    const firstName = document.querySelector("#first");
    const formData = document.querySelectorAll(".form__data");
    if (firstName.value.length >= 2 && firstName.value.length <= 100 && regexName.test(firstName.value)) {
      formData[0].setAttribute("data-error-visible", "false");
      return true;
    } else if (firstName.value.length < 2 && regexName.test(firstName.value)) {
      formData[0].setAttribute("data-error-visible", "true");
      formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
      return false;
    } else if (firstName.value.length > 100 && regexName.test(firstName.value)) {
      formData[0].setAttribute("data-error-visible", "true");
      formData[0].setAttribute("data-error", "Ce champ ne peut pas contenir plus de 100 caractères.");
      return false;
    } else {
      formData[0].setAttribute("data-error-visible", "true");
      formData[0].setAttribute("data-error", "Veuillez entrer votre prénom.");
      return false;
    }
  }

  // Function verification Lastname
//   function checkLastNameInput(lastName) {
//     if (lastName.value.length >= 2 && lastName.value.length <= 100 && regexName.test(lastName.value)) {
//       formData[1].setAttribute("data-error-visible", "false");
//       return true;
//     } else if (lastName.value.length < 2 && regexName.test(lastName.value)) {
//       formData[1].setAttribute("data-error-visible", "true");
//       formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
//       return false;
//     } else if (lastName.value.length > 100 && regexName.test(lastName.value)) {
//       formData[1].setAttribute("data-error-visible", "true");
//       formData[1].setAttribute("data-error", "Ce champ ne peut pas contenir plus de 100 caractères.");
//       return false;
//     } else {
//       formData[1].setAttribute("data-error-visible", "true");
//       formData[1].setAttribute("data-error", "Veuillez entrer votre nom.");
//       return false;
//     }
//   }

  // Function verification Email
//   function checkEmailInput(email) {
//     if (regexEmail.test(email.value)) {
//       formData[2].setAttribute("data-error-visible", "false");
//       return true;
//     } else {
//       formData[2].setAttribute("data-error-visible", "true");
//       formData[2].setAttribute("data-error", "Vous devez saisir une adresse mail.");
//       return false;
//     }
//   }

  // Function verification Birthdate
//   function checkBirthdateInput(birthdate) {
//     const today = new Date();
//     const yearMinimum = today.getFullYear() - 18; // age minimum 18 years
//     const yearMaximum = today.getFullYear() - 80; // age maximum 80 years
//     const birthdatePlayer = new Date(birthdate.value); // converts the value of the input birthdate to date
//     const yearPlayer = birthdatePlayer.getFullYear(); // recovers the user's year of birth
//     if (regexBirthdate.test(birthdate.value) && yearPlayer < yearMinimum && yearPlayer > yearMaximum) {
//       formData[3].setAttribute("data-error-visible", "false");
//       return true;
//     } else if (regexBirthdate.test(birthdate.value) && yearPlayer > yearMinimum) {
//       formData[3].setAttribute("data-error-visible", "true");
//       formData[3].setAttribute("data-error", "Vous devez avoir plus de 18 ans.");
//       return false;
//     } else if (regexBirthdate.test(birthdate.value) && yearPlayer < yearMaximum) {
//       formData[3].setAttribute("data-error-visible", "true");
//       formData[3].setAttribute("data-error", "Vous êtes un peu trop âgé pour participer à notre événement!");
//       return false;
//     } else {
//       formData[3].setAttribute("data-error-visible", "true");
//       formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
//       return false;
//     }
//   }

  // Function submit form
  addEventListener("submit", (e) => { //on submit, verify if the functions of verification are true
    e.preventDefault(); // if it's true, the form is reset and closed and the message of validation appears
    checkFirstNameInput();
    // checkLastNameInput(lastName);
    // checkEmailInput(email);
    // checkBirthdateInput(birthdate);
    if (
      checkFirstNameInput()
    //   checkLastNameInput(lastName) &&
    //   checkEmailInput(email) &&
    //   checkBirthdateInput(birthdate)
    ) {
      form.reset();
      closeModal();
      displayModal();
    }
  });