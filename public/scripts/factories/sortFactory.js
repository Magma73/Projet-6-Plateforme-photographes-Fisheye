function sortMediasFactory(photographersMedias) {
    const { id, photographerId, title, image, video, likes, date, price } = photographersMedias;

    // const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
    // const nom = params.get("name"); // Je récupère le nom du photographe
    // const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id

    // FACTORY DES FILTRES : Page photographer.html

    function getSortCardDOM() {

      // Création du conteneur titre tri
      const conteneurSortHeading = document.createElement("div");
      conteneurSortHeading.className = "sort__heading";

      // Création du conteneur nav tri
      const conteneurSortInput = document.createElement("input");
      conteneurSortInput.className = "sort__filter";

      // Création du titre tri
      const titreSort = document.createElement("p");
      titreSort.className = "sort__title";
      titreSort.textContent = "Trier par";

    //   // Création du menu déroulant
    //   const menuTri = document.createElement("ul");
    //   menuTri.className = "sort__dropdown";
    //   const menuElementTri = document.createElement("li");
    //   let elements= ["Popularité", "Date", "Titre"];
    //   for (let i=0; length.elements < 3; i++){
    //     menuElementTri.textContent = elements[i];
    //   }
    //   menuElementTri.className = "sort__element";

      // Ajout des éléments du filtre
      conteneurSortHeading.appendChild(titreSort);



      return (conteneurSortHeading);
    }
    return { id, photographerId, title, image, video, likes, date, price, getSortCardDOM } ;
  }
