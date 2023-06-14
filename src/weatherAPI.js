import axios from "axios";

export default class WeatherAPI {
  async getWeather() {
    try {
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=53.383331&lon=-1.466667&exclude=minutely,hourly,alerts&appid=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`;
      const response = await axios.get(url);
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
