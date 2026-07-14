exports.checkAlerts = (weather) => {

    const alerts = [];

    const temp = weather.current.temp_c;
    const humidity = weather.current.humidity;
    const wind = weather.current.wind_kph;
    const condition = weather.current.condition.text.toLowerCase();
    const uv = weather.current.uv;

    // Heat Alert
    if (temp >= 40) {
        alerts.push({
            type: "Heat Wave",
            severity: "High",
            icon: "🔥",
            message: "Extreme heat detected. Stay hydrated and avoid direct sunlight."
        });
    }

    // Cold Alert
    if (temp <= 5) {
        alerts.push({
            type: "Cold Wave",
            severity: "Medium",
            icon: "🥶",
            message: "Very low temperature. Wear warm clothes."
        });
    }

    // Rain Alert
    if (condition.includes("rain")) {
        alerts.push({
            type: "Rain Alert",
            severity: "Medium",
            icon: "🌧",
            message: "Rain expected. Carry an umbrella."
        });
    }

    // Thunderstorm Alert
    if (condition.includes("thunder")) {
        alerts.push({
            type: "Thunderstorm",
            severity: "High",
            icon: "⛈",
            message: "Stay indoors and avoid open areas."
        });
    }

    // Wind Alert
    if (wind >= 40) {
        alerts.push({
            type: "Strong Wind",
            severity: "Medium",
            icon: "💨",
            message: "Strong winds detected. Avoid outdoor activities."
        });
    }

    // Humidity Alert
    if (humidity >= 85) {
        alerts.push({
            type: "High Humidity",
            severity: "Low",
            icon: "💧",
            message: "High humidity may cause discomfort."
        });
    }

    // UV Alert
    if (uv >= 8) {
        alerts.push({
            type: "High UV",
            severity: "Medium",
            icon: "☀",
            message: "High UV Index. Wear sunscreen and sunglasses."
        });
    }

    return alerts;
};