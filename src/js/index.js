const projects = require('./projects');
const contacts = require('./contacts');
const modal = require('./modal');
const headings = require('./headings');
const { setWeather } = require('./weather');
const { location } = require('./data/weather');
const { throttle } = require('./helpers');

document.addEventListener('DOMContentLoaded', () => {
  headings.initialize();

  // Set up cards

  projects.addProjectCards();
  contacts.addContactCards();

  const updateCards = throttle(() => {
    projects.handleUpdate();
    contacts.handleUpdate();
    headings.handleUpdate();
  }, 100);

  document.addEventListener('scroll', updateCards);
  document.addEventListener('resize', updateCards);
  document.addEventListener('orientationchange', updateCards);

  modal.initialize();

  const locationSpan = document.querySelector('#location');
  const weatherSpan = document.querySelector('#weather');

  locationSpan.innerHTML = location;
  setWeather(weatherSpan);
});