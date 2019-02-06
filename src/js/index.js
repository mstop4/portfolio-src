const projects = require('./components/projects');
const contacts = require('./components/contacts');
const modal = require('./components/modal');
const headings = require('./components/headings');
const aboutme = require('./components/aboutme')

const { throttle } = require('./helpers');

document.addEventListener('DOMContentLoaded', () => {

  // - Headings
  headings.initialize();

  // - About Me
  aboutme.setupWeather();
  aboutme.setupMap();

  // - Cards
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

  // - Modal
  modal.initialize();
});