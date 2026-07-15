import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CurrentWeatherComponent from "../components/CurrentWeatherComponent";
import Forecast from "../components/Forecast";
import API from "../api/weatherApi";

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city.trim()) {
      alert("Enter City");
      return;
    }

    setLoading(true);

    try {
      const response = await API.get(`/weather?city=${city}`);

console.log("Weather API Response:", response.data);

setWeather(response.data);

if (response.data.forecast) {
  setForecast(response.data.forecast.forecastday);
}
      console.log(response.data);

      setWeather(response.data);

      if (response.data.forecast) {
        setForecast(response.data.forecast.forecastday);
      } else {
        setForecast([]);
      }
    } catch (error) {
      console.error(error);
      alert("Backend Connection Failed");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="glass-card">
        <h1 className="title">🌤 Weather Forecast</h1>

        <SearchBar
          city={city}
          setCity={setCity}
          getWeather={getWeather}
        />

        {loading && <h2 className="loading">Loading...</h2>}

{/* Welcome Section */}
{!weather && !loading && (
  <div className="welcome-card">
    <h1>☀️ Welcome to Weather Forecast</h1>

    <p>
      Search any city around the world and get
      real-time weather updates, humidity, wind speed,
      pressure, visibility, and a 5-day forecast.
    </p>

    <div className="weather-icons">
      <span>☀️</span>
      <span>🌤️</span>
      <span>⛅</span>
      <span>🌦️</span>
      <span>🌧️</span>
      <span>⛈️</span>
      <span>❄️</span>
    </div>

    <h3>🔍 Start by entering a city above.</h3>
  </div>
)}

{weather && (
  <>
    <CurrentWeatherComponent weather={weather} />

    {forecast.length > 0 && (
      <Forecast forecast={forecast} />
    )}
  </>
)}
      </div>
    </div>
  );
}

export default Home;