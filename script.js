let harry = {
  firstName: "Harry",
  lastName: "Potter",
};
let ron = {
  firstName: "ron",
  lastName: "Weasley",
};
let hermione = {
  firstName: "Hermione",
  lastName: "Granger",
};
const chosenOne = harry;
console.log(harry);
showStudent(harry);
function showStudent(student) {
  document.querySelector("#firstName").textContent = student.firstName;
  document.querySelector("#middleName").textContent = student.middleName;
  document.querySelector("#lastName").textContent = student.lastName;
}
harry.middleName = "James";
ron.middleName = "Bilius";
hermione.middleName = "Jean";
studentList = document.querySelector("#students");
function addStudent(student) {
  let studentHTML = /*HTML*/ `
        <li>
            <img src="images/profile.jpg" alt="">
            <p class = "firstName">First name: <span>${student.firstName}</span></p>
            <p class = "middleName">Middle name: <span>${student.middleName}</span></p>
            <p class = "lastName">Last name: <span>${student.lastName}</span></p>
        </li>
    `;
  studentList.insertAdjacentHTML("beforeend", studentHTML);
}
addStudent(harry);
addStudent(ron);
addStudent(hermione);
