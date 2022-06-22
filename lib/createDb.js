const sqlite3 = require('sqlite3').verbose();

const connectSql = () => new sqlite3.Database('sqllite.db', (err) => {
  if (err) {
    console.log("Could not connect to database", err);
  } else {
    console.log("Connected to database");
  }
});

module.exports = connectSql;
