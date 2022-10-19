
/********* FUNCTIONS *********/
/* Function ouverture de la modale */
function displayLightboxModal() {
    // const body = document.querySelector("body");
    // const header = document.querySelector(".header");
    // const main = document.querySelector(".content");
    // const modal = document.querySelector("#contactModal");
    // modal.style.display = "block";
    // header.setAttribute("aria-hidden", "true");
    // main.setAttribute("aria-hidden", "true");
    // modal.setAttribute("aria-hidden", "false");
    // body.classList.add("body--no-scroll");
    // modal.focus();
 }
 /* Function fermeture de la modale */
 function closeLightboxModal() {
    // const body = document.querySelector("body");
    // const header = document.querySelector(".header");
    // const main = document.querySelector(".content");
    // const buttonContact = document.querySelector(".button__contact");
    // const modal = document.querySelector("#contactModal");
    // modal.style.display = "none";
    // header.setAttribute("aria-hidden", "false");
    // main.setAttribute("aria-hidden", "false");
    // modal.setAttribute("aria-hidden", "true");
    // body.classList.remove("body--no-scroll");
    // buttonContact.focus();
 }
/* Function aller à la diapo suivante */

// function goToNextSlide(n){
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
//   let slides = document.getElementsByClassName("mySlides");
  const carouselItems = document.querySelectorAll(".carrousel__item");

  let dots = document.getElementsByClassName("dot");
  const prevBtn = document.querySelector(".carrousel__arrow--prev");
    const nextBtn = document.querySelector(".carrousel__arrow--next");

  if (n > carouselItems.length) {slideIndex = 1}
  if (n < 1) {slideIndex = carouselItems.length}
  for (i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carouselItems[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// function goToNextSlide() {
//     // const prevBtn = document.querySelector(".carrousel__arrow--prev");
//     const nextBtn = document.querySelector(".carrousel__arrow--next");
//     const carouselItems = document.querySelectorAll(".carrousel__item");
//     // console.log(prevBtn);
//     console.log(nextBtn);
//     console.log(carouselItems);

//     let currentItemPosition = 0;
//     let carouselInterval;


//     for (i = 0; i < carouselItems.length; i++) {
//         carouselItems[i].style.display = "none";
//     }




//     if (currentItemPosition + 1 >=  carouselItems.length) {

//         const lastItem = ".item-{currentItemPosition}"

//         currentItemPosition = 0
//         const currentItem = ".item-{currentItemPosition}"

//         setNodeAttributes(lastItem, currentItem)
//     } else {
//         currentItemPosition += 1
//         const lastItem = ".item-{currentItemPosition - 1}"
//         const currentItem = ".item-{currentItemPosition}"

//         setNodeAttributes(lastItem, currentItem)
//     }
// }