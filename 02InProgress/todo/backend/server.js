const express = require("express");
const sqlite3 = require("sqlite3").verbose();

// Database

const db = new sqlite3.Database("dbTodo.sqlite", (err) => {
  if (err) {
    console.error("Could not connect to database", err);
  } else {
    console.log("Connected to SQLite database dbTodo.sqlite");
    db.run(`
            CREATE TABLE IF NOT EXISTS todos (
                id TEXT NOT NULL,
                text TEXT NOT NULL,
                done TEXT NOT NULL
            )
        `);
  }
});

// Server

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static("./frontend"));

// Basic route
app.get("/", (req, res) => {
  res.send("Express server is running!");
});

app.get("/api/todos", (req, res) => {
  db.all("SELECT * FROM todos", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.post("/api/todos", (req, res) => {
  // insert new data
  const { id, text, done } = req.body;
  console.log(text);

  const sql = "INSERT INTO todos (id, text, done) VALUES (?, ?, ?)";

  // Ensure 'done' is stored as a string ("true" or "false")
  db.run(sql, [id, text, String(done)], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id, text, done });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
