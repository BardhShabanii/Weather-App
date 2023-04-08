const fetch = require("isomorphic-fetch");
const API_KEY = "5f5ab5356c313e996d2b5e2ef82b536f";

module.exports = {
  getHome: async (req, res) => {
    try {
      const city_name = req.params.city
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`http error! status: ${response.status}`);
      }
      const data = await response.json();
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  },
};
