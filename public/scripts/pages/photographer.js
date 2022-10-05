// Appel des datas avec la fonction fetch
async function getPhotographers() {
  try {
    const response = await fetch("../data/photographers.json");
    if (response.status === 200) {
      const dataPhotographers = await response.json();
      const photographers = dataPhotographers.photographers;
    //   console.log(photographers);
      const photographersMedias = dataPhotographers.media;
    //   console.log(photographersMedias);
      return (
        // console.log(
            {
        photographers: [...photographers],
        photographersMedias: [...photographersMedias]
        }
        // ),
        // console.log(
        // {
        //     photographersMedias: [...photographersMedias]
        // })
        )
    // console.log( {
    //     photographersMedias: [...photographersMedias]
    //   })
    //   );
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
//   console.log(idURL);
  const isIDPhotograph = photographers.find((isId) => isId.id === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
  const photographerHeaderModel = photographerFactory(isIDPhotograph);
  const photographerCardDOM = photographerHeaderModel.getPhotographerCardDOM();
  photographersHeader.appendChild(photographerCardDOM);
}

async function displayDataMedia(photographersMedias) {
    const photographersMediasSection = document.querySelector(".photographer__medias");
    const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
    const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
    // console.log(idURL);
    const nom = params.get("name"); // Je récupère le nom du photographe
    // console.log(nom);
    const isIDPhotographID = photographersMedias.find((isId) => isId.photographerId === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
    // console.log(isIDPhotographID);
    const photographerMediaModel = photographerMediasFactory(isIDPhotographID);
    const photographerMediaCardDOM = photographerMediaModel.getMediaCardDOM();
    photographersMediasSection.appendChild(photographerMediaCardDOM);
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
//   console.log($this);
  displayData(photographers);

  // Récupère les datas medias des photographes
  const { photographersMedias } = await getPhotographers();
  displayDataMedia(photographersMedias);
}

init();

//Je créé une page pour chaque photographe (photographer.html)

// function photographerHeaderFactory(data) {
//   const { name, id, city, country, tagline, price, portrait } = data;

//   const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;

//   function getPhotographerCardDOM() {
//     // Création du conteneur banner
//     const div1 = document.createElement("div");
//     div1.className = "banner";

//     // Création de l'élément heading
//     const div2 = document.createElement("div");
//     div2.className = "banner__heading";

//     // Création du titre h1 : nom du photographe
//     const h1 = document.createElement("h1");
//     h1.className = "banner__title";
//     h1.textContent = name;

//     // Création du body : location + tagline
//     const body = document.createElement("div");
//     body.className = "banner__body";

//     // Création du titre h2 : location
//     const h2 = document.createElement("h2");
//     h2.className = "banner__location";
//     h2.textContent = city +  ", " + country;

//     // Créations du paragraphe tagline
//     const p1 = document.createElement( "p" );
//     p1.className = "banner__tagline";
//     p1.textContent = tagline;

//     // Création du conteneur du bouton
//     const div3 = document.createElement("div");
//     div3.className = "banner__link-contact";

//     // Création du bouton
//     const button = document.createElement("button");
//     button.className = "banner__button";
//     button.textContent = "Contactez-moi";
//     button.setAttribute("aria-label", "Contactez-moi");

//     // Création de la div contenant l'image et attribut alt
//     const div4 = document.createElement( "div" );
//     div4.className = "banner__img";

//     // Création de l'image et attribut alt
//     const img = document.createElement( "img" );
//     img.setAttribute("src", picture);
//     img.setAttribute("alt", name);

//     // Ajout du titre h2 et de la tagline dans le body
//     body.appendChild(h2);
//     body.appendChild(p1);

//     // Ajout du titre h1 et du body dans la div photographer__header
//     div2.appendChild(h1);
//     div2.appendChild(body);

//     // Ajout du bouton dans la div link
//     div3.appendChild(button);

//     // Ajout de l'image dans la div banner__img
//     div4.appendChild(img);

//     // Ajout des éléments dans la div1 : banner
//     div1.appendChild(div2);
//     div1.appendChild(div3);
//     div1.appendChild(div4);

//     return (div1);
//   }
//   return { name, id, city, country, tagline, price, picture, getPhotographerCardDOM };
// }
