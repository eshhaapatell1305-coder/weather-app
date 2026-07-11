function CurrentWeatherComponent({ weather }) {
  return (
    <>
      <h2 className="current-title">🌍 Current Weather</h2>

      <div className="current-card">
        <img
          src={weather.current.condition.icon}
          alt="Weather Icon"
        />

        <h1>{weather.current.temp_c}°C</h1>

        <h3>{weather.location.name}</h3>

        <p>{weather.current.condition.text}</p>

        <div className="weather-grid">
          <div className="detail-card">
            <h4>💧 Humidity</h4>
            <p>{weather.current.humidity}%</p>
          </div>

          <div className="detail-card">
            <h4>💨 Wind</h4>
            <p>{weather.current.wind_kph} km/h</p>
          </div>

          <div className="detail-card">
            <h4>🌬 Pressure</h4>
            <p>{weather.current.pressure_mb} mb</p>
          </div>

          <div className="detail-card">
            <h4>👁 Visibility</h4>
            <p>{weather.current.vis_km} km</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentWeatherComponent;