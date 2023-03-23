"use strict";
let characterList = document.querySelector("#character_list");

let mrMackey = {
  name: "Mr. Mackey",
  nickname: "Fireman Tom",
  image: (URL = "https://static.wikia.nocookie.net/southpark/images/5/58/Mr_Mackey_New.png/revision/latest?cb=20211125042917"),
  occupation: "School Counselor",
  age: 50,
  voicedBy: "Trey Parker",
  gender: "Male",
  religion: "Roman Catholic",
  catchPhrase: "m'kay",
  hairColor: "black",
  schoolGrade: null,
  episodes: [],
  appearences: 0, //idk
  firstAppearence: "S01E09",
};
addCharacter(mrMackey);
function addCharacter(character) {
  let characterHTML = /*HTML*/ `
        <li>
            <img src="images/profile.jpg" alt="">
            <p class = "name">Name: <span>${character.name}</span></p>
            <p class = "name">Nickname: <span>${character.nickname}</span></p>
            <p class = "name">Image: <span>${character.image}</span></p>
            <p class = "name">Occupation: <span>${character.occupation}</span></p>
            <p class = "name">Age: <span>${character.age}</span></p>
            <p class = "name">Voiced by: <span>${character.voicedBy}</span></p>
            <p class = "name">Gender: <span>${character.gender}</span></p>
            <p class = "name">Religion: <span>${character.religion}</span></p>
            <p class = "name">Catch phrase: <span>${character.catchPhrase}</span></p>
            <p class = "name">Hair color: <span>${character.hairColor}</span></p>
            <p class = "name">School grade: <span>${character.schoolGrade}</span></p>
            <p class = "name">Episodes: <span>${character.episodes}</span></p>
            <p class = "name">Appearences: <span>${character.appearences}</span></p>
            <p class = "name">First appearence: <span>${character.firstAppearence}</span></p>

        </li>
    `;
  characterList.insertAdjacentHTML("beforeend", characterHTML);
}
