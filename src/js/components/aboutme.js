const { setWeather } = require('../helpers/weather');
const location = require('../data/location');
const { googleMapsApiKey } = require('../data/env');
const { getWindowSize, capitalize } = require('../helpers');
const moment = require('moment');

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

  mapImg.src = `https://maps.googleapis.com/maps/api/staticmap?center=${location.coordinates}&zoom=${location.zoom}&scale=${location.scale}&size=${location.size}x${location.size}&markers=size:${location.marker.size}|color:${location.marker.color}|${location.coordinates}&maptype=${location.maptype}&key=${googleMapsApiKey}&format=png&visual_refresh=true`
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

const setupGithub = () => {
  fetch('https://api.github.com/users/mstop4/events')
  .then(res => {
    
    res.json()
    .then(json => {

      console.log(json);
      
      for (let i = 0; i < maxGithubEvents; i++) {
        const eventList = document.querySelector('.github-event-list');
        const eventElem = document.createElement('li');

        const timestamp = moment(json[i].created_at);
        const timeDiff = timestamp.diff(moment());
        eventElem.innerHTML += `<strong>${moment.duration(timeDiff).humanize(true)}</strong> - `;

        switch (json[i].type) {
          case 'PushEvent':
            eventElem.innerHTML += `Pushed ${json[i].payload.size} commits to ${json[i].repo.name}`;
            break;

          case 'PullRequestEvent':
            eventElem.innerHTML += capitalize(`${json[i].payload.action} pull request #${json[i].payload.number} in ${json[i].repo.name}`);
            break;

          case 'CreateEvent':
            eventElem.innerHTML += `Created ${json[i].payload.ref_type} "${json[i].payload.ref}" in ${json[i].repo.name}`;
            break;

          case 'DeleteEvent':
            eventElem.innerHTML += `Deleted ${json[i].payload.ref_type} "${json[i].payload.ref}" in ${json[i].repo.name}`;
            break;

          case 'WatchEvent':
            eventElem.innerHTML += capitalize(`${json[i].payload.action} watching ${json[i].repo.name} `);
            break;

          case 'ForkEvent':
            eventElem.innerHTML += `Forked ${json[i].repo.name}`;
            break;

          default:
            eventElem.innerHTML += 'Tried something new that even this site doesn\'t know about';
        }

        eventList.appendChild(eventElem);
      }
    });
  
  });
}

module.exports = {
  handleResize,
  setupMap,
  setupWeather,
  setupGithub
}