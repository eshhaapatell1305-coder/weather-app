const weatherQueue = require("../queues/weatherQueue");

weatherQueue.process(async (job) => {
  console.log("=================================");
  console.log("📩 Notification Service Running");
  console.log(`🌤 City Searched: ${job.data.city}`);
  console.log("=================================");
});