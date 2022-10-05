function photographerMediasFactory(photographersMedias) {
    const { id, photographerId, title, image, video, likes, date, price } = photographersMedias;

    const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
    const nom = params.get("name"); // Je récupère le nom du photographe

    const mediaPhoto = `./assets/photographers/${nom}/${image}`;
    const mediaVideo = `./assets/photographers/${nom}/${video}`;

    function getMediaCardDOM() {
      // Création du conteneur article
      const article = document.createElement("article");
      article.className = "card__media";

      // Création du titre
      const titre = document.createElement("h3");
      titre.className = "card__media--title";
      titre.textContent = title;

    // Création du média photo
        const img = document.createElement("img");
        // img.className = "card__media--img";
        img.setAttribute("src", mediaPhoto);
        img.setAttribute("alt", title);

      // Ajout des éléments dans la div1 : banner
      article.appendChild(titre);
      article.appendChild(img);

      return (article);
    }
    return {  id, photographerId, title, image, video, likes, date, price, getMediaCardDOM };
  }
