const { setWeather } = require('../helpers/weather');
const { parseGithubEvent } = require('../helpers/github');
const { getWindowSize, capitalize, getScrollPosition, toggleVisibilityFactory } = require('../helpers');

const location = require('../data/location');
const techs = require('../data/techs');
const { mapBoxApiKey } = require('../data/env');

const breakpointWidth = 921;
const maxGithubEvents = 4;

const bioCards = document.querySelectorAll('.bio__base');
let datamuseQueryChanged = false;

const initialize = () => {
  setupWeather();
  setupMap();
  setupGithub();
  setupDailyFact();
  setupTechs();
  setupDatamuse();
  handleResize();
}

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
  const geoJson = encodeURIComponent(JSON.stringify(location.geoJson));
  
  mapImg.src = `https://api.mapbox.com/v4/mapbox.${location.mapTheme}/geoJson(${geoJson})}/${location.coordinates},${location.zoom}/${location.mapWidth}x${location.mapHeight}.${location.imgFormat}?access_token=${mapBoxApiKey}`;
  //mapImg.src = 'https://api.mapbox.com/v4/mapbox.run-bike-hike/geojson(%7B%22type%22%3A%22FeatureCollection%22%2C%22features%22%3A%5B%7B%22type%22%3A%22Feature%22%2C%22properties%22%3A%7B%22marker-color%22%3A%22%2385c1e9%22%2C%22marker-size%22%3A%22large%22%2C%22marker-symbol%22%3A%22star%22%7D%2C%22geometry%22%3A%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B-79.3642%2C43.7153%5D%7D%7D%5D%7D)/-79.3642,43.7153,10/417x309.png32?access_token=pk.eyJ1IjoibXN0b3A0IiwiYSI6ImNqczVhdnZ6MzBkcms0NG54YXB6cnJiZzIifQ.wPiHjyA7Ixue2U178Vc2zg';
  mapImg.alt = `Map of ${location.location}`;

  mapLink.href = `https://www.google.com/maps/place/${location.location}/`;
  mapLink.target = '_blank';
  mapLink.appendChild(mapImg);
  
  const mapCard = document.querySelector('.bio__map');
  mapCard.appendChild(mapLink);
}

const setupWeather = () => {
  const weatherElem = document.querySelector('.weather-text');
  setWeather(weatherElem);
}

const setupDailyFact = () => {
  const now =  new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${month}/${day}/date?json&fragment`)
  .then(res => {
    res.json()
    .then(json => {
      const factElem = document.querySelector('.today-text');
      factElem.innerHTML = `<strong>This day in ${json.year}:</strong> ${json.text}.`;
    });
  });
}

const setupTechs = () => {
  const techImgs = document.querySelectorAll('.bio__techs img');

  techs.forEach((tech, i) => {
    techImgs[i].src = tech.image;
    techImgs[i].alt = tech.name;
    techImgs[i].title = tech.name;
  });
}

const setupDatamuse = () => {
  
  document.querySelector('.datamuse-query').addEventListener('keypress', event => {
    if (event.keyCode === 13) {
      queryDatamuse();
    }

    if (!datamuseQueryChanged) {
      datamuseQueryChanged = true;
      document.querySelector('.datamuse-search').value = '🔍 Search'; 
    }
  });

  document.querySelector('.datamuse-search').addEventListener('click', queryDatamuse);

  queryDatamuse();
}

const queryDatamuse = () => {
  const query = document.querySelector('.datamuse-query').value;

  fetch(`https://api.datamuse.com/words?sl=${query}`)
  .then(res => {
    res.json()
    .then(json => {
      const answer = document.querySelector('.datamuse-answer');
      answer.classList.add('datamuse-answer--hidden');
      setTimeout(() => {
        answer.textContent = `📖 ${capitalize(json[0].word)}`;
        answer.classList.remove("datamuse-answer--hidden")
      }, 50);
    })
  });
}

const setupGithub = () => {
  fetch('https://api.github.com/users/mstop4/events')
  .then(res => {
    
    res.json()
    .then(json => {

      //console.log(json);
      
      for (let i = 0; i < maxGithubEvents; i++) {
        const eventList = document.querySelector('.github-events');
        const eventElem = document.createElement('li');

        eventElem.innerHTML = parseGithubEvent(json[i]);
        eventList.appendChild(eventElem);
      }
    });

  });
}

const showCard = (card) => {
  card.classList.remove('bio__base--hidden');

  if (card.classList.contains('bio__text-left')) {
    card.classList.add('bio__text-left--appear');
  }
  else if (card.classList.contains('bio__text-right')) {
    card.classList.add('bio__text-right--appear');
  }

  else if (card.classList.contains('bio__card-left')) {
    card.classList.add('bio__card-left--appear');
  }
  else if (card.classList.contains('bio__card-right')) {
    card.classList.add('bio__card-right--appear');
  }
}
const hideCard = (card) => {
  card.classList.add('bio__base--hidden');

  if (card.classList.contains('bio__text-left')) {
    card.classList.remove('bio__text-left--appear');
  }
  else if (card.classList.contains('bio__text-right')) {
    card.classList.remove('bio__text-right--appear');
  }

  else if (card.classList.contains('bio__card-left')) {
    card.classList.remove('bio__card-left--appear');
  }
  else if (card.classList.contains('bio__card-right')) {
    card.classList.remove('bio__card-right--appear');
  }
}

const toggleVisibility = toggleVisibilityFactory('bio__base--hidden', showCard, hideCard);

const handleUpdate = () => {
  const pos = getScrollPosition();

  bioCards.forEach(card => {
    toggleVisibility(card, pos);
  });
};

module.exports = {
  initialize,
  handleUpdate,
  handleResize
}