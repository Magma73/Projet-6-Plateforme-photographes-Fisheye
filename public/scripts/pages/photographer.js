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

async function displayDataContactPhotographer(photographersMedias) {
   const contactPhotographerSection = document.querySelector(".contact__modal");
   const photographerContactModel = contactPhotographerFactory(photographersMedias);
   const photographerContactCardDOM = photographerContactModel.getContactPhotographerCardDOM();
   contactPhotographerSection.appendChild(photographerContactCardDOM);
}

async function displayDataMedia(photographersMedias) {
   const photographersMediasSection = document.querySelector(".container__medias");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const results = photographersMedias.filter((photographersMedia) => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   photographersMediasSection.innerHTML = ""; // J'efface le contenu de container__medias : je réinitialise pour que ce soit vide
   results.forEach((result) => {
      // Pour chaque média associé à l'url du photographe filtré, je créé la carte MediaCardDom
      const photographerMediaModel = photographerMediasFactory(result);
      const photographerMediaCardDOM = photographerMediaModel.getMediaCardDOM();
      photographersMediasSection.appendChild(photographerMediaCardDOM);
   });
}

/* Functions de tri : sort */
function sortLikes(results) {
   results.sort(function (a, b) {
      return b.likes - a.likes;
   });
}
function sortTitle(results) {
   results.sort(function (a, b) {
      return a.title.localeCompare(b.title);
   });
}
function sortDate(results) {
   results.sort(function (a, b) {
      return b.date.localeCompare(a.date);
   });
}

async function displayDataMediaLikes(photographersMedias) {
   // Fonction appelée lorsqu'on clique sur l'option Priorité du wrapper
   const photographersMediasSection = document.querySelector(".container__medias");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const results = photographersMedias.filter((photographersMedia) => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   photographersMediasSection.innerHTML = ""; // J'efface le contenu de container__medias : je réinitialise pour que ce soit vide
   sortLikes(results); // Je trie mon tableau en fonction du nb de likes
   results.forEach((result) => {
      // Pour chaque média associé à l'url du photographe filtré, je créé la carte MediaCardDom
      const photographerMediaModel = photographerMediasFactory(result);
      const photographerMediaCardDOM = photographerMediaModel.getMediaCardDOM();
      photographersMediasSection.appendChild(photographerMediaCardDOM);
   });
}

async function displayDataMediaDate(photographersMedias) {
   // Fonction appelée lorsqu'on clique sur l'option Date du wrapper
   const photographersMediasSection = document.querySelector(".container__medias");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const results = photographersMedias.filter((photographersMedia) => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   photographersMediasSection.innerHTML = ""; // J'efface le contenu de container__medias : je réinitialise pour que ce soit vide
   sortDate(results); // Je trie mon tableau en fonction de la date
   results.forEach((result) => {
      // Pour chaque média associé à l'url du photographe filtré, je créé la carte MediaCardDom
      const photographerMediaModel = photographerMediasFactory(result);
      const photographerMediaCardDOM = photographerMediaModel.getMediaCardDOM();
      photographersMediasSection.appendChild(photographerMediaCardDOM);
   });
}

async function displayDataMediaTitle(photographersMedias) {
   // Fonction appelée lorsqu'on clique sur l'option Titre du wrapper
   const photographersMediasSection = document.querySelector(".container__medias");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const results = photographersMedias.filter((photographersMedia) => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   photographersMediasSection.innerHTML = ""; // J'efface le contenu de container__medias : je réinitialise pour que ce soit vide
   sortTitle(results); // Je trie mon tableau en fonction du titre
   results.forEach((result) => {
      // Pour chaque média associé à l'url du photographe filtré, je créé la carte MediaCardDom
      const photographerMediaModel = photographerMediasFactory(result);
      const photographerMediaCardDOM = photographerMediaModel.getMediaCardDOM();
      photographersMediasSection.appendChild(photographerMediaCardDOM);
   });
}

async function displayDataLightboxMedia(photographersMedias) {
   const carrouselUlSection = document.querySelector(".carrousel__list");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const results = photographersMedias.filter((photographersMedia) => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   // const idMedia = document.querySelectorAll("");

   // compareLightboxId(results);
   console.log(results);
   console.log(results.indexOf("8520927"));
   const pos = results.map((e) => e.id).indexOf("8520927");
   console.log(pos);

   results.forEach((result) => {
      // Pour chaque média associé à l'url du photographe filtré, je créé la carte MediaCardDom
      const carrouselModalModel = lightboxMediasFactory(result);
      const carrouselMediaCardDOM = carrouselModalModel.getLightboxMediaCardDOM();
      carrouselUlSection.appendChild(carrouselMediaCardDOM);
   });
}

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
   displayDataContactPhotographer(photographersMedias);
   displayDataMedia(photographersMedias);
   displayDataEncart(photographers);
   displayDataLightboxMedia(photographersMedias);

   // FORMULAIRE DE CONTACT
   /* Ouverture de la modal contact */
   const buttonContact = document.querySelector(".button__contact");
   buttonContact.addEventListener("click", displayModal);

   /* Fermeture de la modal contact */
   const buttonClose = document.querySelector(".modal__close--form");
   buttonClose.addEventListener("click", closeModal);

   /* Fermeture de la modal contactavec la touch Entrée */
   buttonClose.addEventListener(
      "keydown",
      function (event) {
         if (event.defaultPrevented) {
            return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
         }
         switch (event.key) {
            case "Enter":
               closeModal();
               // Faire quelque chose pour la touche "esc" pressée.
               break;
         }
         // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
         event.preventDefault();
      },
      true
   );
   // MESSAGE DE VALIDATION
   /* Fermeture de la modal message de validation avec la croix */
   const crossCloseMessage = document.querySelector(".modal__close--validate");
   crossCloseMessage.addEventListener("click", closeModalValidate);

   /* Fermeture de la modal message de validation avec le bouton */
   const buttonCloseMessage = document.querySelector(".button__close");
   buttonCloseMessage.addEventListener("click", closeModalValidate);

   /* Fermeture de la modal validation (croix) avec la touch Entrée */
   buttonCloseMessage.addEventListener(
      "keydown",
      function (event) {
         if (event.defaultPrevented) {
            return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
         }
         switch (event.key) {
            case "Enter":
               closeModalValidate();
               // Faire quelque chose pour la touche "esc" pressée.
               break;
         }
         // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
         event.preventDefault();
      },
      true
   );

   /* Fermeture des modals contact et validation avec la touche échap*/
   // const modal = document.querySelectorAll(".contact__modal");
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
               closeDropdown();
               // Faire quelque chose pour la touche "esc" pressée.
               break;
         }
         // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
         // event.preventDefault();
      },
      true
   );

   /*WRAPPER*/
   // Ouverture du wrapper
   const buttonWrapper = document.querySelector(".button__wrapper");
   buttonWrapper.addEventListener("click", openDropdown);

   buttonWrapper.addEventListener(
      "keydown",
      function (event) {
         if (event.defaultPrevented) {
            return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
         }
         switch (event.key) {
            case "Enter":
               openDropdown();
               // const wrapperOption1 = document.querySelector(".wrapper__option--1");
               // wrapperOption1.focus();
               // Faire quelque chose pour la touche "esc" pressée.
               break;
         }
         // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
         // event.preventDefault();
      },
      true
   );

   // Fermeture du wrapper
   const wrapperList = document.querySelectorAll(".wrapper__option");
   wrapperList.forEach((btn) =>
      btn.addEventListener("click", function () {
         const currentOption = this;
         changeName(currentOption);
         associateOption(currentOption);
         closeDropdown();
      })
   );

   /* Function test l'option choisie du wrapper */
   function associateOption(currentOption) {
      const currentText = currentOption.innerText;
      if (currentText === "Priorité") {
         displayDataMediaLikes(photographersMedias);
      } else if (currentText === "Titre") {
         displayDataMediaTitle(photographersMedias);
      } else if (currentText === "Date") {
         displayDataMediaDate(photographersMedias);
      } else {
         console.log("Erreur : pas d'option sélectionnée");
      }
   }

   // Gérer les événements au clavier
   wrapperList.forEach((btn) =>
      btn.addEventListener(
         "keydown",
         function (event) {
            const currentOption = this;
            if (event.defaultPrevented) {
               return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
            }
            switch (event.key) {
               case "Enter":
                  closeDropdown();
                  changeName(currentOption);
                  event.preventDefault();
                  break;
               case "ArrowDown": // Lorsque la touche "flèche bas" pressée, aller à la prochaine option
                  goToNextOption();
                  break;

               case "ArrowUp": // Lorsque la touche "flèche haut" pressée, aller à l'option précédante
                  goToPreviousOption();
                  break;
            }
            // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
            // event.preventDefault();
         },
         true
      )
   );

   /*CARROUSEL*/
   // Crée les events pour faire fonctionner la modale lightbox
   /* Ouverture de la lightbox */
   const cardMedia = document.querySelectorAll(".card__media-element");
   cardMedia.forEach((btn) =>
      btn.addEventListener("click", function (e) {
         const idCurrent = this.getAttribute("id");
         // console.log(e);

         console.log(idCurrent);
         displayModalLightbox(idCurrent);
      })
   );

   // function compareLightboxId(results) {
   //    console.log(beasts.indexOf('bison'));
   //    results.sort(function (a, b) {
   //      return b.id - a.id;
   //    });
   //    /*console.log(media);*/
   //    console.log("Je trie par id");
   //  }

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

   /* Fermeture de la lightbox */
   const buttonCloseLightbox = document.querySelectorAll(".carrousel__cross");
   buttonCloseLightbox.forEach((btn) => btn.addEventListener("click", closeModalLightbox));

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
   /* Initialisation des medias du carrousel en display none sauf la première diapo */
   const carouselItems = document.querySelectorAll(".carrousel__item");
   const nbCarouselItems = carouselItems.length;
   for (i = 1; i < nbCarouselItems; i++) {
      carouselItems[i].style.display = "none";
   }

   /* Gestion des flèches du carrousel */
   const nextBtn = document.querySelectorAll(".carrousel__controls--right");
   const prevBtn = document.querySelectorAll(".carrousel__controls--left");
   nextBtn.forEach((btn) => btn.addEventListener("click", goToNextSlide));
   prevBtn.forEach((btn) => btn.addEventListener("click", goToPreviousSlide));

   // LIKES
   const hearthIcons = document.querySelectorAll(".card__media--icon-heart");

   hearthIcons.forEach((btn) =>
      btn.addEventListener("click", function () {
         const currentCard = this.previousElementSibling;
         addClick(currentCard);
         total();
      })
   );

   /* Ajout des likes avec la touch Entrée */
   hearthIcons.forEach((btn) =>
      btn.addEventListener(
         "keydown",
         function (event) {
            const currentCard = this.previousElementSibling;
            if (event.defaultPrevented) {
               return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
            }
            switch (event.key) {
               case "Enter":
                  addClick(currentCard);
                  total();
                  break;
            }
            // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
            // event.preventDefault();
         },
         true
      )
   );
}

init();
