const express = require("express");
const route = express.Router();
const db = require('../db/models');


route.post("/", async (req, res) => {

    try {
      const res = await db.sequelize.query(`
        SELECT * from tab    
   `);
      console.log('res: ', res);
    } catch (error) {
      console.log('Insert Err', error.message);
      res.json({ status: false, resp: [error.message] });
    }
});



module.exports = route;
