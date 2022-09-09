const express = require("express");
const route = express.Router();
const db = require('../db/models');


route.post("/", async (req, res) => {
  console.log('Query:', req.body.query);
    try {
      const [rows, meta] = await db.sequelize.query(req.body.query);
      res.json({ status: "ok", resp: rows });
    } catch (err) {
      console.error('Error', err.name, err.message);
      if(err.name === 'SequelizeDatabaseError') return res.json({ status: false, resp: [err.message] });
      res.status(500).json({ status: false, resp: [err.message] });
    }
});



module.exports = route;
