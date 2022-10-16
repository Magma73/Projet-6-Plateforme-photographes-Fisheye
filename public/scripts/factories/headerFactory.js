function headerPhotographerFactory(photographers) {
    const { name, id, city, country, tagline, price, portrait } = photographers;

    const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;

    // FACTORY DES PAGES PHOTOGRAPHES : création du header pour chaque photographe (photographer.html)

    function getPhotographerCardDOM() {
        // Création du conteneur banner
        const banner = document.createElement("div");
        banner.className = "banner";

        // Création de l'élément heading
        const bannerHeading = document.createElement("div");
        bannerHeading.className = "banner__heading";

        // Création du titre h1 : nom du photographe
        const title = document.createElement("h1");
        title.className = "banner__title";
        title.textContent = name;

        // Création du body : location + tagline
        const body = document.createElement("div");
        body.className = "banner__body";

        // Création du titre h2 : location
        const location = document.createElement("h2");
        location.className = "banner__location";
        location.textContent = city +  ", " + country;

        // Créations du paragraphe tagline
        const mantra = document.createElement( "p" );
        mantra.className = "banner__tagline";
        mantra.textContent = tagline;

        // Création du conteneur du bouton et de l'image
        const containerContact = document.createElement("div");
        containerContact.className = "banner__contact";

        // Création du bouton
        const button = document.createElement("button");
        button.className = "button button__contact";
        button.textContent = "Contactez-moi";
        button.setAttribute("aria-label", "Contactez-moi");

        // Création du conteneur du bouton
        const containerButton = document.createElement("div");
        containerButton.className = "banner__button";

        // Création de la div contenant l'image et attribut alt
        const containerImg = document.createElement( "div" );
        containerImg.className = "banner__img";

        // Création de l'image et attribut alt
        const img = document.createElement( "img" );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        // Ajout du titre h2 et de la tagline dans le body
        body.appendChild(location);
        body.appendChild(mantra);

        // Ajout du titre h1 et du body dans la div photographer__header
        bannerHeading.appendChild(title);
        bannerHeading.appendChild(body);

        // Ajout du bouton dans le container bouton
        containerButton.appendChild(button);

        // Ajout de l'image dans le container image
        containerImg.appendChild(img);

        // Ajout des containers bouton et image dans le containerContact
        containerContact.appendChild(containerButton);
        containerContact.appendChild(containerImg);

        // Ajout des éléments dans lea div banner
        banner.appendChild(bannerHeading);
        banner.appendChild(containerContact);

        return (banner);
      }
    // return { name,  id, city, country, tagline, price, picture, getUserCardDOM }
    return { name,  id, city, country, tagline, price, picture, getPhotographerCardDOM }
}