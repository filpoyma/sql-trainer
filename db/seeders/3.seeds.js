const db = require("../lib/createDb")();
const fs = require('fs');

db.get("PRAGMA foreign_keys = ON");
db.run("BEGIN TRANSACTION");
fs.readFile("seeds.json", "utf8", function (err, data) {
  if (err) return console.log(err);
  JSON.parse(data).forEach((item) => {
    db.run(item, (err, rows) => {
      if (err) console.log("errrr", err, item);
       //console.log(index, "Insert Success", item);
    });
  });
db.run("COMMIT");
db.close
});