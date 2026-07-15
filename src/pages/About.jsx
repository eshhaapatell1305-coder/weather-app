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

        <div className="tech-grid">

          <div className="tech-card">⚛ React.js</div>
          <div className="tech-card">⚡ Vite</div>
          <div className="tech-card">🎨 CSS3</div>
          <div className="tech-card">🧭 React Router</div>
          <div className="tech-card">📡 Axios</div>
          <div className="tech-card">🟢 Node.js</div>
          <div className="tech-card">🚀 Express.js</div>
          <div className="tech-card">🍃 MongoDB</div>
          <div className="tech-card">🟥 Redis Cloud</div>
          <div className="tech-card">📬 Bull Queue</div>
          <div className="tech-card">🔌 Socket.IO</div>
          <div className="tech-card">🔐 Passport.js</div>
          <div className="tech-card">🔑 JWT Authentication</div>
          <div className="tech-card">🌐 Google OAuth 2.0</div>
          <div className="tech-card">☁ WeatherAPI</div>
          <div className="tech-card">🔗 REST APIs</div>
          <div className="tech-card">▲ Vercel</div>
          <div className="tech-card">🚂 Render</div>

        </div>
      </div>
    </div>
  );
}

export default About;