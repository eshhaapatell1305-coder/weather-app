const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const weatherController = require("../controllers/weatherController");

router.get("/weather", weatherController.getWeather);
router.post("/weather", auth, weatherController.addWeather);
router.put("/weather/:id", auth, weatherController.updateWeather);
router.delete("/weather/:id", auth, weatherController.deleteWeather);

module.exports = router;