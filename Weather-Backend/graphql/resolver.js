const weatherData = [
  {
    id: 1,
    city: "Ahmedabad",
    temperature: 32,
    condition: "Sunny",
    humidity: 65,
    wind: 18,
    pressure: 1012
  }
];

module.exports = {
  weather: () => weatherData
};