import logo from "./logo.svg";
import React, { useEffect } from "react";
import { useState } from "react";
import WeekCard from "./components/weekcard";
import CurrentDayCard from "./components/currentdaycard";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherAPI from "./weatherAPI";
import "./css/App.css";

function App() {
  // Logos for the weather
  const sunLogo = "https://img.icons8.com/color/48/000000/very-sunny.png";
  const rainLogo = "https://img.icons8.com/color/48/000000/rain--v1.png";
  const cloudLogo = "https://img.icons8.com/color/48/000000/cloud--v1.png";
  const snowLogo = "https://img.icons8.com/color/48/000000/snow.png";
  const thunderLogo = "https://img.icons8.com/color/48/000000/storm.png";
  const clearLogo =
    "https://img.icons8.com/?size=48&id=72jK8a9VDKgF&format=png";

  const weatherAPI = new WeatherAPI();

  // States
  const [currentData, setCurrentData] = useState(null);
  const [dailyData, setDailyData] = useState([]);

  console.log(currentData);

  ////////////////// Fetching the weather data (current and weekly)
  useEffect(() => {
    const fetchData = async () => {
      // Fetching the weather data
      const data = await weatherAPI.getWeather();

      // Fetching the current weather data
      // Creating an object with the data
      const currentData = {
        temperature: (data.current.temp - 273.15).toFixed(1),
        description:
          data.current.weather[0].description.charAt(0).toUpperCase() +
          data.current.weather[0].description.slice(1),
        icon: getWeatherIcon(data.current.weather[0].main),
      };
      setCurrentData(currentData);

      // Fetching the weekly weather data
      // Creating an object with the data
      const dailyData = data.daily.map((day) => ({
        temperature: (day.temp.day - 273.15).toFixed(1),
        description:
          day.weather[0].description.charAt(0).toUpperCase() +
          day.weather[0].description.slice(1),
        icon: getWeatherIcon(day.weather[0].main),
      }));

      setDailyData(dailyData);
    };
    fetchData();
  }, []);

  // Function to get the weather icon
  function getWeatherIcon(weatherName) {
    switch (weatherName) {
      case "Sunny":
        return sunLogo;
      case "Clear":
        return clearLogo;
      case "Clouds":
        return cloudLogo;
      case "Rain":
        return rainLogo;
      case "Snow":
        return snowLogo;
      case "Thunderstorm":
        return thunderLogo;
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <div className="container-fluid weather-container">
        <div className="weather-day-container">
          <CurrentDayCard
            location="Sheffield, UK"
            temperature={currentData?.temperature}
            description={currentData?.description}
            img={currentData?.icon}
          />
        </div>

        <div>
          <div className="week-container">
            <div className="row">
              {/* // Create a new erray with the first 5 days of the week and then map over it to create each card component (index parameter determines the day of the) */}
              {dailyData.slice(0, 5).map((day, index) => (
                <div className="col" key={index}>
                  <WeekCard
                    day={
                      ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][
                        index
                      ]
                    }
                    temperature={day.temperature}
                    description={day.description}
                    img={day.icon}
                    alt="Image representing the current weather"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
