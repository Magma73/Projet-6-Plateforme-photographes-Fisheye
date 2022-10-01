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
  const photographersHeader = document.querySelector(".photographer__header");
  const params = new URL(document.location).searchParams; // Je récupère les paramètres de mon url
  const idURL = parseInt(params.get("id"), 10); // Je récupère la valeur associée à mon id
  const isIDPohotograph = photographers.find((isId) => isId.id === idURL); // Je filtre mon tableau d'objet grâce à l'id récupérée
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
    // Création de l'élément heading
    const div1 = document.createElement("div");
    div1.className = "photographer__header--heading";

    // Création du titre h1 : nom du photographe
    const h1 = document.createElement("h1");
    h1.className = "photographer__header--title";
    h1.textContent = name;

    // Création du body : location + tagline
    const body = document.createElement("div");
    body.className = "photographer__header--body";

    // Création du body : location + tagline
    const h2 = document.createElement("h2");
    h2.className = "photographer__header--location";
    h2.textContent = city +  ", " + country;

    // Créations du paragraphe tagline
    const p1 = document.createElement( "p" );
    p1.className = "photographer__header--tagline";
    p1.textContent = tagline;

    // Création du conteneur du bouton
    const div2 = document.createElement("div");
    div2.className = "photographer__header--link";

    // Création du bouton
    const button = document.createElement("button");
    button.className = "photographer__header--contact-button";
    button.textContent = "Contactez-moi";

    // Création de l'image et attribut alt
    const img = document.createElement( "img" );
    img.className = "photographer__header--portrait";
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);


    // Ajout du titre h2 et de la tagline dans le body
    body.appendChild(h2);
    body.appendChild(p1);

    // Ajout du bouton dans la div link
    div2.appendChild(button);

    // Ajout du bouton dans la div link
    div2.appendChild(button);

    // Ajout du titre h1 et du body dans la div photographer__header
    div1.appendChild(h1);
    div1.appendChild(body);
    div1.appendChild(div2);
    div1.appendChild(img);

    return (div1);
  }
  return { name, id, city, country, tagline, price, picture, getUserCardDOM };
}
