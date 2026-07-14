const weatherService = require("../services/weatherService");

exports.fetchWeather = async (city) => {
    return await weatherService.getWeather(city);
};