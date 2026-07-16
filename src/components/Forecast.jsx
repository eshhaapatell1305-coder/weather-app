function Forecast({ forecast }) {
  return (
    <>
      <h2 className="forecast-title">
        📅 5-Day Forecast
      </h2>

      <div className="forecast-container">
        {forecast.map((day, index) => (
          <div className="forecast-card" key={index}>
            <h3>{day.date}</h3>

            <img
  src={day.day.condition.icon}
  alt={day.day.condition.text}
  loading="lazy"
/>

            <h2>{day.day.avgtemp_c}°C</h2>

            <p>{day.day.condition.text}</p>

            <hr />

            <p>⬆ {day.day.maxtemp_c}°C</p>

            <p>⬇ {day.day.mintemp_c}°C</p>

            <p>💧 {day.day.avghumidity}%</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Forecast;