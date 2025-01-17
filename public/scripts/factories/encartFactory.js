function encartMediasFactory(photographers) {
    const { name, id, city, country, tagline, price, portrait } = photographers;

    // CALCUL DE LA SOMME TOTALE DES LIKES
    const nbLikes = document.querySelectorAll(".card__media-likes");// Je vais chercher tous les likes
    let totalLikes = 0; // J'initialise ma variable à 0
    nbLikes.forEach(function (nbLike) { // Je récupère les likes de chaque média
      const nbLikeType = parseFloat(nbLike.textContent); // Je transforme ce que j'ai récupéré en un type nombre
      totalLikes = totalLikes + nbLikeType; // Je fais la somme des likes
    });

    // FACTORY DE L'ENCART : Page photographer.html

    function getEncartCardDOM() {

    // Création du conteneur encart
    const containerEncart = document.createElement("div");
    containerEncart.className = "container__encart";
    containerEncart.setAttribute("tabindex", "0");

    // Création du conteneur des likes
    const encartLikes = document.createElement("div");
    encartLikes.className = "encart__likes";

    // Création du conteneur du tarif journalier
    const encartTarif = document.createElement("div");
    encartTarif.className = "encart__tarif";

    // Création du nombre total de likes
    const nbTotalLikes = document.createElement("p");
    nbTotalLikes.className = "encart__likes--total";
    nbTotalLikes.textContent = totalLikes;
    nbTotalLikes.setAttribute("tabindex", "0");

    // Création de l'icône
    const iconTotalLikes = document.createElement("i");
    iconTotalLikes.className = "fas fa-heart encart__likes--heart";
    iconTotalLikes.setAttribute("aria-label", "Nombre total de likes");

    // Création du tarif journalier
    const encartTarifJour = document.createElement("p");
    encartTarifJour.className = "encart__tarifJour";
    encartTarifJour.textContent = price + "€ / jour";
    encartTarifJour.setAttribute("tabindex", "0");

    // Ajout du nombre de likes et de l'icône dans le conteneur des likes
    encartLikes.appendChild(nbTotalLikes);
    encartLikes.appendChild(iconTotalLikes);

    // Ajout du tarif journalier dans le conteneur encartTarif
    encartTarif.appendChild(encartTarifJour);

    // Ajout des éléments encartLikes et encartTarif dans containerEncart
    containerEncart.appendChild(encartLikes);
    containerEncart.appendChild(encartTarif);

    return (containerEncart);
    }
    return { name, id, city, country, tagline, price, portrait, getEncartCardDOM } ;
  }
