const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/sqllite.db");

exports.info = (req, res) =>
  res.render("index", { title: "Sql query backend" });

exports.query = (req, res) => {
  db.get("PRAGMA foreign_keys = ON");
  db.all(req.body.query, function (err, rows) {
    if (err) {
      console.error(err.name, err.message);
      return res.json({ status: false, resp: [err.message] });
    }
    res.json({ status: "ok", resp: rows });
  });
}