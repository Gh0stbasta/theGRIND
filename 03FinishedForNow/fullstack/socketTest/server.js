const express = require("express");
const http = require("http");
const { Server } = require("socket.io"); // socket io is der websocket

const app = express();  // express kümmert sich um die anfragen die an den http server gesendet werden
const server = http.createServer(app); // hier ist der http server und gibt alle anfragen an express weiter
const io = new Server(server); // hier ist der websocket server, der alle anfragen an den http server auf websocket ebene nimmt

app.use(express.static("public"));

const games = {}; // hier werden die spiele erstellt
let roomCounter = 1; // counter als id für die spiele

io.on("connection", (socket) => { // wenn jemand ne connection anfragt, dann kriegt er ne socket.id
  console.log("🔌 A user connected", socket.id);

  socket.on("createGame", () => { // wenn jemand ein spiel spielen will, wird ein raum erstellt
    const roomId = "room" + roomCounter;
    socket.join(roomId); // packt den spieler in den raum mit der nummer
    if (!games[roomId]) games[roomId] = [];
    games[roomId].push(socket.id); // steck den spieler in den spielraum

    if (games[roomId].length === 2) { // wenn der spielraum 2 spieler hat, dann starte das spiel
      io.to(roomId).emit("gameCreated", roomId);
      roomCounter++;
      console.log("Games: ", games);
      console.log("Room: ", roomCounter);
    }
  });

  socket.on("joinGame", (roomId) => { // das ist notwendig wegen dem redirect auf ne neue seite
    if (!games[roomId]) games[roomId] = [];
    socket.join(roomId);
    games[roomId].push(socket.id);

    if (games[roomId].length === 2) {
      io.to(roomId).emit("startGame", roomId);
    }
    console.log(games);
  });

  socket.on("disconnect", () => {
    for (const roomId in games) {
      games[roomId] = games[roomId].filter((id) => id !== socket.id);
      if (games[roomId].length === 0) {
        delete games[roomId];
      }
      console.log(games);
    }
  });
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
