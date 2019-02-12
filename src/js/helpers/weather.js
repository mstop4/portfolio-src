const { openWeatherApiKey } = require('../data/env');
const { location, location_shortName } = require('../data/location');
const { temperatureRanges } = require('../data/weather');

const setWeather = (weatherElem) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${openWeatherApiKey}&units=metric`)
    .then((result) => result.json())
    .then((json) => {
      weatherElem.innerHTML = evaluateWeather(json);
  });
};

const evaluateWeather = (weatherObj) => {
  console.log(weatherObj);
  const weatherList = weatherObj.weather;
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

  output += ` weather in ${location_shortName}?</strong> A `;

  // Temperature
  for (let i = 0; i < temperatureRanges.length; i++) {
    if (temp < temperatureRanges[i].maxTemp) {
      output += `${temperatureRanges[i].descriptor} ${Math.round(temp)} °C with `;
      break;
    }
  }

  // Weather
  weatherList.forEach((condition, i) => {
    output += condition.description;

    switch (i) {
      case weatherList.length-1:
        output += '.';
        break;

      case weatherList.length-2:
        output += weatherList.length > 2 ? ', and ' : ' and ';
        break;

      default:
        output += ', ';
    }
  });

  return output;
}

module.exports = {
  setWeather
}