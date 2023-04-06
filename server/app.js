const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const weatherRoutes = require("./routes/weatherRoutes");
const PORT = 5000;

require("dotenv").config;

const apiKey = `${process.env.API_KEY}`;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/api", (req, res) => {
  res.render("index");
  res.json({ users: ["UserOne", "UserTwo", "UserThree"] });
});

app.use("/", weatherRoutes);
app.listen(PORT, () => {
  console.log("server is running on: " + PORT);
});
