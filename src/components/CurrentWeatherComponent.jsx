function CurrentWeatherComponent({ weather }) {

  if (!weather) return null;

  return (
    <div className="weather-card">

      <img
        className="weather-icon"
        src={"https:" + weather.current.condition.icon}
        alt={weather.current.condition.text}
      />

      <h2>
        {weather.location.name}, {weather.location.country}
      </h2>

      <h1 className="temperature">
        {weather.current.temp_c}°C
      </h1>

      <p className="condition">
        {weather.current.condition.text}
      </p>

      <div className="weather-info">

        <div className="info-box">
          <h4>💧 Humidity</h4>
          <p>{weather.current.humidity}%</p>
        </div>

        <div className="info-box">
          <h4>💨 Wind</h4>
          <p>{weather.current.wind_kph} km/h</p>
        </div>

        <div className="info-box">
          <h4>🌡 Pressure</h4>
          <p>{weather.current.pressure_mb} hPa</p>
        </div>

      </div>

    </div>
  );
}

export default CurrentWeatherComponent;