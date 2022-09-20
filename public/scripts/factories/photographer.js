function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `./assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.className = 'card__content';

        const div1 = document.createElement( 'div' );
        div1.className = 'card__photographer';

        const header = document.createElement( 'header' );
        header.className = 'card__header';

        const a = document.createElement( 'a' );
        a.className = 'card__link';
        a.setAttribute("aria-label", name);
        a.setAttribute("href", "#");

        const img = document.createElement( 'img' );
        img.className = 'card__img';
        img.setAttribute("src", picture);
        img.setAttribute("alt", " ");

        const h2 = document.createElement( 'h2' );
        h2.className = 'card__title';
        h2.textContent = name;

        const body = document.createElement( 'section' );
        body.className = 'card__body';

        const h3 = document.createElement( 'h3' );
        h3.className = 'card__location';
        h3.textContent = city +  ", " + country;

        const p1 = document.createElement( 'p' );
        p1.className = 'card__tagline';
        p1.textContent = tagline;

        const p2 = document.createElement( 'p' );
        p2.className = 'card__price';
        p2.textContent = price + "€ par jour";



        a.appendChild(img);
        a.appendChild(h2);
        header.appendChild(a);

        body.appendChild(h3);
        body.appendChild(p1);
        body.appendChild(p2);

        div1.appendChild(header);
        div1.appendChild(body);

        article.appendChild(div1);

        return (article);
    }
    return { name,  id, city, country, tagline, price, picture, getUserCardDOM }
}