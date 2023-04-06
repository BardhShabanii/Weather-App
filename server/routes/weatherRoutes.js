const weatherController = require("../controllers/weatherController");
const express = require("express");
const router = express.Router();

router.get("/weather/:city", weatherController.getHome);

module.exports = router;
