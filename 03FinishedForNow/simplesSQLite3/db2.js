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
  {
    name: "marie",
    email: "marie@marie.com",
  },
  {
    name: "saul",
    email: "saul@saul.com",
  },
  {
    name: "gus",
    email: "gus@gus.com",
  },
  {
    name: "mike",
    email: "mike@mike.com",
  },
  {
    name: "lydia",
    email: "lydia@lydia.com",
  },
  {
    name: "todd",
    email: "todd@todd.com",
  },
  {
    name: "jane",
    email: "jane@jane.com",
  },
  {
    name: "hector",
    email: "hector@hector.com",
  },
  {
    name: "tuco",
    email: "tuco@tuco.com",
  },
  {
    name: "victor",
    email: "victor@victor.com",
  },
  {
    name: "gale",
    email: "gale@gale.com",
  },
  {
    name: "steven",
    email: "steven@steven.com",
  },
  {
    name: "elliott",
    email: "elliott@elliott.com",
  },
  {
    name: "gretchen",
    email: "gretchen@gretchen.com",
  },
  {
    name: "badger",
    email: "badger@badger.com",
  },
  {
    name: "skinny",
    email: "skinny@skinny.com",
  },
  {
    name: "combo",
    email: "combo@combo.com",
  },
  {
    name: "ken",
    email: "ken@ken.com",
  },
  {
    name: "crazy8",
    email: "crazy8@crazy8.com",
  },
  {
    name: "emilio",
    email: "emilio@emilio.com",
  },
  {
    name: "jane",
    email: "jane@jane.com",
  },
  {
    name: "andrea",
    email: "andrea@andrea.com",
  },
  {
    name: "brock",
    email: "brock@brock.com",
  },
  {
    name: "ted",
    email: "ted@ted.com",
  },
  {
    name: "francesca",
    email: "francesca@francesca.com",
  },
  {
    name: "huell",
    email: "huell@huell.com",
  },
  {
    name: "kuby",
    email: "kuby@kuby.com",
  },
  {
    name: "victor",
    email: "victor@victor.com",
  },
  {
    name: "tio",
    email: "tio@tio.com",
  },
  {
    name: "leonel",
    email: "leonel@leonel.com",
  },
  {
    name: "marco",
    email: "marco@marco.com",
  },
  {
    name: "wendy",
    email: "wendy@wendy.com",
  },
  {
    name: "clovis",
    email: "clovis@clovis.com",
  },
  {
    name: "jake",
    email: "jake@jake.com",
  },
  {
    name: "victor",
    email: "victor@victor.com",
  },
  {
    name: "todd",
    email: "todd@todd.com",
  },
  {
    name: "jack",
    email: "jack@jack.com",
  },
  {
    name: "lydia",
    email: "lydia@lydia.com",
  },
  {
    name: "andrea",
    email: "andrea@andrea.com",
  },
  {
    name: "brock",
    email: "brock@brock.com",
  },
  {
    name: "ted",
    email: "ted@ted.com",
  },
  {
    name: "francesca",
    email: "francesca@francesca.com",
  },
  {
    name: "huell",
    email: "huell@huell.com",
  },
  {
    name: "kuby",
    email: "kuby@kuby.com",
  },
  {
    name: "victor",
    email: "victor@victor.com",
  },
  {
    name: "tio",
    email: "tio@tio.com",
  },
  {
    name: "leonel",
    email: "leonel@leonel.com",
  },
  {
    name: "marco",
    email: "marco@marco.com",
  },
  {
    name: "wendy",
    email: "wendy@wendy.com",
  },
  {
    name: "clovis",
    email: "clovis@clovis.com",
  },
  {
    name: "jake",
    email: "jake@jake.com",
  },
  {
    name: "victor",
    email: "victor@victor.com",
  },
  {
    name: "todd",
    email: "todd@todd.com",
  },
  {
    name: "jack",
    email: "jack@jack.com",
  },
  {
    name: "lydia",
    email: "lydia@lydia.com",
  },
  {
    name: "andrea",
    email: "andrea@andrea.com",
  },
  {
    name: "brock",
    email: "brock@brock.com",
  },
  {
    name: "ted",
    email: "ted@ted.com",
  },
  {
    name: "francesca",
    email: "francesca@francesca.com",
  },
  {
    name: "huell",
    email: "huell@huell.com",
  },
  {
    name: "kuby",
    email: "kuby@kuby.com",
  },
  {
    name: "victor",
    email: "victor@victor.com",
  },
  {
    name: "tio",
    email: "tio@tio.com",
  },
  {
    name: "leonel",
    email: "leonel@leonel.com",
  },
  {
    name: "marco",
    email: "marco@marco.com",
  },
  {
    name: "wendy",
    email: "wendy@wendy.com",
  },
  {
    name: "clovis",
    email: "clovis@clovis.com",
  },
  {
    name: "jake",
    email: "jake@jake.com",
  },
  {
    name: "victor",
    email: "victor@victor.com",
  },
  {
    name: "todd",
    email: "todd@todd.com",
  },
  {
    name: "jack",
    email: "jack@jack.com",
  },
  {
    name: "lydia",
    email: "lydia@lydia.com",
  },
  {
    name: "andrea",
    email: "andrea@andrea.com",
  },
  {
    name: "brock",
    email: "brock@brock.com",
  },
  {
    name: "ted",
    email: "ted@ted.com",
  },
  {
    name: "francesca",
    email: "francesca@francesca.com",
  },
  {
    name: "huell",
    email: "huell@huell.com",
  },
  {
    name: "kuby",
    email: "kuby@kuby.com",
  },
  {
    name: "victor",
    email: "victor@victor.com",
  },
  {
    name: "tio",
    email: "tio@tio.com",
  },
  {
    name: "leonel",
    email: "leonel@leonel.com",
  },
  {
    name: "marco",
    email: "marco@marco.com",
  },
  {
    name: "wendy",
    email: "wendy@wendy.com",
  },
  {
    name: "clovis",
    email: "clovis@clovis.com",
  },
  {
    name: "jake",
    email: "jake@jake.com",
  },
  {
    name: "victor",
    email: "victor@victor.com",
  },
  {
    name: "todd",
    email: "todd@todd.com",
  },
  {
    name: "jack",
    email: "jack@jack.com",
  },
  {
    name: "lydia",
    email: "lydia@lydia.com",
  },
];

const db = new sqlite3.Database("test2.db", (err) => {
  if (err) {
    console.log("No connection established");
  } else {
    console.log("Connection Done :)");
  }
});

let deleteByNumber = `
DELETE FROM users WHERE ID = ?`;

for (let i = 777; i <= 93000; i++) {
  db.run(deleteByNumber, [i], (err) => {
    if (err) {
      console.log("couldnt delete number: ", i);
    } else {
      console.log("done on ", i);
    }
  });
}

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

for (let i = 0; i < 1000; i++) {
  contentList.forEach((element) => {
    db.run(insert, [element.name, element.email], (err) => {
      if (err) {
        console.log("Error inserting: ", element);
      } else {
        console.log(element, " successfully inserted");
      }
    });
  });
}

db.close((err) => {
  if (err) {
    console.log("couldnt close DB");
  } else {
    console.log("DB closed");
  }
});
