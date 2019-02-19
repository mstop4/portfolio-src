const modal = require('./components/modal');
const headings = require('./components/headings');
const aboutme = require('./components/aboutme');
const projects = require('./components/projects');
const contacts = require('./components/contacts');

const { throttle } = require('./helpers');

document.addEventListener('DOMContentLoaded', () => {

  // - Headings
  headings.initialize();

  // - About Me
  aboutme.initialize();

  // - Cards
  projects.initialize();
  contacts.initialize();

  const updateCards = throttle(() => {
    projects.handleUpdate();
    contacts.handleUpdate();
    headings.handleUpdate();
    aboutme.handleUpdate();
  }, 100);

  document.addEventListener('scroll', updateCards);
  window.addEventListener('resize', updateCards);
  window.addEventListener('orientationchange', updateCards);

  // - Modal
  modal.initialize();
});