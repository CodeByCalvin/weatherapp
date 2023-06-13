import axios from "axios";

export default class WeatherAPI {
  constructor() {
    this.apiKey = process.env.REACT_APP_API_KEY;
  }
  async getWeather() {
    try {
      const response = await axios.get(``);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
