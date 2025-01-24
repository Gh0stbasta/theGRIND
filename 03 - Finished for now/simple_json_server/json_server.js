// Here you can find the necessary functions to run a simple http server
import http from "http";

// we want to server a random json-object as a string to the user,
// hence why we create an array of possibilities
let elements = [
  { name: "Walter", alter: 28, beruf: "Schreiner" },
  { name: "Anna", alter: 22, beruf: "Lehrerin" },
  { name: "Hans", alter: 35, beruf: "Ingenieur" },
  { name: "Lisa", alter: 30, beruf: "Ärztin" },
  { name: "Karl", alter: 40, beruf: "Bäcker" },
  { name: "Petra", alter: 25, beruf: "Köchin" },
  { name: "Tom", alter: 32, beruf: "Mechaniker" },
  { name: "Sophie", alter: 27, beruf: "Architektin" },
  { name: "Max", alter: 29, beruf: "Elektriker" },
  { name: "Julia", alter: 24, beruf: "Designer" },
];

// name your server and create it with createServer
// (req, res) is mandatory otherwise it wont function
// you have to have the callback Function because this shit is async
const jsonServer = http.createServer((req, res) => {
  //   Everythings allright when you see the statuscode 200
  res.statusCode = 200;
  //   you have to tell the user what he/she gets. In this case its just plain text with Umlauten
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  //   this is where the magic happens. res.end is attaching the stuff we want to send
  res.end(
    // you have to stringify it, because you said one line earlier that the user gets a string.
    // math floor is rounding down / math random is creating a random number between 0 and 1
    // multiplied by elements.length you get an index. Note .length gets a number that
    // is 1 higher than the index since it starts counting at 1
    JSON.stringify(elements[Math.floor(Math.random() * elements.length)]) +
      // with a simple concatenation you can still hang more stuff on this shit
      " Hätte hätte Fahrradkette"
  );
});

// start listening :)
jsonServer.listen(3000, () => {
  console.log("Server hört");
});
