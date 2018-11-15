const { openWeatherApiKey }  = require('./data/env');
const { location, weatherConditions, temperatureRanges } = require('./data/weather');

const setWeather = (weatherSpan) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${openWeatherApiKey}&units=metric`)
    .then((result) => result.json())
    .then((json) => {
      weatherSpan.innerHTML = evaluateWeather(json);
  });
};

const evaluateWeather = (weatherObj) => {
  const weatherIdStr = String(weatherObj.weather[0].id);
  const temp = weatherObj.main.temp;
  let output = 'where it\'s currently a ';

  // Temperature
  for (let i = 0; i < temperatureRanges.length; i++) {
    if (temp < temperatureRanges[i].maxTemp) {
      output += `${temperatureRanges[i].descriptor} and `;
      break;
    }
  }

  // Weather
  for (let i = 0; i < weatherConditions.length; i++) {
    if (weatherConditions[i].pattern.test(weatherIdStr)) {
      output += weatherConditions[i].descriptor;
      break;
    }
  }

  // Time of Day
  const now = Date.now();
  if (now >= weatherObj.sys.sunrise && now < weatherObj.sys.sunset) {
    output += ' day';
  } else {
    output += ' night';
  }

  return output;
}

module.exports = {
  setWeather
}