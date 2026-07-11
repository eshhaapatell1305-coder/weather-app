import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CurrentWeatherComponent from "../components/CurrentWeatherComponent";
import Forecast from "../components/Forecast";
import API from "../api/weatherApi";
import socket from "../socket";

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  // ===========================
  // WebSocket Connection
  // ===========================
  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
    });

    socket.on("message", (msg) => {
      console.log("📩 Server:", msg);
    });

    return () => {
      socket.off("connect");
      socket.off("message");
    };
  }, []);

  // ===========================
  // Fetch Weather
  // ===========================
  const getWeather = async () => {
    if (!city.trim()) {
      alert("Enter City");
      return;
    }

    setLoading(true);

    try {
      const response = await API.get(`/weather?city=${city}`);

      console.log(response.data);

      setWeather(response.data);

      if (response.data.forecast) {
        setForecast(response.data.forecast.forecastday);
      }
    } catch (error) {
      console.error(error);
      alert("Backend Connection Failed");
    }

    setLoading(false);
  };

  // ===========================
  // UI
  // ===========================
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

        {weather && (
          <>
            <CurrentWeatherComponent weather={weather} />
            <Forecast forecast={forecast} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;