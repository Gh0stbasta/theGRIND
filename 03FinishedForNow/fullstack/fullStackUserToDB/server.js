const express = require('express'); 
const sqlite3 = require('sqlite3');

// Heres the Database Stuff
const db = new sqlite3.Database("users.db", (err) => {
  if (err) {
    console.log("Error connecting/creating DB", err);
  } else {
    console.log("DB successully created/connected");
  }
});

let create = `
CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
age NUMBER NOT NULL
)`;

db.run(create, (err) => {
  if (err) {
    console.log("couldnt create table");
  } else {
    console.log("table created");
  }
});

let insert = `
INSERT INTO users
(name, age)
VALUES
(?, ?)`;

const insertToDB = (user) => {
  db.run(insert, [user.name, user.age], (err) => {
    if (err) {
      console.log("failed to insert user");
    } else {
      console.log("user inserted successfully");
    }
  });
};

// Here comes the Server Stuff

const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static("public"));

app.post("/api/users", (req, res) => {
  const user = req.body;
  if (!user.name || !user.age) {
    return res.status(400).send("Name and age are required");
  } else {
    insertToDB(user);
    res.status(201).send("User added successfully");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log("couldnt open server");
  } else {
    console.log("Server is listening on port: ", port);
  }
});
