const moment = require('moment');
const { setWeather } = require('../helpers/weather');
const { parseGithubEvent } = require('../helpers/github');
const { getWindowSize } = require('../helpers');

const location = require('../data/location');
const { googleMapsApiKey } = require('../data/env');

const breakpointWidth = 921;
const maxGithubEvents = 4;

const handleResize = () => {
  const winWidth = getWindowSize().width;
  const bioElems = document.querySelectorAll('.bio__base');

  if (winWidth < breakpointWidth) {
    bioElems.forEach((elem, i) => {
      elem.style.order = i;
    });
  }

  else {
    bioElems.forEach((elem, i) => {
      if (i % 4 === 2) {
        elem.style.order = i+1;
      }
      
      else if (i % 4 === 3) {
        elem.style.order = i-1;
      }

      else {
        elem.style.order = i;
      }
    });
  }
}

const setupMap = () => {
  const locationElem = document.querySelector('#bio__location');
  locationElem.innerHTML += location.location;

  const mapLink = document.createElement('a');
  const mapImg = document.createElement('img');

  mapImg.src = `https://maps.googleapis.com/maps/api/staticmap?center=${location.coordinates}&zoom=${location.zoom}&scale=${location.scale}&size=${location.mapWidth}x${location.mapHeight}&markers=size:${location.marker.size}|color:${location.marker.color}|${location.coordinates}&maptype=${location.maptype}&key=${googleMapsApiKey}&format=png&visual_refresh=true`
  mapImg.alt = `Map of ${location.location}`;

  mapLink.href = `https://www.google.com/maps/place/${location.location}/`;
  mapLink.target = '_blank';
  mapLink.appendChild(mapImg);
  
  const mapCard = document.querySelector('.bio__map');
  mapCard.appendChild(mapLink);
}

const setupWeather = () => {
  const weatherElem = document.querySelector('.weather__text');
  setWeather(weatherElem);
}

const setupDailyFact = () => {
  const month = moment().month() + 1;
  const day = moment().date();

  fetch(`http://numbersapi.com/${month}/${day}/date?json&fragment`)
  .then(res => {
    res.json()
    .then(json => {
      const factElem = document.querySelector('.today__text');
      factElem.innerHTML = `<strong>This day in ${json.year}:</strong> ${json.text}.`;
    });
  });
}

const setupGithub = () => {
  fetch('https://api.github.com/users/mstop4/events')
  .then(res => {
    
    res.json()
    .then(json => {

      //console.log(json);
      
      for (let i = 0; i < maxGithubEvents; i++) {
        const eventList = document.querySelector('.github-event-list');
        const eventElem = document.createElement('li');

        eventElem.innerHTML = parseGithubEvent(json[i]);
        eventList.appendChild(eventElem);
      }
    });
  
  });
}

module.exports = {
  handleResize,
  setupMap,
  setupWeather,
  setupDailyFact,
  setupGithub
}