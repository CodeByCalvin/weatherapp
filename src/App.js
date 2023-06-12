import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import WeekCard from "./components/weekcard";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherAPI from "./weatherAPI";

function App() {
  // Logos for the weather
  const sunLogo = "https://img.icons8.com/color/48/000000/sun--v1.png";
  const rainLogo = "https://img.icons8.com/color/48/000000/rain--v1.png";
  const cloudLogo = "https://img.icons8.com/color/48/000000/cloud--v1.png";
  const snowLogo = "https://img.icons8.com/color/48/000000/snow.png";
  const thunderLogo = "https://img.icons8.com/color/48/000000/storm.png";
  const clearLogo = "https://img.icons8.com/color/48/000000/sun--v1.png";

  const weatherAPI = new WeatherAPI();

  // States
  const [weatherData, setWeatherData] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  ////////////////// Fetching the current weather data
  useEffect(() => {
    const fetchData = async () => {
      const data = await weatherAPI.getWeather();
      setWeatherData(data);
    };
    fetchData();
  }, []);

  // Fetching the temperature
  useEffect(() => {
    if (!weatherData) return;
    const fetchTemperature = () => {
      const temperature = weatherData.current.temp - 273.15;
      setTemperature(temperature.toFixed(1));
    };
    fetchTemperature();
  }, [weatherData]);

  // Fetching the weather description
  useEffect(() => {
    if (!weatherData) return;
    const fetchWeatherDescription = () => {
      const weatherDescription = weatherData.current.weather[0].description;
      const weatherDescriptionFormatted =
        weatherDescription.charAt(0).toUpperCase() +
        weatherDescription.slice(1);
      setWeatherDescription(weatherDescriptionFormatted);
    };
    fetchWeatherDescription();
  }, [weatherData]);

  // Fetching the weather icon
  // Using a switch statement to determine which icon to use
  useEffect(() => {
    if (!weatherData) return;
    const fetchWeatherIcon = () => {
      const weatherName = weatherData.current.weather[0].main;
      switch (weatherName) {
        case "Clear":
          setWeatherIcon(clearLogo);
          break;
        case "Clouds":
          setWeatherIcon(cloudLogo);
          break;
        case "Rain":
          setWeatherIcon(rainLogo);
          break;
        case "Snow":
          setWeatherIcon(snowLogo);
          break;
        case "Thunderstorm":
          setWeatherIcon(thunderLogo);
          break;
        default:
          setWeatherIcon(null);
      }
    };
    fetchWeatherIcon();
  }, [weatherData]);

  return (
    <div className="App">
      <div className="weather-day"></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <WeekCard
              day="Monday"
              temperature={temperature}
              description={weatherDescription}
              img={weatherIcon}
              alt="Image representing the current weather"
            />
          </div>
          <div className="col">
            <WeekCard
              day="Monday"
              temperature={temperature}
              description={weatherDescription}
              img={weatherIcon}
              alt="Image representing the current weather"
            />
          </div>
          <div className="col">
            <WeekCard
              day="Monday"
              temperature={temperature}
              description={weatherDescription}
              img={weatherIcon}
              alt="Image representing the current weather"
            />
          </div>
          <div className="col">
            <WeekCard
              day="Monday"
              temperature={temperature}
              description={weatherDescription}
              img={weatherIcon}
              alt="Image representing the current weather"
            />
          </div>
          <div className="col">
            <WeekCard
              day="Monday"
              temperature={temperature}
              description={weatherDescription}
              img={weatherIcon}
              alt="Image representing the current weather"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
