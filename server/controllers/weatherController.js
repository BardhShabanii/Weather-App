const fetch = require("isomorphic-fetch");
const API_KEY = "5f5ab5356c313e996d2b5e2ef82b536f";
const city_name = "Amsterdam";

module.exports = {
  getHome: async (req, res) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`http error! status: ${response.status}`)
      }
      const data = await response.json();
      res.send(data)
    //   console.log(data);

    //   const temp = data.main.temp;
    //   const temp_min = data.main.temp_min;
    //   const temp_max = data.main.temp_max;
    //   const feels_like = data.main.feels_like;
    //   const weather = data.weather[0].main;
    //   const weather_desc = data.weather[0].description;
    //   const wind_speed = data.wind.speed;

    //   res.render("index", {
    //     city_name,
    //     temp,
    //     temp_min,
    //     temp_max,
    //     feels_like,
    //     wind_speed,
    //     weather,
    //     weather_desc,
    //   });
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  },
};
