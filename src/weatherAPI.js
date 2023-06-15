import axios from "axios";

export default class WeatherAPI {
  async getCoords(location) {
    try {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`;
      const response = await axios.get(url);
      console.log(response);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getWeather(location) {
    const coords = await this.getCoords(location);
    console.log(coords);
    try {
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${coords[0].lat}&lon=${coords[0].lon}&exclude=minutely,hourly,alerts&appid=59e92c478485fd676fef2cd63ef75813`;
      const response = await axios.get(url);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
