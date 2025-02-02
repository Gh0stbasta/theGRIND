const sqlite3 = require("sqlite3");
let contentList = [
  {
    name: "walter",
    email: "walter@walter.de",
  },
  {
    name: "jesse",
    email: "jesse@jesse.com",
  },
  {
    name: "skyler",
    email: "skyler@skyler.com",
  },
  {
    name: "hank",
    email: "hank@hank.com",
  },
];

const db = new sqlite3.Database("test2.db", (err) => {
  if (err) {
    console.log("No connection established");
  } else {
    console.log("Connection Done :)");
  }
});

let drop = `
DROP TABLE users`;

db.run(drop, (err) => {
  if (err) {
    console.log("table couldnt be dropped");
  } else {
    console.log("table DROPPED");
  }
});

let create = `
CREATE TABLE IF NOT EXISTS users (
ID INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
email TEXT NOT NULL
)`;

db.run(create, [], (err) => {
  if (err) {
    console.log("Error creating table");
  } else {
    console.log("table created");
  }
});

let insert = `
INSERT INTO users (name, email)
VALUES
(?, ?)`;

contentList.forEach((element) => {
  db.run(insert, [element.name, element.email], (err) => {
    if (err) {
      console.log("Error inserting: ", element);
    } else {
      console.log(element, " successfully inserted");
    }
  });
});
