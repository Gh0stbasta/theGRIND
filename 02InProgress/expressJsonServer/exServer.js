import express from "express";
import {
  countryData,
  cityData,
  riverData,
  mountainData,
  lakeData,
  desertData,
  oceanData,
  islandData,
  volcanoData,
  forestData,
  waterfallData,
} from "./jsonData.js";

const app = express();
const port = 3000;
app.use(express.json());

class Country {
  constructor(id, country, capital, population) {
    this.id = parseInt(id);
    this.country = country;
    this.capital = capital;
    this.population = population;
  }
}

class City {
  constructor(id, city, country, population) {
    this.id = parseInt(id);
    this.city = city;
    this.country = country;
    this.population = population;
  }
}

class River {
  constructor(id, river, length, continent) {
    this.id = parseInt(id);
    this.river = river;
    this.length = length;
    this.continent = continent;
  }
}

class Mountain {
  constructor(id, mountain, height, range) {
    this.id = parseInt(id);
    this.mountain = mountain;
    this.height = height;
    this.range = range;
  }
}

class Lake {
  constructor(id, lake, area, continent) {
    this.id = parseInt(id);
    this.lake = lake;
    this.area = area;
    this.continent = continent;
  }
}

class Desert {
  constructor(id, desert, area, continent) {
    this.id = parseInt(id);
    this.desert = desert;
    this.area = area;
    this.continent = continent;
  }
}

class Ocean {
  constructor(id, ocean, area, depth) {
    this.id = parseInt(id);
    this.ocean = ocean;
    this.area = area;
    this.depth = depth;
  }
}

class Island {
  constructor(id, island, area, country) {
    this.id = parseInt(id);
    this.island = island;
    this.area = area;
    this.country = country;
  }
}

class Volcano {
  constructor(id, volcano, height, location) {
    this.id = parseInt(id);
    this.volcano = volcano;
    this.height = height;
    this.location = location;
  }
}

class Forest {
  constructor(id, forest, area, location) {
    this.id = parseInt(id);
    this.forest = forest;
    this.area = area;
    this.location = location;
  }
}

class Waterfall {
  constructor(id, waterfall, height, location) {
    this.id = parseInt(id);
    this.waterfall = waterfall;
    this.height = height;
    this.location = location;
  }
}

app.put("/waterfalls", (req, res) => {
  try {
    const { id, waterfall, height, location } = req.query;
    const entry = new Waterfall(id, waterfall, height, location);
    waterfallData.push(entry);
    res.status(201).send({ message: "Added waterfall", entry });
  } catch (error) {
    res.status(500).send({ error: "Couldnt add waterfall" });
  }
});

app.put("/forests", (req, res) => {
  try {
    const { id, forest, area, location } = req.query;
    const entry = new Forest(id, forest, area, location);
    forestData.push(entry);
    res.status(201).send({ message: "Added Forest to the woods :)", entry });
  } catch (error) {
    res.status(500).send({ error: "Couldnt add forest" });
  }
});

app.put("/volcanos", (req, res) => {
  try {
    const { id, volcano, height, location } = req.query;
    const entry = new Volcano(id, volcano, height, location);
    volcanoData.push(entry);
    res.status(201).send({ message: "Volcano added", entry });
  } catch (error) {
    res.status(500).send({ error: "Couldnt add Volcano to the list" });
  }
});

app.put("/islands", (req, res) => {
  try {
    const { id, island, area, country } = req.query;
    const entry = new Island(id, island, area, country);
    islandData.push(entry);
    res.status(201).send({ message: "Island added", entry });
  } catch (error) {
    res.status(500).send({ error: "couldnt add island" });
  }
});

app.put("/oceans", (req, res) => {
  try {
    const { id, ocean, area, depth } = req.query;
    const entry = new Ocean(id, ocean, area, depth);
    oceanData.push(entry);
    res.status(201).send({ message: "Ocean added", entry });
  } catch (error) {
    res.status(500).send({ error: "Couldn't add Ocean to the sea" });
  }
});

app.put("/deserts", (req, res) => {
  try {
    const { id, desert, area, continent } = req.query;
    const entry = new Desert(id, desert, area, continent);
    desertData.push(entry);
    res.status(201).send({ message: "Desert added ... yummi", entry });
  } catch (error) {
    res.status(500).send({ error: "Couldn't add Desert" });
  }
});

app.put("/lakes", (req, res) => {
  try {
    const { id, lake, area, continent } = req.query;
    const entry = new Lake(id, lake, area, continent);
    lakeData.push(entry);
    res.status(201).send({ message: "Lake added", entry });
  } catch (error) {
    res.status(500).send({ error: "Couldn't add lake" });
  }
});

app.put("/mountains", (req, res) => {
  try {
    const { id, mountain, height, range } = req.query;
    const entry = new Mountain(id, mountain, height, range);
    mountainData.push(entry);
    res.status(201).send({ message: "mountain added", entry });
  } catch (error) {
    res.status(500).send({ error: "Couldn't add mountain" });
  }
});

app.put("/rivers", (req, res) => {
  try {
    const { id, river, length, continent } = req.query;
    const entry = new River(id, river, length, continent);
    riverData.push(entry);
    res.status(201).send({ message: "River added", entry });
  } catch (error) {
    res.status(500).send({ error: "couldnt add River" });
  }
});

app.put("/citys", (req, res) => {
  try {
    const { id, city, country, population } = req.query;
    const entry = new City(id, city, country, population);
    cityData.push(entry);
    res.status(201).send({ message: "City added", entry });
  } catch (error) {
    res.status(500).send({ error: "Couldnt add city" });
  }
});

app.put("/countrys", (req, res) => {
  try {
    const { id, country, capital, population } = req.query;
    const entry = new Country(id, country, capital, population);
    countryData.push(entry);
    res.send({ message: "Country added", entry });
  } catch (error) {
    res.status(500).send({ error: "failed to add Country" });
  }
});

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
