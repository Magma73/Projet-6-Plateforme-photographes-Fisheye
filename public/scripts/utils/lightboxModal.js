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
   // const cardMedia = document.querySelector(".card__media-element");
   // this.focus();
   modal.style.display = "none";
   header.setAttribute("aria-hidden", "false");
   main.setAttribute("aria-hidden", "false");
   modal.setAttribute("aria-hidden", "true");
   body.classList.remove("body--no-scroll");
   // cardMedia.setAttribute("tab-index", 1);
   // console.log(cardMedia);

}

/********* FUNCTIONS : GESTION DE LA POSITION DES CARTES DANS LE CARROUSEL *********/
let currentItemPosition = 0;

function goToNextSlide() {
   // Aller à la prochaine diapo
   const carouselItems = document.querySelectorAll(".carrousel__item");
   const nbCarouselItems = carouselItems.length;
   carouselItems[0].style.display = "none";
   if (currentItemPosition +1 >= nbCarouselItems) {
      // si la currentItemPosition est supérieure au nombre d'items (images) alors on revient  au début du carousel (position 0)*/
      const lastItem = carouselItems[currentItemPosition];
      currentItemPosition = 0;
      const currentItem = carouselItems[currentItemPosition];
      console.log(currentItem);
      carouselItems[0].style.display = "block";
      setNodeAttributes(lastItem, currentItem);
   } else {
      // sinon on ajoute +1 à la currentItemPosition*/
      currentItemPosition += 1;
      const lastItem = carouselItems[currentItemPosition - 1];
      const currentItem = carouselItems[currentItemPosition];

      console.log(currentItem);
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

async function displayDataLightboxMedia(photographersMedias, idCurrent) {
   console.log(photographersMedias);
   const carrouselUlSection = document.querySelector(".carrousel__list");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const results = photographersMedias.filter((photographersMedia) => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   // const idMedia = document.querySelectorAll("");
   carrouselUlSection.innerHTML = ""; // J'efface le contenu de carrousel__list : je réinitialise pour que ce soit vide
   // sortIndex(results, idCurrent) ;
   const idCurrentMedia = parseInt(idCurrent); // Je convertis l'id du currentMedia en nombre
   // console.log(idCurrentMedia);
   const isFindMedia = results.find((isId) => isId.id === idCurrentMedia); // Renvoie l'objet qui correspond à l'id que je cherche (idCurrentMedia) dans mon tableau d'objet
   // console.log(isFindMedia);
   const isLargeNumber = (element) => element === isFindMedia; // Je cherche l'objet isFindMedia dans mon tableau
   // console.log(isLargeNumber);
   const positionToFind = results.findIndex(isLargeNumber); // Je trouve l'index qui correspond à l'objet IsFindMedia dans mon tableau
   console.log(positionToFind);

   for (let i = positionToFind; i < results.length; i++) {
      // Je créé les cartes de la lightbox depuis la position trouvée
      const result1 = results[i];
      const carrouselModalModel = lightboxMediasFactory(result1);
      const carrouselMediaCardDOM = carrouselModalModel.getLightboxMediaCardDOM();
      carrouselUlSection.appendChild(carrouselMediaCardDOM);
   }

   for (let x = 0; x < positionToFind; x++) {
      // Je créé le reste des cartes de la lightbox depuis 0  à la position trouvée
      const result2 = results[x];
      const carrouselModalModel = lightboxMediasFactory(result2);
      const carrouselMediaCardDOM = carrouselModalModel.getLightboxMediaCardDOM();
      carrouselUlSection.appendChild(carrouselMediaCardDOM);
   }

   const carouselItems = document.querySelectorAll(".carrousel__item");
   const nbCarouselItems = carouselItems.length;
   // console.log(nbCarouselItems);
   for (i = 1; i < nbCarouselItems; i++) {
      // console.log(nbCarouselItems);
      carouselItems[i].style.display = "none";
   }



}

/********* FUNCTIONS : GESTION DES ÉVÉNEMENTS DU CARROUSEL *********/
function manageCarousel(photographersMedias) {
   /* Ouverture de la lightbox */
   const cardMedia = document.querySelectorAll(".card__media-element");

   cardMedia.forEach((btn) =>
      btn.addEventListener("click", function () {
         // const currentCard = this.children;
         // const currentCard = this.nextElementSibling;
         const idCurrent = this.getAttribute("id");
         console.log(this);
         // console.log(currentCard);
         console.log(idCurrent);
         displayDataLightboxMedia(photographersMedias, idCurrent);
         displayModalLightbox();

         // /* Gestion des flèches du carrousel au clic */

         const nextBtn = document.querySelectorAll(".carrousel__controls--right");
         const prevBtn = document.querySelectorAll(".carrousel__controls--left");
         nextBtn.forEach((btn) => btn.addEventListener("click", goToNextSlide));
         prevBtn.forEach((btn) => btn.addEventListener("click", goToPreviousSlide));

         /* Fermeture de la lightbox */
         const buttonCloseLightbox = document.querySelectorAll(".carrousel__cross");
         buttonCloseLightbox.forEach((btn) =>
            btn.addEventListener("click", function () {
               closeModalLightbox();
            })
         );
         // cardMedia.forEach(element => element.setAttribute("tabindex", 0));
         // const currentFocus = this.setAttribute("tabindex", 1);
         // this.focus();



      })
   );


   /* Ouverture de la lightbox aavec la touch Entrée */
   cardMedia.forEach((btn) =>
      btn.addEventListener(
         "keydown",
         function (event) {
            if (event.defaultPrevented) {
               return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
            }
            switch (event.key) {
               case "Enter":
                  displayModalLightbox();
                  // Faire quelque chose pour la touche "esc" pressée.
                  break;
            }
            // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
            // event.preventDefault();
         },
         true
      )
   );

   const buttonCloseLightbox = document.querySelectorAll(".carrousel__cross");

   /* Fermeture de la lightbox avec la touch Entrée */
   buttonCloseLightbox.forEach((btn) =>
      btn.addEventListener(
         "keydown",
         function (event) {
            if (event.defaultPrevented) {
               return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
            }
            switch (event.key) {
               case "Enter":
                  closeModalLightbox();
                  // Faire quelque chose pour la touche "esc" pressée.
                  break;
            }
            // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
            // event.preventDefault();
         },
         true
      )
   );

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
}
