/********* FUNCTIONS : OUVERTURE / FERMETURE DU WRAPPER *********/
/* Function ouverture du wrapper */
function openDropdown() {
    const wrapperSelect = document.querySelector(".wrapper__select");
    const buttonWrapper = document.querySelector(".button__wrapper");
    const wrapperOption1 = document.querySelector(".wrapper__option--1");
    const body = document.querySelector("body");
    wrapperList.setAttribute("aria-hidden", "false");
    wrapperSelect.className += " active";
    buttonWrapper.setAttribute("aria-expanded", "true");
    body.classList.add("body--no-scroll");
    wrapperOption1.focus();
}
/* Function fermeture du wrapper */
function closeDropdown() {
    const wrapperSelect = document.querySelector(".wrapper__select");
    const buttonWrapper = document.querySelector(".button__wrapper");
    const wrapperList = document.querySelector(".wrapper__list");
    const body = document.querySelector("body");
    wrapperList.setAttribute("aria-hidden", "true");
    wrapperSelect.className = "wrapper__select";
    buttonWrapper.setAttribute("aria-expanded","false");
    body.classList.remove("body--no-scroll");
    buttonWrapper.focus();
}
/* Function changement de nom du wrapper */
function changeName(currentOption){
    const buttonWrapper = document.querySelector(".button__wrapper");
    const optionText = currentOption.textContent;
    buttonWrapper.textContent = optionText;
}

/********* FUNCTIONS : GESTION DES ÉVÉNEMENTS AU CLAVIER *********/
let currentOptionPosition = 0;

function goToNextOption(){
  // Aller à la prochaine option
  const wrapperList = document.querySelectorAll(".wrapper__option");
     const nbWrapperOptions = wrapperList.length;
   if (currentOptionPosition + 1 >= nbWrapperOptions) {
      // si la currentOptionPosition est supérieure au nombre d'options alors on revient  au début du wrapper (position 0)*/
      const lastOption = wrapperList[currentOptionPosition];
      currentOptionPosition = 0;
      const currentOption = wrapperList[currentOptionPosition].focus();
   } else {
      // sinon on ajoute +1 à la currentOptionPosition*/
      currentOptionPosition += 1;
      const lastOption = wrapperList[currentOptionPosition - 1];
      const currentOption = wrapperList[currentOptionPosition].focus();
   }
}

function goToPreviousOption(){
     // Revenir à l'option précédante
const wrapperList = document.querySelectorAll(".wrapper__option");
const nbWrapperOptions = wrapperList.length;
   if (currentOptionPosition - 1 >= 0) {
      // Si currentOptionPosition - 1 est supérieure ou égale 0, alors on implémente -1 à la currentOptionPosition
      currentOptionPosition -= 1;
      const currentOption = wrapperList[currentOptionPosition].focus();
      const lastOption = wrapperList[currentOptionPosition + 1];

   } else {
      // Sinon on revient à la dernière diapo : nombre de médias - 1
      const lastOption = wrapperList[currentOptionPosition];
      currentOptionPosition = nbWrapperOptions - 1;
      const currentOption = wrapperList[currentOptionPosition].focus();
   }
}