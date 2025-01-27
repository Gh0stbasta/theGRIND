const btnReset = document.getElementById("reset-btn");
btnReset.addEventListener("click", () => {
  document.getElementById("user-form").reset();
  document.getElementById("message").textContent = "";
  document.getElementById("user-data").textContent = "";
});

const loadUserData = () => {
  fetch("/users")
    .then((response) => response.json())
    .then((data) => {
      const userDataDiv = document.getElementById("user-data");
      userDataDiv.innerHTML = data
        .map((user) => `<p>${user.name} - ${user.email}</p>`)
        .join("");
    });
};

const btnShowUsers = document.getElementById("show-users");
btnShowUsers.addEventListener("click", loadUserData);

window.onload = loadUserData;
