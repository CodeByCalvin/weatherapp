import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
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

  // Toggle between Celsius and Fahrenheit
  const [isCelsius, setIsCelsius] = useState(true);
  const toFarenheit = (celsius) => ((celsius * 9) / 5 + 32).toFixed(0);
  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  ////////////////// Fetching the weather data (current and weekly)
  useEffect(() => {
    const fetchData = async () => {
      // Fetching the weather data
      const data = await weatherAPI.getWeather();

      // Fetching the current weather data
      // Creating an object with the data
      const currentData = {
        temperature: (data.current.temp - 273.15).toFixed(0),
        description:
          data.current.weather[0].description.charAt(0).toUpperCase() +
          data.current.weather[0].description.slice(1),
        feelslike: (data.current.feels_like - 273.15).toFixed(0),
        wind: data.current.wind_speed,
        humidity: data.current.humidity,
        sunrise: convertTimestampToTime(data.current.sunrise),
        sunset: convertTimestampToTime(data.current.sunset),
        icon: getWeatherIcon(data.current.weather[0].main),
        uvi: data.current.uvi,
      };
      setCurrentData(currentData);

      // Fetching the weekly weather data
      // Creating an object with the data
      const dailyData = data.daily.map((day) => ({
        temperature: (day.temp.day - 273.15).toFixed(0),
        description:
          day.weather[0].description.charAt(0).toUpperCase() +
          day.weather[0].description.slice(1),
        summary: day.summary[0],
        icon: getWeatherIcon(day.weather[0].main),
      }));

      setDailyData(dailyData);
    };

    const convertTimestampToTime = (timestamp) => {
      const date = new Date(timestamp * 1000);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    };

    fetchData();
    console.log(dailyData);
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

  function getCurrentDate() {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${days[day]} ${months[month]} ${year}`;
  }

  return (
    <div className="App">
      <div className="container-fluid weather-container">
        <div className="weather-day-container">
          <CurrentDayCard
            location="Sheffield, UK"
            date={getCurrentDate()}
            temperature={currentData?.temperature}
            description={currentData?.description}
            img={currentData?.icon}
            feelslike={currentData?.feelslike}
            wind={currentData?.wind}
            humidity={currentData?.humidity}
            sunrise={currentData?.sunrise}
            sunset={currentData?.sunset}
            uvi={currentData?.uvi}
            isCelsius={isCelsius}
            toggleTemperature={toggleTemperature}
            toFarenheit={toFarenheit}
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
                    img={day.icon}
                    alt="Image representing the current weather"
                    temperature={day?.temperature}
                    description={day?.description}
                    isCelsius={isCelsius}
                    toggleTemperature={toggleTemperature}
                    toFarenheit={toFarenheit}
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
