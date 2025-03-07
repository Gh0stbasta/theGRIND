const scraper = require("./scraper"); // wir haben uns ein eigenes Modul gebaut, dass wir hier importieren

const urls = ["https://www.amazon.com/"]; // Das ist die Seite, die wiir scrapen wollen

scraper.scrapeMultiplePages(urls); // und hier rufen wir die Funktion aus unserem Modul auf :)
