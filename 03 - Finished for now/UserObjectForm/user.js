//getting every element into JS
const surnameInput = document.getElementById("surname");
const nameInput = document.getElementById("name");
const eMailInput = document.getElementById("e-mail");
const passwordInput = document.getElementById("password");
const passwordReEnterInput = document.getElementById("password-re-enter");
const phoneInput = document.getElementById("phone");
const dateOfBirthInput = document.getElementById("date-of-birth");
const streetInput = document.getElementById("street");
const houseNumberInput = document.getElementById("house-number");
const postcodeInput = document.getElementById("postcode");
const cityInput = document.getElementById("city");

const btnSave = document.getElementById("btn-save");
const btnReset = document.getElementById("btn-reset");
const btnShowUsers = document.getElementById("btn-show-users");

let userList = [];

//creating the Class to save an user as an object

class User {
  constructor(
    surname,
    name,
    eMail,
    password,
    passwordReEnter,
    phone,
    dateOfBirth,
    street,
    houseNumber,
    postcode,
    city
  ) {
    this.surname = surname;
    this.name = name;
    this.eMail = eMail;
    this.password = password;
    this.passwordReEnter = passwordReEnter;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.street = street;
    this.houseNumber = houseNumber;
    this.postcode = postcode;
    this.city = city;
  }
}
function saveUser () {
    let user = new User(
      surname = surnameInput.value,
      name = nameInput.value,
      eMail = eMailInput.value,
      password = passwordInput.value,
      passwordReEnter = passwordReEnterInput.value,
      phone = phoneInput.value,
      dateOfBirth = dateOfBirthInput.value,
      street = streetInput.value,
      houseNumber = houseNumberInput.value,
      postcode = postcodeInput.value,
      city = cityInput.value
    );
    userList.push(user)
    console.log(userList);
    resetForm();
    alert("User saved successfully");
    localStorage.setItem('userList', JSON.stringify(userList));
}

function resetForm() {
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach((input) => input.value = "");
    localStorage.clear();
}

function showUsers () {
    let savedUsers = JSON.parse(localStorage.getItem('userList'));
    console.log(savedUsers);
    const bodyElement = document.querySelector("body");
    bodyElement.innerHTML = "";

    if (savedUsers) {
        savedUsers.forEach((user) => {
            for (let key in user) {
                const rowElement = document.createElement("div");
                const labelElement = document.createElement("label");
                const pElement = document.createElement("p");
                rowElement.classList.add("data-row");
                labelElement.innerHTML = `${key}: `;
                pElement.innerHTML = user[key];
                rowElement.appendChild(labelElement);
                rowElement.appendChild(pElement);
                bodyElement.appendChild(rowElement);
            }
        })
    }
    
    const btnBack = document.createElement("button");
    btnBack.innerHTML = "Zurück";
    btnBack.addEventListener("click", () => window.location.reload());
    bodyElement.appendChild(btnBack);

}

btnSave.addEventListener("click", saveUser);
btnReset.addEventListener("click", resetForm);
btnShowUsers.addEventListener("click", showUsers);