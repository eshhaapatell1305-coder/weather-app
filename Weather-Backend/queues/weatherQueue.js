const Queue = require("bull");

const weatherQueue = new Queue("weather-queue", process.env.REDIS_URL);

module.exports = weatherQueue;