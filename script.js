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
  document.querySelector("#dialog-religion").textContent = character.religion;
  document.querySelector("#dialog-hair-color").textContent = character.hairColor;
  document.querySelector("#dialog-nickname").textContent = character.nickname;
  document.querySelector("#dialog-occupation").textContent = character.occupation;
  document.querySelector("#dialog-catch-phrase").textContent = character.catchPhrase;
  document.querySelector("#dialog-episodes").textContent = character.episodes;
  document.querySelector("#dialog-appearences").textContent = character.appearences;
  document.querySelector("#dialog-first-appearence").textContent = character.firstAppearence;

  document.querySelector("#dialog-voiced-by").textContent = character.voicedBy;

  document.querySelector("#dialog-character").showModal();
}

function generateDescription(character) {}

// <p class = "name">School grade: <span>${character.schoolGrade}</span></p> put in desc
