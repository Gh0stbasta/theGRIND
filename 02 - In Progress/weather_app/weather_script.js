const input = document.getElementById("input-city");
const button = document.getElementById("button-get-data");
const buttonNew = document.getElementById("button-new");
const output = document.getElementById("output");

const fetchWeatherData = () => {
    let city = input.value;
    input.value = "";
    output.innerHTML = "";
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=7be6c0777a3f4243bd4133728251601&q=${city} deutschland&lang=de`)
      .then(response => response.json())
      .then(data => {
          const containerOne = document.createElement("div");
          containerOne.textContent = `${data.location.name}: ${data.current.temp_c} °C`;
          const containerTwo = document.createElement("div");
          containerTwo.textContent = `${data.current.condition.text}`;
          const thumbnail = document.createElement("img");
          thumbnail.src = data.current.condition.icon;
          output.appendChild(containerOne);
          output.appendChild(containerTwo);
          output.appendChild(thumbnail);
          console.log(data);
      })
      .catch(error => {
        const container = document.createElement("p");
        container.textContent = "Error beim fetchen der Daten!";
        output.appendChild(container);
      });
}

const clearData = () => {
    location.reload();
}

button.onclick = fetchWeatherData;
buttonNew.onclick = clearData;
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        fetchWeatherData();
    }
});