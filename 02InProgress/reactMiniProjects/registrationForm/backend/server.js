/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // Restrict access to localhost:5173
  })
); // Use the cors middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the registration form API");
});

app.post("/register", (req, res) => {
  const { name, lastname, email } = req.body;

  if (!name || !lastname || !email) {
    return res
      .status(400)
      .json({ error: "Name, lastname, and email are required" });
  }

  const db = new sqlite3.Database("./user.db", (err) => {
    if (err) {
      console.error("Error opening database", err.message);
    } else {
      console.log("Connected to the user.db database.");
    }
  });

  db.run(
    `CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                lastname TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
        )`,
    (err) => {
      if (err) {
        console.error("Error creating table", err.message);
        return res.status(500).json({ error: "Error creating table" });
      }
    }
  );

  const query = `INSERT INTO user (name, lastname, email) VALUES (?, ?, ?)`;
  db.run(query, [name, lastname, email], function (err) {
    if (err) {
      return res.status(500).json({ error: "Error saving user to database" });
    }
    res.status(201).json({ message: "User registered successfully" });
    console.log(`User created with ID: ${this.lastID}`);
    db.close((err) => {
      if (err) {
        console.error("Error closing database", err.message);
      } else {
        console.log("Database connection closed.");
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
