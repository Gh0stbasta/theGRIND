const axios = require("axios");  // axios brauchen wir um die Seite überhaupt laden zu können
const cheerio = require("cheerio");  // cheerio brauchen wir, um die Seite verabeiten zu können
const fs = require("fs"); // fs ist das filesystem modul, damit schreiben wir lokal dateien


function extractData($) {  // hier holen wir mit cheerio daten aus der geladenen webpage
    const data = []; // hier sollen die Daten rein
    $("h2").each((index, element) => {  // hier wählen wir jedes h2 Tag im Cheerio Objekt aus und führen dann eine Funktion darauf aus
        data.push($(element).text()); // den text hängen wir in unsere datenliste an
    });
    return { h2: data }; // da die Funktion von irgendwo aufgerufen wurde, geben wir hier ein Objekt zurück
}

function saveData(data) {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2)); // hier speichern wir die daten in ein file auf dem Rechner
}

async function scrapeMultiplePages(urls) { // asynchrone function zum scrapen mutlipler websites, die nacheinander abgefragt werden
  for (const url of urls) { // für jede URL die in der Liste übergeben wurde
    await scrapeWebsite(url); // jedes mal mit await abwarten, bis er fertig ist
  }
}

async function scrapeWebsite(url) {
  try {
    const { data } = await axios.get(url);  // daten mit axios aus der URL laden
    const $ = cheerio.load(data); // das ganze in ein cheerio Objekt ($ - Konvention) reinpacken auf dem wir dann Methoden anwenden können
    const extractedData = extractData($); // unser Cheerio Objekt geht an die Definition zum daten extrahieren
    saveData(extractedData); // das ganze mit unserer anderen funktion abspeichern
    console.log(extractedData); // und nochmal in die Konsole schmeißen, damit wir auch was sehen
  } catch (error) {
    console.error(`Error: ${error}`); // wenns ned geht, gehts halt einfach ned
  }
}
module.exports = { scrapeMultiplePages }; // und damit wir das in der index.js verwenden können, exportieren wir das halt als Modul
