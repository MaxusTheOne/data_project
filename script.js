"use strict";
// constants
const characterList = document.querySelector("#characters");

// load
window.addEventListener("load", initApp);

// intialise app
async function initApp() {
  let mrMackey = await getCharacter("data/mrMackey.json");
  addCharacter(mrMackey);
  addCharacter(harry);
}
function addCharacter(character) {
  let characterHTML = /*HTML*/ `
        <article class = "grid-item">
            <img src = "${character.image}">
            <h2 class = "name">Name: <span>${character.name}</span></h2>
            <p class = "age">Age: <span>${character.age}</span></p>
            </article>
            `;
  characterList.insertAdjacentHTML("beforeend", characterHTML);
}

// get character data
async function getCharacter(link) {
  const response = await fetch(link);
  const data = await response.json();
  console.log(data);
  return data;
}

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
