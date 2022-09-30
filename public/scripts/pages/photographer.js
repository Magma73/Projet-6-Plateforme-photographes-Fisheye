//Mettre le code JavaScript lié à la page photographer.html

const params = (new URL(document.location)).searchParams;
console.log(document.location);
console.log(params);
const id = params.get('id'); // la chaine de caractère "Jonathan Smith".
console.log(id);