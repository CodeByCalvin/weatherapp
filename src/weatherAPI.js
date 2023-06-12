import axios from "axios";

export default class WeatherAPI {
  constructor() {
    this.apiKey = process.env.REACT_APP_API_KEY;
  }
  async getWeather() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=53.383331&lon=-1.466667&exclude=minutely,hourly,alerts&appid=${this.apiKey}`
      );
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
