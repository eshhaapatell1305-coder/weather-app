const axios = require("axios");
const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

let weatherData = [
  {
    id: 1,
    city: "Ahmedabad",
    temperature: 32,
    condition: "Sunny"
  }
];

// READ
router.get("/weather", async (req, res) => {
  try {

    const city = req.query.city || "Ahmedabad";

    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=6227d486501c4e40a37122826260307&q=${city}&days=5`
    );

    res.json(response.data);

  } catch (error) {

    console.log(error.message);

    res.status(500).json({
      message: "Weather API Error"
    });

  }
});

// CREATE (Protected)
router.post("/weather", auth, (req, res) => {

  const weather = {
    id: weatherData.length + 1,
    ...req.body
  };

  weatherData.push(weather);

  res.status(201).json({
    message: "Weather Added",
    weather
  });
});

// UPDATE (Protected)
router.put("/weather/:id", auth, (req, res) => {

  const id = parseInt(req.params.id);

  const weather = weatherData.find(w => w.id === id);

  if (!weather)
    return res.status(404).json({
      message: "Not Found"
    });

  weather.city = req.body.city;
  weather.temperature = req.body.temperature;
  weather.condition = req.body.condition;

  res.json({
    message: "Updated",
    weather
  });

});

// DELETE (Protected)
router.delete("/weather/:id", auth, (req, res) => {

  const id = parseInt(req.params.id);

  weatherData = weatherData.filter(w => w.id !== id);

  res.json({
    message: "Deleted Successfully"
  });

});

module.exports = router;