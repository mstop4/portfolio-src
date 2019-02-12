const { openWeatherApiKey } = require('../data/env');
const { location, location_shortName } = require('../data/location');
const { weatherConditions, temperatureRanges } = require('../data/weather');

const setWeather = (weatherElem) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${openWeatherApiKey}&units=metric`)
    .then((result) => result.json())
    .then((json) => {
      weatherElem.innerHTML = evaluateWeather(json);
  });
};

const evaluateWeather = (weatherObj) => {
  const weatherIdStr = String(weatherObj.weather[0].id);
  const temp = weatherObj.main.temp;
  let output = '';

  // Time of Day
  const now = Date.now();
  const sunrise = weatherObj.sys.sunrise * 1000;
  const sunset = weatherObj.sys.sunset * 1000;

  if (now >= sunrise && now < sunset) {
    output += '<strong>Today\'s';
  } else {
    output += '<strong>Tonight\'s';
  }

  output += ` weather in ${location_shortName}?</strong> `;

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
      output += `${weatherConditions[i].descriptor}.`;
      break;
    }
  }

  return output;
}

module.exports = {
  setWeather
}