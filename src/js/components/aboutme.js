const { setWeather } = require('../helpers/weather');
const location = require('../data/location');
const { googleMapsApiKey } = require('../data/env');

const setupWeather = () => {
  const weatherElem = document.querySelector('.weather__text');
  setWeather(weatherElem);
}

const setupMap = () => {
  const mapLink = document.createElement('a');
  const mapImg = document.createElement('img');

  mapImg.src = `https://maps.googleapis.com/maps/api/staticmap?center=${location.coordinates}&zoom=${location.zoom}&scale=${location.scale}&size=${location.size}x${location.size}&markers=size:${location.marker.size}|color:${location.marker.color}|${location.coordinates}&maptype=${location.maptype}&key=${googleMapsApiKey}&format=png&visual_refresh=true`
  mapImg.alt = `Map of ${location.location}`;

  mapLink.href = `https://www.google.com/maps/place/${location.location}/`;
  mapLink.target = '_blank';
  mapLink.appendChild(mapImg);
  
  const mapCard = document.querySelector('.bio__map');
  mapCard.appendChild(mapLink);
}

module.exports = {
  setupMap,
  setupWeather
}