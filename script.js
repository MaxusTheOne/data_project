"use strict";
// constants
const characterList = document.querySelector("#characters");

// load
window.addEventListener("load", initApp);

// intialise app
async function initApp() {
  let gottenList = await getCharacter("https://cederdorff.github.io/dat-js/05-data/southpark.json");
  gottenList.forEach(addCharacter);
}
// get character data
async function getCharacter(link) {
  const response = await fetch(link);
  const data = await response.json();
  console.log(data);
  return data;
}
// adds character to html elements
function addCharacter(character) {
  let characterHTML = /*HTML*/ `
        <article class = "grid-item">
        <h2 class = "name"><span>${character.name}</span></h2>
            <img src = "${character.image}">
            <p class = "age">Age: <span>${character.age}</span></p>
            </article>
            `;
  characterList.insertAdjacentHTML("beforeend", characterHTML);
  characterList.querySelector("article:last-child").addEventListener("click", characterClicked);
  function characterClicked() {
    showCharacterCard(character);
  }
}
// context to be show on character card
function showCharacterCard(character) {
  console.log(character);
  document.querySelector("#dialog-title").textContent = "From: " + character.name;
  document.querySelector("#dialog-image").src = character.image;

  // description
  let description = generateDescription();

  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-age").textContent = character.age;
  document.querySelector("#dialog-hair-color").textContent = character.hairColor;

  document.querySelector("#dialog-voiced-by").textContent = character.voicedBy;

  document.querySelector("#dialog-character").showModal();
}

function generateDescription(character) {}
// <p class = "name">Nickname: <span>${character.nickname}</span></p>
// <p class = "name">Occupation: <span>${character.occupation}</span></p>
// <p class = "name">Voiced by: <span>${character.voicedBy}</span></p>
// <p class = "name">Gender: <span>${character.gender}</span></p>
// <p class = "name">Religion: <span>${character.religion}</span></p>
// <p class = "name">Catch phrase: <span>${character.catchPhrase}</span></p>
// <p class = "name">Hair color: <span>${character.hairColor}</span></p>
// <p class = "name">School grade: <span>${character.schoolGrade}</span></p>
// <p class = "name">Episodes: <span>${character.episodes}</span></p>
// <p class = "name">Appearences: <span>${character.appearences}</span></p>
// <p class = "name">First appearence: <span>${character.firstAppearence}</span></p>
