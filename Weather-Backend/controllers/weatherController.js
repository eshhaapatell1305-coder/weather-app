const alertService = require("../services/alertService");
const weatherQueue = require("../queues/weatherQueue");
const redis = require("../config/redis");
const weatherMicroservice = require("../microservices/weatherService");
const notificationService = require("../microservices/notificationService");

let weatherData = [
  {
    id: 1,
    city: "Ahmedabad",
    temperature: 32,
    condition: "Sunny",
  },
];


// READ WEATHER

exports.getWeather = async (req, res) => {
     console.log("🔥 getWeather Controller Executed");
  try {
    const city = req.query.city || "Ahmedabad";

    // Notification Microservice
    notificationService.sendNotification(city);

    // Queue Job
    await weatherQueue.add({
      city,
    });

    // Check Redis Cache
    const cachedData = await redis.get(city);

    if (cachedData) {
      console.log("✅ Weather Loaded From Redis Cache");
      return res.json(JSON.parse(cachedData));
    }

    console.log("🌐 Fetching Weather From Weather Microservice");

    // Weather Microservice
    const data = await weatherMicroservice.fetchWeather(city);
    // Generate Smart Weather Alerts
const alerts = alertService.checkAlerts(data);

console.log("⚠ Weather Alerts:", alerts);

    // Save into Redis (1 hour)
    await redis.set(city, JSON.stringify(data), {
      EX: 3600,
    });

    console.log("💾 Weather Saved Into Redis");

    res.json({
    ...data,
    alerts
});
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Weather API Error",
    });
  }
};


// CREATE

exports.addWeather = (req, res) => {
  const weather = {
    id: weatherData.length + 1,
    ...req.body,
  };

  weatherData.push(weather);

  res.status(201).json({
    message: "Weather Added",
    weather,
  });
};


// UPDATE

exports.updateWeather = (req, res) => {
  const id = parseInt(req.params.id);

  const weather = weatherData.find((w) => w.id === id);

  if (!weather) {
    return res.status(404).json({
      message: "Not Found",
    });
  }

  weather.city = req.body.city;
  weather.temperature = req.body.temperature;
  weather.condition = req.body.condition;

  res.json({
    message: "Updated",
    weather,
  });
};


// DELETE

exports.deleteWeather = (req, res) => {
  const id = parseInt(req.params.id);

  weatherData = weatherData.filter((w) => w.id !== id);

  res.json({
    message: "Deleted Successfully",
  });
};