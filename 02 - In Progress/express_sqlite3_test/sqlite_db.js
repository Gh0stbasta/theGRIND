// importing the module
import sqlite3 from "sqlite3";

// crating a database connection, remember to alwas include the callback
const db = new sqlite3.Database("test.db", (err) => {
  if (err) {
    console.log("Shit hits the fan");
  } else {
    console.log("Connected to DB.");
  }
});

// this runs an action on the db, also with callback.
// we are crating a table
db.run(
  `
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age TEXST NOT NULL
    )`,
  (err) => {
    if (err) {
      console.log("DB shit hits the fan");
    } else {
      console.log("DB shit created successfully");
    }
  }
);

// again running a task on the db an inserting some values
db.run(
  `
    INSERT INTO users (name, age)
    VALUES
    ("Bob", "24"),
    ("Walter", "45"),
    ("Celine", "24")`,
  (err) => {
    if (err) {
      console.log("Inserting Data failed");
    } else {
      console.log("Data inserted successfully");
    }
  }
);

// closing the database connection
db.close((err) => {
  if (err) {
    console.log("Closing DB shit hits the fan");
  } else {
    console.log("Shit is done and closed");
  }
});
