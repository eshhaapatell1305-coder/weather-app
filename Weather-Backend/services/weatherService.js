const axios = require("axios");

exports.getWeather = async (city) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=5`
  );

  return response.data;
};