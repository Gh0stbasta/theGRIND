const sqlite3 = require('sqlite3').verbose();

const db= new sqlite3.Database("test.db", (err) => {
    if (err) {
        console.error("Error establishing connectin", err.message);
    } else {
        console.log("Connection established");
}});


let sql = `
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER
    )`

db.run(sql, (err) => {
    if (err) {
        console.log("Error");
    } else {
        console.log("Done")
    }
});

let insert = `
INSERT INTO users (name, age)
VALUES
('name', 3),
('walter', 3),
('bob', 3),
('vase', 3),
('dieter', 3)
`

db.run(insert, (err) => {
    if (err) {
        console.log("error insert");
    } else {
        console.log("insert done")
    }
})