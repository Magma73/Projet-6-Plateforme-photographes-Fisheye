function encartMediasFactory(photographers) {
    const { name, id, city, country, tagline, price, portrait } = photographers;

    // FACTORY DE L'ENCART : Page photographer.html

    function getEncartCardDOM() {

    // Création du conteneur du nb total des likes
    const containerEncart = document.createElement("div");
    containerEncart.className = "container__encart";

    // Création du conteneur du nb total des likes
    const encartLikes = document.createElement("div");
    encartLikes.className = "encart__likes";

    // Création du conteneur du tarfi journalier
    const encartTarif = document.createElement("div");
    encartTarif.className = "encart__tarif";

    // Création du nombre total de likes
    const nbTotalLikes = document.createElement("p");
    nbTotalLikes.className = "encart__likes--total";
    nbTotalLikes.textContent = "123";

    // Création de l'icône
    const iconTotalLikes = document.createElement("i");
    iconTotalLikes.className = "fas fa-heart encart__likes--heart";

    // Création du conteneur du tarfi journalier
    const encartTarifJour = document.createElement("p");
    encartTarifJour.className = "encart__tarifJour";
    encartTarifJour.textContent = price + "€/jour";

    // Ajout du nombre de likes et de l'icône dans le conteneur nb total des likes
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
