const express = require("express");
const router = express.Router();

const { query } = require("../controllers");
const { info } = require("../controllers");


// router.get("/", info);
router.post("/", query);

module.exports = router;
