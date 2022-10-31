/********* FUNCTIONS : OUVERTURE / FERMETURE DE LA LIGHTBOX *********/
/* Function ouverture de la modale */
function displayModalLightbox() {
   const body = document.querySelector("body");
   const header = document.querySelector(".header");
   const main = document.querySelector(".content");
   const modal = document.querySelector("#carrouselModal");
   modal.style.display = "block";
   header.setAttribute("aria-hidden", "true");
   main.setAttribute("aria-hidden", "true");
   modal.setAttribute("aria-hidden", "false");
   body.classList.add("body--no-scroll");
   modal.focus();
}
/* Function fermeture de la modale */
function closeModalLightbox() {
   const body = document.querySelector("body");
   const header = document.querySelector(".header");
   const main = document.querySelector(".content");
   const modal = document.querySelector("#carrouselModal");
   // const cardMedia = document.querySelectorAll(".card__media");
   modal.style.display = "none";
   header.setAttribute("aria-hidden", "false");
   main.setAttribute("aria-hidden", "false");
   modal.setAttribute("aria-hidden", "true");
   body.classList.remove("body--no-scroll");
   // cardMedia.focus();
}

/********* FUNCTIONS : CARROUSEL *********/
let currentItemPosition = 0;

function goToNextSlide() {
   // Aller à la prochaine diapo
   const carouselItems = document.querySelectorAll(".carrousel__item");
   const nbCarouselItems = carouselItems.length;
   if (currentItemPosition + 1 >= nbCarouselItems) {
      // si la currentItemPosition est supérieure au nombre d'items (images) alors on revient  au début du carousel (position 0)*/
      const lastItem = carouselItems[currentItemPosition];
      currentItemPosition = 0;
      const currentItem = carouselItems[currentItemPosition];
      setNodeAttributes(lastItem, currentItem);
   } else {
      // sinon on ajoute +1 à la currentItemPosition*/
      currentItemPosition += 1;
      const lastItem = carouselItems[currentItemPosition - 1];
      const currentItem = carouselItems[currentItemPosition];
      setNodeAttributes(lastItem, currentItem);
   }
}
function goToPreviousSlide() {
   // Revenir à la diapo précédante
   const carouselItems = document.querySelectorAll(".carrousel__item");
   const nbCarouselItems = carouselItems.length;
   if (currentItemPosition - 1 >= 0) {
      // Si currentItemPosition - 1 est supérieure ou égale 0, alors on implémente -1 à la currentItemPosition
      currentItemPosition -= 1;
      const currentItem = carouselItems[currentItemPosition];
      const lastItem = carouselItems[currentItemPosition + 1];
      setNodeAttributes(lastItem, currentItem);
   } else {
      // Sinon on revient à la dernière diapo : nombre de médias - 1
      const lastItem = carouselItems[currentItemPosition];
      currentItemPosition = nbCarouselItems - 1;
      const currentItem = carouselItems[currentItemPosition];
      setNodeAttributes(lastItem, currentItem);
   }
}
function setNodeAttributes(lastItem, currentItem) {
   lastItem.style.display = "none";
   currentItem.style.display = "block";
   lastItem.setAttribute("aria-hidden", "true");
   currentItem.setAttribute("aria-hidden", "false");
}

/* Gestion du carousel et de la modal avec les touches au clavier  : Échap/Suivante/Précédante */
window.addEventListener(
   "keydown",
   function (event) {
      if (event.defaultPrevented) {
         return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
      }
      switch (event.key) {
        case "Escape": // Lorsque la touche "esc" pressée, fermer la lightbox
          closeModalLightbox();
          break;
         case "ArrowLeft": // Lorsque la touche "flèche gauche" pressée, aller à la diapo précédante
            goToPreviousSlide();

            break;
         case "ArrowRight": // Lorsque la touche "flèche droite" pressée, aller à la diapo suivante
            goToNextSlide();
            break;
      }
      // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
      // event.preventDefault();
   },
   true
);
