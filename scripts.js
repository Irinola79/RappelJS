// Votre console affichera beaucoup d'erreurs c'est tout à fait normal si vous suivez l'ordre synchrone des exercices à la fin vous ne devriez plus avoir d'erreur.

// Exercice 1
// Insérez votre code ici
const firstname = "IRINA"; 
const lastname = "Chikobava";

// Ne touchez pas à ceci
document.querySelector("h1").textContent = `Bonjour ${firstname} ${lastname}`;

// Exercice 2
// Insérez votre code ici
let age = 44;

// Ne touchez pas à ceci
document.querySelector(
  "p"
).textContent = `Tu t'appelles donc ${firstname} et tu as ${age} ans 😊 si mes calculs sont justes tu es né en ${
  2023 - age
}`;
// Exercice 3
// Insérez votre code ici
let year = 2023;
let birthYear = 1979;

// Exercice 4
// Insérez votre code ici
let user = [firstname, lastname, age, year, birthYear];
// Ne touchez pas à ceci
user.forEach((infoUser) => {
  switch (infoUser) {
    case firstname:
      document.getElementById("firstname").textContent = `Salut ${firstname} !`;
      break;
    case lastname:
      document.getElementById(
        "lastname"
      ).textContent = `Bonjour Monsieur/Madame ${lastname} !`;
      break;
    case age:
      document.getElementById(
        "age"
      ).textContent = `Quel âge as-tu ? ${age} ans`;
      break;
    case year:
      document.getElementById(
        "year"
      ).textContent = `On est toujours en ${year}`;
      break;
    case birthYear:
      document.getElementById(
        "birthYear"
      ).textContent = `Tu es donc né en ${birthYear}`;
      break;
    default:
      console.log("Oups il y a une erreur");
      break;
  }
});
// Exercice 5
// Insérez votre code ici
let backgroundColor = "coral";
// Ne touchez pas à ceci
document.body.style.backgroundColor = backgroundColor;
// Insérez votre réassignation de backgroundColor ici

document.body.style.backgroundColor = backgroundColor;

// Exercice 6
// Insérez votre code ici
let car = {
    brand: "BMW",
    model: "M6",
    yearConstruct: 2021,
    color: "Black",
    image: "https://ymimg1.b8cdn.com/resized/car_model/6590/logo/mobile_listing_main_11145_st1280_046.jpg"
};
// Ne touchez pas à ceci
document.getElementById(
  "firstItem"
).textContent = `La marque de ta voiture : ${car.brand}`;
document.getElementById(
  "secondItem"
).textContent = `Le modèle de ta voiture : ${car.model}`;
document.getElementById(
  "thirdItem"
).textContent = `Ta voiture a été contruite en : ${car.yearConstruct}`;
document.getElementById(
  "fourthItem"
).textContent = `Ta voiture est de couleur : ${car.color}`;
document.getElementById("car").src = car.image;

// Exercice 7
// Insérez votre code ici
const buttons = document.querySelectorAll("button");
const cat = document.getElementById ("cat");


// Ne touche pas à ceci
const catURL = [
  "https://s1.1zoom.me/big0/812/Cats_Glance_Kittens_558640_1280x720.jpg",
  "https://img3.wallspic.com/crops/4/8/6/4/94684/94684-chat_siberien-chat_siamois-chaton-chat_persan-chat-1280x720.jpg",
  "https://chatfaitdubien.fr/wp-content/uploads/2016/09/chaton.jpg",
];
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "Photo 1":
        cat.src = catURL[0];
        break;
      case "Photo 2":
        cat.src = catURL[1];
        break;
      case "Photo 3":
        cat.src = catURL[2];
        break;
      default:
        console.log("Erreur");
        break;
    }
  });
});

// Exercice 8
// Insérez votre code ici

//  Variable element is not a good name because all elements HTML are element...
const output = document.getElementById("output");

output.innerHTML = "<p>Contenu de votre choix</p><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' alt='Js logo'/>";



// Exercice 9
// Insérez votre code ici
let carBrands = [
    "Mercedes",
    "Honda",
    "Mazda",
];

const listOutput = document.getElementById("listOutput");

carBrands.forEach(carBrand => {
  listOutput.innerHTML += `<li>${carBrand}</li>`
});

// Exercice 10
// Ne touchez pas au tableau
const icons = [
  "cat-solid",
  "dog-solid",
  "dragon-solid",
  "fish-solid",
  "hippo-solid",
  "horse-solid",
  "otter-solid",
  "paw-solid",
  "shrimp-solid",
];

// Insérez votre code ici
const logo = document.getElementById("logo");
console.log(logo);
const myArrayLength = icons.length - 1 ;
console.log(myArrayLength);

let random = Math.floor(Math.random() * myArrayLength);
console.log(random);


// Exercice 11 : Optionnel
// Insérez votre code ici