// Appel des datas avec la fonction fetch
async function getPhotographers() {
   try {
      const response = await fetch("../data/photographers.json");
      if (response.status === 200) {
         const dataPhotographers = await response.json();
         const photographers = dataPhotographers.photographers;
         const photographersMedias = dataPhotographers.media;
         return (
            {
               photographers: [...photographers],
               photographersMedias: [...photographersMedias],
            }
         );
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

async function displayDataFilter(photographersMedias) {
   const photographersSortSection = document.querySelector(".container__sort");
   // const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   // const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   // const results = photographersMedias.filter(photographersMedia => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   const photographerSortModel = sortMediasFactory(photographersMedias);
   const photographerSortCardDOM = photographerSortModel.getSortCardDOM();
   photographersSortSection.appendChild(photographerSortCardDOM);

}

async function displayDataMedia(photographersMedias) {
   const photographersMediasSection = document.querySelector(".container__medias");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const results = photographersMedias.filter(photographersMedia => photographersMedia.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   results.forEach((result) => { // Pour chaque média associé à l'url du photographe filtré, je créé la carte MediaCardDom
      const photographerMediaModel = photographerMediasFactory(result);
      const photographerMediaCardDOM = photographerMediaModel.getMediaCardDOM();
      photographersMediasSection.appendChild(photographerMediaCardDOM);
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
   displayDataMedia(photographersMedias);
   displayDataFilter(photographersMedias);
   displayDataEncart(photographers);

   // Crée les fonctions pour faire fonctionner la modale de contact
      ///* Ouverture de la modal contact *///
   const buttonContact = document.querySelector(".button__contact");
      buttonContact.addEventListener("click", displayModal);

      ///* Fermeture de la modal contact *///
   const buttonClose = document.querySelector(".button__close");
   buttonClose.addEventListener("click", closeModal);
}

init();

