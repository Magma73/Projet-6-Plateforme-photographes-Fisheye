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
   const isIDPhotograph = photographers.find((isId) => isId.id === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   const photographerHeaderModel = photographerFactory(isIDPhotograph);
   const photographerCardDOM = photographerHeaderModel.getPhotographerCardDOM();
   photographersHeader.appendChild(photographerCardDOM);
}

async function displayDataMedia(photographersMedias) {
   const photographersMediasSection = document.querySelector(".photographer__medias");
   const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
   const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
   const isIDPhotographID = photographersMedias.find((isId) => isId.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
   const photographerMediaModel = photographerMediasFactory(isIDPhotographID);
   const photographerMediaCardDOM = photographerMediaModel.getMediaCardDOM();
   photographersMediasSection.appendChild(photographerMediaCardDOM);
}

async function init() {
   // Récupère les datas des photographes
   const { photographers } = await getPhotographers();
   displayData(photographers);

   // Récupère les datas medias des photographes
   const { photographersMedias } = await getPhotographers();
   displayDataMedia(photographersMedias);
}

init();