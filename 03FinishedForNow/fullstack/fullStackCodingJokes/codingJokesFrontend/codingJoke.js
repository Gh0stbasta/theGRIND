const jokeContainer = document.getElementById("joke-container");
const jokeBtn = document.getElementById("btn-joke");

const getJoke = () => {
  console.log("Hello world");
  fetch("http://127.0.0.1:8000/codingjokes/")
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.innerHTML = "";
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomGif = Math.floor(Math.random() * 6);

      const gifContainer = document.createElement("img");
      gifContainer.setAttribute("src", `./assets/laughing/${randomGif}.gif`);
      gifContainer.setAttribute("class", "gif");

      const joke = document.createElement("p");
      joke.setAttribute("class", "joke");
      joke.innerHTML = data[randomIndex].joke;

      const punchline = document.createElement("p");
      punchline.setAttribute("class", "punchline");
      punchline.innerHTML = data[randomIndex].punchline;

      jokeContainer.appendChild(joke);
      setTimeout(() => {
        jokeContainer.innerHTML = "";
        jokeContainer.appendChild(punchline);
      }, 4000);
      setTimeout(() => {
        jokeContainer.appendChild(gifContainer);
      }, 6000);
      setTimeout(() => {
        location.reload();
      }, 11000);
    });
};

jokeBtn.addEventListener("click", () => getJoke());
