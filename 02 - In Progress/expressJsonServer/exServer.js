import express from "express";
import {
  countryData,
  islandData,
  cityData,
  riverData,
  mountainData,
  lakeData,
  desertData,
  oceanData,
  volcanoData,
  forestData,
  waterfallData,
} from "./jsonData.js";

const app = express();
const port = 3000;
app.use(express.json());

app.delete("/countrys/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = countryData.findIndex((country) => country.id === id);
  try {
    const delCountry = countryData.splice(index, 1);
    res.send({ message: "country deleted", delCountry });
  } catch (error) {
    res.status(404).send({ error: "country not found " });
  }
});

app.delete("/islands/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = islandData.findIndex((island) => island.id === id);
  try {
    const delIsland = islandData.splice(index, 1);
    res.send({ message: "island deleted", delIsland });
  } catch (error) {
    res.status(404).send({ error: "island not found" });
  }
});

app.delete("/citys/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = cityData.findIndex((city) => city.id === id);
  try {
    const delCity = cityData.splice(index, 1);
    res.send({ message: "city deleted", delCity });
  } catch (error) {
    res.status(404).send({ error: "city not found" });
  }
});

app.delete("/rivers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = riverData.findIndex((river) => river.id === id);
  try {
    const delRiver = riverData.splice(index, 1);
    res.send({ message: "river deleted", delRiver });
  } catch (error) {
    res.status(404).send({ error: "river not found" });
  }
});

app.delete("/mountains/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = mountainData.findIndex((mountain) => mountain.id === id);
  try {
    const delMountain = mountainData.splice(index, 1);
    res.send({ message: "Mountain deleted", delMountain });
  } catch (error) {
    res.status(404).send({ error: "Did not find mountain" });
  }
});

app.delete("/lakes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = lakeData.findIndex((lake) => lake.id === id);
  try {
    const delLake = lakeData.splice(index, 1);
    res.send({ message: "Lake deleted", delLake });
  } catch (error) {
    res.status(404).send({ error: "lake not found" });
  }
});

app.delete("/deserts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = desertData.findIndex((desert) => desert.id === id);
  try {
    const delDesert = desertData.splice(index, 1);
    res.send({ message: "Desert deleted", delDesert });
  } catch (error) {
    res.status(404).send({ error: "Desert not found" });
  }
});

app.delete("/oceans/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = oceanData.findIndex((ocean) => ocean.id === id);
  try {
    const delOcean = oceanData.splice(index, 1);
    res.send({ message: "Ocean deleted", delOcean });
  } catch (error) {
    res.status(404).send({ error: "Ocean not found" });
  }
});

app.delete("/volcanos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = volcanoData.findIndex((forest) => forest.id === id);
  try {
    const delVolcano = volcanoData.splice(index, 1);
    res.send({ message: "Volcano deleted", delVolcano });
  } catch (error) {
    res.status(404).send({ error: "Volcano not found" });
  }
});

app.delete("/forests/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = forestData.findIndex((forest) => forest.id === id);
  try {
    const delForest = forestData.splice(index, 1);
    res.send({ message: "forest deleted", delForest });
  } catch (error) {
    res.status(404).send({ error: "Forest not found" });
  }
});

app.delete("/waterfalls/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = waterfallData.findIndex((waterfall) => waterfall.id === id);
  try {
    const deletedWaterfall = waterfallData.splice(index, 1);
    res.send({ message: "Waterfall deleted successfully", deletedWaterfall });
  } catch (error) {
    res.status(404).send({ error: "Waterfall not found" });
  }
});

app.get("/waterfalls", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * waterfallData.length);
    res.send(waterfallData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Error fetching waterfallData" });
  }
});

app.get("/forests", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * forestData.length);
    res.send(forestData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Error fetching forestData" });
  }
});

app.get("/volcanos", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * volcanoData.length);
    res.send(volcanoData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Error fetching volcanoData" });
  }
});

app.get("/oceans", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * oceanData.length);
    res.send(oceanData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Error fetching oceanData" });
  }
});

app.get("/deserts", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * desertData.length);
    res.send(desertData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Error fetching desertData" });
  }
});

app.get("/lakes", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * lakeData.length);
    res.send(lakeData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Error fetching lakeData" });
  }
});

app.get("/mountains", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * mountainData.length);
    res.send(mountainData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Error fetching mountainData" });
  }
});

app.get("/rivers", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * riverData.length);
    res.send(riverData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Fetching riverData failed" });
  }
});

app.get("/citys", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * cityData.length);
    res.send(cityData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Fetching cityData failed" });
  }
});

app.get("/islands", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * islandData.length);
    res.send(islandData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Fetching failed on islandData" });
  }
});

app.get("/countrys", (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * countryData.length);
    res.send(countryData[randomIndex]);
  } catch (error) {
    res.status(500).send({ error: "Error fetching Data" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
