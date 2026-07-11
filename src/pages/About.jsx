function About() {
  return (
    <div className="container">

      <div className="glass-card">

        <h1 className="title">ℹ️ About Weather Forecast System</h1>

        <p className="about-text">
          The Weather Forecast System is a React-based web application that
          provides users with real-time weather information and a 5-day weather
          forecast for any city.
        </p>

        <br />

        <h2>✨ Features</h2>

        <ul className="feature-list">
          <li>🌤 Search weather by city name</li>
          <li>🌡 Current temperature</li>
          <li>💧 Humidity</li>
          <li>💨 Wind speed</li>
          <li>🌍 Country information</li>
          <li>📅 5-Day Weather Forecast</li>
          <li>📱 Responsive UI</li>
        </ul>

        <br />

        <h2>🛠 Technologies Used</h2>

        <ul className="feature-list">
          <li>React.js</li>
          <li>React Router</li>
          <li>React Hooks (useState)</li>
          <li>WeatherAPI</li>
          <li>CSS3</li>
        </ul>

      </div>
    </div>
  );
}

export default About;