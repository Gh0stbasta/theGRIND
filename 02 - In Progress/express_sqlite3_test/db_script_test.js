// importing again for use
import sqlite3 from "sqlite3";

// opening a connection to an already existing db
const db = new sqlite3.Database("test.db", (err) => {
  if (err) {
    console.log("\n Zeilenumbruch und Fehler");
  } else {
    console.log("\n Wir sind drin  :) \n");
  }
});

// getting some information via .all from the db
// this shit is async, which means you have to handle all tasks inside the callback
db.all(`SELECT * FROM users`, (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log(rows);
});

// creating a new table for testing purposes
db.run(`
    CREATE TABLE IF NOT EXISTS timetest (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    language TEXT NOT NULL
    )`);

// inserting values into it
db.run(`
    INSERT INTO timetest (language)
    VALUES
    ("val1"),
    ("val2"),
    ("val3"),
    ("valicore")
    `);

// and trying to immediately get them back
//
// ######## this doesnt work ###########
// nevertheless the data got written into the db,
// but since the process is async we are requesting
// the data before it was written

db.all(`SELECT * FROM timetest`, (err, rows) => {
  if (err) {
    console.log("Request on timetest didn't work");
    return;
  } else {
    console.log(rows);
  }
});

// closing with style using the terniary operator ? :)
db.close((err) => console.log(err ? "Nö nö" : "\n Speed for Close \n"));
