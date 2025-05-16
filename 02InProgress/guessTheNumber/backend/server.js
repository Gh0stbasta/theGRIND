const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const server = express();

//db
const db = new sqlite3.Database("./gameDB.sqlite");
db.run("DROP TABLE IF EXISTS leaderboard");
db.run(
    `CREATE TABLE IF NOT EXISTS leaderboard (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                score INTEGER NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`
);

//middleware
server.use(express.json());
server.use(express.static("./frontend"));

//routes
server.get("/", (req, res) => {
    res.redirect("/index.html");
});

//game number from server
let gameNumber = Math.floor(Math.random() * 1001);
console.log(gameNumber);
server.get("/gamenumber", (req, res) => {
    res.json({ gameNumber });
});

server.get("/leaderboard", (req, res) => {
    db.all(
        "SELECT * FROM leaderboard ORDER BY score ASC, created_at ASC",
        [],
        (err, rows) => {
            res.json(rows);
        }
    );
});

server.post("/leaderboard", (req, res) => {
    const { name, score } = req.body;
    db.run(
        "INSERT INTO leaderboard (name, score) VALUES (?, ?)",
        [name, score],
        function () {
            res.status(201).json({ message: "Inserted successfully" });
        }
    );
});

//run server
server.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});
