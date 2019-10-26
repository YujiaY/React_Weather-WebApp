import axios from 'axios';

export const fetchWeatherData = city => {
  const cityName = city ==='' ? 'brisbane' : city;
  const weatherUrl = `https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=${cityName}`
  return axios(weatherUrl)
}
