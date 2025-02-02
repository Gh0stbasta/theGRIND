const button = document.getElementById("submit");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const sendToDatabase = () => {
  let name = nameInput.value;
  let age = ageInput.value;
  let user = new User(name, age);

  fetch("./api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Did it: ", data);
      nameInput.value = "";
      ageInput.value = "";
    })
    .catch((err) => {
      console.log("Didnt work out: ", err);
    });
};

button.addEventListener("click", sendToDatabase);
