const { openWeatherApiKey }  = require('./data/env');

const getWeather = (location) => {
  console.log(openWeatherApiKey);
}

module.exports = {
  getWeather
}