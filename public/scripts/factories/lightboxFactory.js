// function lightboxMediasFactory(photographersMedias) {
//     const { id, photographerId, title, image, video, likes, date, price } = photographersMedias;

//     const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
//     const nom = params.get("name").toString(); // Je récupère le nom du photographe

//     // const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id

//     // const photographerId = idURL;
//     // console.log(photographerId);

//     const mediaPhoto = `./assets/photographers/${nom}/${image}`;
//     const mediaVideo = `./assets/photographers/${nom}/${video}`;

//     function getLightboxMediaCardDOM() {
//       // Création du conteneur ul
//       const carrouselList = document.createElement("ul");
//       carrouselList.className = "carrousel__list";

//       // Création des li
//       const carrouselItem = document.createElement("li");
//       carrouselItem.className = "carrousel__item";
//     //   carrouselList.setAttribute("tabindex", "0");

//     // Création du média photo ou video et ajout dans la div mediaElement
//       if(video !== undefined) {
//         const video = document.createElement("video");
//         video.setAttribute("src", mediaVideo);
//         video.setAttribute("alt", title);
//         video.controls = true;
//         video.className = "carrousel__media--video";
//         carrouselItem.appendChild(video);

//       } else if (image !== undefined){
//         const img = document.createElement("img");
//         img.setAttribute("src", mediaPhoto);
//         img.setAttribute("alt", title);
//         img.className = "carrousel__media--img";
//         carrouselItem.appendChild(img);
//       } else {
//         console.log("Pas d'images ni de vidéos trouvées");
//       }

//       // Ajout des éléments mediaElement et mediaInfos dans l'article
//       carrouselList.appendChild(carrouselItem);

//       return (carrouselList);
//     }
//     return {  id, photographerId, title, image, video, likes, date, price, getLightboxMediaCardDOM };
//   }
