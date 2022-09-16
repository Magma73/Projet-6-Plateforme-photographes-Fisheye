    async function getPhotographers() {
        const reponse = await fetch("./data/photographers.json");
        // console.log(reponse);
        const dataPhotographers = await reponse.json();
        const photographers = dataPhotographers.photographers;
        // console.log(photographers);

        // et bien retourner le tableau photographers seulement une fois
        return {
            photographers: [...photographers],
          };
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };

    init();
