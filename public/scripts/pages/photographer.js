// Appel des datas avec la fonction fetch
async function getPhotographers() {
    try {
      const response = await fetch("../data/photographers.json");
      if (response.status === 200) {
        const dataPhotographers = await response.json();
        const photographers = dataPhotographers.photographers;
        return {
          photographers: [...photographers],

        };
      } else {
        throw "Le fichier JSON n'a pas été trouvé";
      }
    } catch (error) {
      throw error;
    }
  }

  async function displayData(photographers) {
    const photographersHeader = document.querySelector(".photograph__header");
    const params = (new URL(document.location)).searchParams; // Je récupère les paramètres de mon url
    const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
    const isIDPohotograph = photographers.find( isId => isId.id === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
    const photographerHeaderModel = photographerHeaderFactory(isIDPohotograph);
    const photographerCardDOM = photographerHeaderModel.getUserCardDOM();
    photographersHeader.appendChild(photographerCardDOM);
  }

  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
  }

  init();



//Je créé une page pour chaque photographe (photographer.html)

function photographerHeaderFactory(data) {

    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        // Création de l'élément article card__content
        const article = document.createElement( 'article' );
        article.className = 'card__content';

        // Création du titre h2 : nom du photographe
        const h2 = document.createElement( 'h2' );
        h2.className = 'card__title';
        h2.textContent = name;


        // Ajout de la div card__photographer dans article
        article.appendChild(h2);

        return (article);
    }
    return { name,  id, city, country, tagline, price, picture, getUserCardDOM }
}