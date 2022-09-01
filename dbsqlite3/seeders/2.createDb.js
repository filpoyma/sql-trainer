const db = require("../lib/createDb")();
const fs = require("fs");

// db.serialize(function () {
// db.get("PRAGMA foreign_keys = ON");
//   fs.readFile("tableInit.json", "utf8", function (err, data) {
//     if (err) return console.log(err);
//     JSON.parse(data).forEach((item, i) => {
//       if (i <= 10)
//         db.run(item, (err, rows) => {
//           if (err) console.log("errrr", err);
//           console.log("Insert Success");
//         });
//     });
//     db.close;
//   });
// });

// db.serialize(function () {
//   db.get("PRAGMA foreign_keys = ON");
//   fs.readFile("tableInit.json", "utf8", function (err, data) {
//     if (err) return console.log(err);
//     JSON.parse(data).forEach((item, i) => {
//       if (i > 10)
//         db.run(item, (err, rows) => {
//           if (err) console.log("errrr", err);
//           console.log("Insert Success");
//         });
//     });
//     db.close;
//   });
// });



