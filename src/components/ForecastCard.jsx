function ForecastCard({ day }) {

  const weekday = new Date(day.date).toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (

    <div className="forecast-card">

      <h3>{weekday}</h3>

      <img
        src={"https:" + day.day.condition.icon}
        alt=""
      />

      <p>{day.day.condition.text}</p>

      <h2>{day.day.avgtemp_c}°C</h2>

    </div>

  );
}

export default ForecastCard;