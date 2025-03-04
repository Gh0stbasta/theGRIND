const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");


function extractData($) {
    const data = [];
    $("h2").each((index, element) => {
        data.push($(element).text());
    });
    return { h2: data };
}

function saveData(data) {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
}

async function scrapeMultiplePages(urls) {
  for (const url of urls) {
    await scrapeWebsite(url);
  }
}

async function scrapeWebsite(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const extractedData = extractData($);
    saveData(extractedData);
    console.log(extractedData);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
module.exports = { scrapeMultiplePages };
