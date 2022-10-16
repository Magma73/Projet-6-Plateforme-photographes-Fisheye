function sortMediasFactory(photographersMedias) {
    const { id, photographerId, title, image, video, likes, date, price } = photographersMedias;

    // FACTORY DES FILTRES : Page photographer.html

    function getSortCardDOM() {

      // Création du conteneur titre tri
      const conteneurSortHeading = document.createElement("div");
      conteneurSortHeading.className = "sort__heading";

      // Création du conteneur nav tri
      const conteneurSortLabel = document.createElement("label");
      conteneurSortLabel.className = "sort__label";
      conteneurSortLabel.setAttribute("for", "sort");
      conteneurSortLabel.setAttribute("aria-label", "order by");
      conteneurSortLabel.textContent = "Trier par : "
      conteneurSortLabel.setAttribute("tabindex", "0");

      // Création du select
      const sortSelect = document.createElement("select");
      sortSelect.className = "sort__select";
      sortSelect.setAttribute("name", "choice");
      sortSelect.setAttribute("id", "choice");
      sortSelect.setAttribute("tabindex", "0");

    //  Création du menu déroulant
      const menuSort = document.createElement("option");
      menuSort.className = "sort__dropdown";

    //  Création des options
      const optionPopularite = document.createElement("option");
      optionPopularite.className = "sort__option";
      optionPopularite.textContent = "Popularité";
      optionPopularite.setAttribute("value", "popularite");
      optionPopularite.setAttribute("id", "popularite");

      const optionDate = document.createElement("option");
      optionDate.className = "sort__option";
      optionDate.textContent = "Date";
      optionDate.setAttribute("value", "date");

      const optionTitre = document.createElement("option");
      optionTitre.className = "sort__option";
      optionTitre.textContent = "Titre";
      optionTitre.setAttribute("value", "titre");

      // Ajout des options dans le select
      sortSelect.appendChild(optionPopularite);
      sortSelect.appendChild(optionDate);
      sortSelect.appendChild(optionTitre);

      // Ajout des éléments du filtre
      conteneurSortHeading.appendChild(conteneurSortLabel);
      conteneurSortHeading.appendChild(sortSelect);

      return (conteneurSortHeading);
    }
    return { id, photographerId, title, image, video, likes, date, price, getSortCardDOM } ;
  }
