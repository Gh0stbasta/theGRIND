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



app.get("/countrys", (req, res) => {
    try {
        const randomIndex = Math.floor(Math.random() * countryData.length);
        res.send(countryData[randomIndex]);
    } catch (error) {
        res.status(500).send({ error: "An error occurred while fetching country data." });
    }
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
