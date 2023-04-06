const weatherController = require("../controllers/weatherController");
const express = require("express");
const router = express.Router();

router.get("/", weatherController.getHome);

module.exports = router;
