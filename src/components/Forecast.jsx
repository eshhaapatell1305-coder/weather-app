import ForecastCard from "./ForecastCard";

function Forecast({ forecast }) {

    if (!forecast) return null;

    return (

        <div className="forecast">

            <h2>

                5-Day Forecast

            </h2>

            <div className="forecast-container">

                {forecast.map((day) => (

                    <ForecastCard

                        key={day.date}

                        day={day}

                    />

                ))}

            </div>

        </div>

    );

}

export default Forecast;