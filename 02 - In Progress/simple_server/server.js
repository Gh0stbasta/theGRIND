// Als erstes muss das http Modul für einen http Server importiert werden. Das würde auch über die ältere Version require gehen
import http from "http";
import fs from "fs";
import path from "path";

// Dann müssen wir einen Server erstellen in einer Variablen

const server = http.createServer((req, res) => {
  // da das eine asynchrone aktion ist, müssen wir die datei erstmal einlesen
  fs.readFile(
    // In der Pfadangabe die Forward Slashes, weil die anderen wie in Pyhton Escapes sind
    "D:/Coding/The GRIND/02 - In Progress/simple_server/forward.html",
    "utf8",
    // in der Readfile Funktion muss immer eine Callback Funktion angegeben werden, weils ja async ist
    (err, data) => {
      if (err) {
        // damit setzen wir den Statuscode, den der Server zurückgibt - 500 heißt big fail
        res.statusCode = 500;
        // damit setzen wir die Headerinfo was der User kriegt
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        // Das ist der Content den wir an die Response hängen
        res.end("Internal Server Error");
        console.error(err);
        return;
      }
      // Statuscode 200 heißt Bingpot
      res.statusCode = 200;
      // wieder der Header mit ein paar Infos. Hier legen wir auch das Zeichenset utf-8 fest, das umlaute beinhaltet
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      // und hier schlussendlich - in data - senden wir das file, das wir ausgelesen haben.
      res.end(data);
    }
  );
});

// dann müssen wir einen Port festlegen, auf dem der Server "hört"
const port = 3000;
server.listen(port, () => {
  console.log("Server running on Port 3000");
});
