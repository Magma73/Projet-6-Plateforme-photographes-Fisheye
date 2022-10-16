function photographerMediasFactory(photographersMedias) {
    const { id, photographerId, title, image, video, likes, date, price } = photographersMedias;

    const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
    const nom = params.get("name").toString(); // Je récupère le nom du photographe



    const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id

    // const photographerId = idURL;
    // console.log(photographerId);

    const mediaPhoto = `./assets/photographers/${nom}/${image}`;
    const mediaVideo = `./assets/photographers/${nom}/${video}`;

    function getMediaCardDOM() {
      // Création du conteneur article
      const article = document.createElement("article");
      article.className = "card__media";

      // Création du conteneur media element
      const mediaElement = document.createElement("div");
      mediaElement.className = "card__media-element";
      mediaElement.setAttribute("tabindex", "0");

    // Création du média photo ou video et ajout dans la div mediaElement
      if(video !== undefined) {
        const video = document.createElement("video");
        video.setAttribute("src", mediaVideo);
        video.setAttribute("alt", title);
        video.controls = true;
        video.className = "card__media--video";
        mediaElement.appendChild(video);

      } else if (image !== undefined){
        const img = document.createElement("img");
        img.setAttribute("src", mediaPhoto);
        img.setAttribute("alt", title);
        img.className = "card__media--img";
        mediaElement.appendChild(img);
      } else {
        console.log("Pas d'images ni de vidéos trouvées");
      }

      // Création du conteneur media informations
      const mediaInfos = document.createElement("div");
      mediaInfos.className = "card__media-infos";

      // Création du titre
      const titre = document.createElement("h3");
      titre.className = "card__media--title";
      titre.textContent = title;
      titre.setAttribute("tabindex", "0");

      // Création du conteneur icon
      const conteneurIcon = document.createElement("div");
      conteneurIcon.className = "card__media-icon";

      // Création du nombre de likes
      const nbLikes = document.createElement("p");
      nbLikes.className = "card__media-likes";
      nbLikes.textContent = likes;
      nbLikes.setAttribute("tabindex", "0");

      // Création de l'icône
      const icon = document.createElement("i");
      icon.className = "fas fa-heart card__media--icon-heart";
      // icon.textContent =
      // "<path d='M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z' fill='#911C1C'/>";

      // "width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>"+


      // Ajout de l'icône dans le conteneur icône
      conteneurIcon.appendChild(nbLikes);
      conteneurIcon.appendChild(icon);

    // Ajout du titre et de l'icône dans le conteneur mediaInfos
      mediaInfos.appendChild(titre);
      mediaInfos.appendChild(conteneurIcon);

      // Ajout des éléments mediaElement et mediaInfos dans l'article
      article.appendChild(mediaElement);
      article.appendChild(mediaInfos);

      return (article);
    }
    return {  id, photographerId, title, image, video, likes, date, price, getMediaCardDOM };
  }
