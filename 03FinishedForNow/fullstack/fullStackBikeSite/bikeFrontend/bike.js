const btnGetBike = document.getElementById("get-bike");
const content = document.getElementById("content");

const getBike = () => {
  fetch("http://127.0.0.1:8000/bikes/")
    .then((response) => response.json())
    .then((data) => {
      content.innerHTML = "";

      const randomIndex = Math.floor(Math.random() * data.length);
      const bikeCard = document.createElement("div");
      bikeCard.setAttribute("class", "bike-card");

      const imgContainer = document.createElement("img");
      imgContainer.setAttribute("class", "img-bike");
      imgContainer.setAttribute("src", data[randomIndex].img);

      const bikeDataContainer = document.createElement("div");
      bikeDataContainer.setAttribute("class", "bike-data-container");

      const h2Modelname = document.createElement("h2");
      h2Modelname.setAttribute("class", "bike-modelname");
      h2Modelname.innerHTML = data[randomIndex].modelname;

      const firstData = document.createElement("p");
      firstData.setAttribute("class", "bike-data");
      firstData.innerHTML = "Brand: " + data[randomIndex].brand;

      const secondData = document.createElement("p");
      secondData.setAttribute("class", "bike-data");
      secondData.innerHTML = "Weight: " + data[randomIndex].weight + " kg";

      const thirdData = document.createElement("p");
      thirdData.setAttribute("class", "bike-data");
      thirdData.innerHTML = "Cost: " + data[randomIndex].cost + " $";

      bikeDataContainer.appendChild(h2Modelname);
      bikeDataContainer.appendChild(firstData);
      bikeDataContainer.appendChild(secondData);
      bikeDataContainer.appendChild(thirdData);

      bikeCard.appendChild(imgContainer);
      bikeCard.appendChild(bikeDataContainer);

      content.appendChild(bikeCard);
    });
};

btnGetBike.addEventListener("click", () => getBike());
