const { openWeatherApiKey }  = require('./data/env');
const { location, prefixes, temperatureRanges } = require('./data/weather');

const getWeather = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${openWeatherApiKey}&units=metric`)
    .then((result) => result.json())
    .then((json) => {
      // console.dir(json);
      console.log(evaluateWeather(json))
  });
}

const evaluateWeather = (weatherObj) => {
  const weatherIdStr = String(weatherObj.weather[0].id);
  const temp = weatherObj.main.temp;
  let output = '(where it\'s a ';

  for (let i = 0; i < temperatureRanges.length; i++) {
    if (temp < temperatureRanges[i].maxTemp) {
      output += `${temperatureRanges[i].descriptor} day and currently experiencing `;
      break;
    }
  }

  for (let i = 0; i < prefixes.length; i++) {
    const prefix = prefixes[i];

    for (let j = 0; j < prefix.patterns.length; j++) {
      if (prefix.patterns[j].test(weatherIdStr)) {
        output += prefix.prefix;
        break;
      }
    }
  }

  output += `${weatherObj.weather[0].description})`;
  return output;
}

module.exports = {
  getWeather
}