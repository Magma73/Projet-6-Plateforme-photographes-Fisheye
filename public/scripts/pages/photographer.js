// Appel des datas avec la fonction fetch
async function getPhotographers() {
   try {
      const response = await fetch("../data/photographers.json");
      if (response.status === 200) {
         const dataPhotographers = await response.json();
         const photographers = dataPhotographers.photographers;
         const photographersMedias = dataPhotographers.media;
         return {
            photographers: [...photographers],
            photographersMedias: [...photographersMedias],
         };
      } else {
         throw "Le fichier JSON n'a pas été trouvé";
      }
   } catch (error) {
      throw error;
   }
}

async function displayData(photographers) {
   const photographersHeader = document.querySelector(".photographer__header");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const isIDPhotograph = photographers.find((isId) => isId.id === idURL); // Je trouve dans mon tableau d'objet l'id à récupérer
   const photographerHeaderModel = headerPhotographerFactory(isIDPhotograph);
   const photographerCardDOM = photographerHeaderModel.getPhotographerCardDOM();
   photographersHeader.appendChild(photographerCardDOM);
}

// async function displayDataFilter(photographersMedias) {
//    const photographersSortSection = document.querySelector(".container__sort");
//    // const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
//    // const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
//    // const results = photographersMedias.filter(photographersMedia => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
//    const photographerSortModel = sortMediasFactory(photographersMedias);
//    const photographerSortCardDOM = photographerSortModel.getSortCardDOM();
//    photographersSortSection.appendChild(photographerSortCardDOM);
// }

async function displayDataMedia(photographersMedias) {
   const photographersMediasSection = document.querySelector(".container__medias");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const results = photographersMedias.filter((photographersMedia) => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   results.forEach((result) => {
      // Pour chaque média associé à l'url du photographe filtré, je créé la carte MediaCardDom
      const photographerMediaModel = photographerMediasFactory(result);
      const photographerMediaCardDOM = photographerMediaModel.getMediaCardDOM();
      photographersMediasSection.appendChild(photographerMediaCardDOM);
   });
}

// async function displayLightboxMedia(photographersMedias) {
//    const carrouselModalSection = document.querySelector(".carrousel__modal");
//    const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
//    const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
//    const results = photographersMedias.filter((photographersMedia) => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
//    results.forEach((result) => {
//       // Pour chaque média associé à l'url du photographe filtré, je créé la carte MediaCardDom
//       const carrouselModalModel = lightboxMediasFactory(result);
//       const carrouselMediaCardDOM = carrouselModalModel.getLightboxMediaCardDOM();
//       carrouselModalSection.appendChild(carrouselMediaCardDOM);
//    });
// }

async function displayDataEncart(photographers) {
   const photographersEncartSection = document.querySelector(".photographer__footer");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const isIDPhotograph = photographers.find((isId) => isId.id === idURL); // Je trouve dans mon tableau d'objet l'id à récupérer
   const photographerEncartModel = encartMediasFactory(isIDPhotograph);
   const photographerEncartCardDOM = photographerEncartModel.getEncartCardDOM();
   photographersEncartSection.appendChild(photographerEncartCardDOM);
}

async function init() {
   // Récupère les datas des photographes
   const { photographers } = await getPhotographers();
   displayData(photographers);

   // Récupère les datas medias des photographes
   const { photographersMedias } = await getPhotographers();
   displayDataMedia(photographersMedias);
   // displayDataFilter(photographersMedias);
   displayDataEncart(photographers);
   // displayLightboxMedia(photographersMedias);

   // Crée les fonctions pour faire fonctionner la modale de contact
   /* Ouverture de la modal contact */
   const buttonContact = document.querySelector(".button__contact");
   buttonContact.addEventListener("click", displayModal);

   /* Fermeture de la modal contact */
   const buttonClose = document.querySelector(".modal__close--form");
   buttonClose.addEventListener("click", closeModal);

   /* Fermeture de la modal message de validation avec la croix */
   const crossCloseMessage = document.querySelector(".modal__close--validate");
   crossCloseMessage.addEventListener("click", closeModalValidate);

   /* Fermeture de la modal message de validation avec le bouton */
   const buttonCloseMessage = document.querySelector(".button__close");
   buttonCloseMessage.addEventListener("click", closeModalValidate);

   /* Fermeture de la modal contact avec la touche échap*/
   const modal = document.querySelectorAll(".contact__modal");
   window.addEventListener(
      "keydown",
      function (event) {
         if (event.defaultPrevented) {
            return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
         }
         switch (event.key) {
            case "Escape":
               closeModal();
               closeModalValidate();
               // Faire quelque chose pour la touche "esc" pressée.
               break;
         }
         // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
         // event.preventDefault();
      },
      true
   );

   /* Ajout du nom du photographe */
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const nom = params.get("name").toString(); // Je récupère le nom du photographe
   const contactPhotographer = document.querySelector(".modal__title");
   contactPhotographer.textContent = "Contactez-moi "+ nom;
   contactPhotographer.setAttribute("aria-labelledby", "Contactez-moi " + nom);


   /*WRAPPER*/

   const buttonWrapper = document.querySelector(".wrapper__select");
   buttonWrapper.addEventListener("click", openDropdown);


   // Crée les fonctions pour ouvrir la lightbox
   /* Ouverture de la lightbox */
   const cardMedia = document.querySelectorAll(".card__media");
   cardMedia.forEach((btn) => btn.addEventListener("click", displayModalLightbox));

   function displayModalLightbox(){
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


}

init();
