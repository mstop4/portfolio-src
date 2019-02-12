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
  aboutme.initialize();

  // - Cards
  projects.addProjectCards();
  contacts.addContactCards();

  const updateCards = throttle(() => {
    projects.handleUpdate();
    contacts.handleUpdate();
    headings.handleUpdate();
  }, 100);

  document.addEventListener('scroll', updateCards);
  window.addEventListener('resize', updateCards);
  window.addEventListener('resize', aboutme.handleResize);
  window.addEventListener('orientationchange', updateCards);

  // - Modal
  modal.initialize();
});