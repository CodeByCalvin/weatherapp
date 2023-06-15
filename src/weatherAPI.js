import axios from "axios";

export default class WeatherAPI {
  async getCoords(location) {
    try {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
      const response = await axios.get(url);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getWeather(location, currentCoords) {
    const coords = await this.getCoords(location);
    try {
      const url = currentCoords
        ? `https://api.openweathermap.org/data/3.0/onecall?lat=${currentCoords.lat}&lon=${currentCoords.lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        : `https://api.openweathermap.org/data/3.0/onecall?lat=${coords[0].lat}&lon=${coords[0].lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

      const response = await axios.get(url);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
