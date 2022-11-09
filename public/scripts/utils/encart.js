let click = 1;

function addClick(currentCard) {
  const oldLike = parseFloat(currentCard.textContent);
  const newLike = oldLike + click;
  currentCard.textContent = newLike;
}

function total() {
  let somme = 0;
  const likesInitial = document.querySelectorAll(".card__media-likes");
  const totalLikes = document.querySelector(".encart__likes--total");
  likesInitial.forEach(function (likeInit) {
    const numberInit = parseFloat(likeInit.textContent);
    somme = somme + numberInit;
    console.log(somme);
    totalLikes.textContent = somme;
  });
}