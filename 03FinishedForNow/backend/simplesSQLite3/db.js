const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("test.db", (err) => {
  if (err) {
    console.error("Error establishing connectin", err.message);
  } else {
    console.log("Connection established");
  }
});

let sql = `
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER
    )`;

db.run(sql, (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Done");
  }
});

// let update = `
// UPDATE users SET age = ? WHERE id = ?
// `;

// db.run(update, [10, 5], (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("updated user");
//   }
// });

let insert = `
INSERT INTO users (name, age)
VALUES
('walter', 3),
('bob', 3),
('vase', 3)
`;

db.run(insert, (err) => {
  if (err) {
    console.log("error insert");
  } else {
    console.log("insert done");
  }
});

// let drop = `
// DROP TABLE users`;

// db.run(drop, (err) => {
//   if (err) {
//     console.log("Error dropping table");
//   } else {
//     console.log("dropped table");
//   }
// });

let select = `
SELECT * from users`;

db.all(select, (err, rows) => {
  if (err) {
    console.log("error select", err.message);
  } else {
    console.log(rows);
  }
});
