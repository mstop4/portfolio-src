const modal = require('./components/modal');
const headings = require('./components/headings');
const aboutme = require('./components/aboutme');
const skills = require('./components/skills');
const projects = require('./components/projects');
const contacts = require('./components/contacts');

const { throttle } = require('./helpers');

document.addEventListener('DOMContentLoaded', () => {

  if (navigator.userAgent.indexOf("MSIE") >= 0) {
    const warning = document.getElementById('is-ie10-');
    warning.classList.remove("hidden");
  }

  headings.initialize();
  aboutme.initialize();
  skills.initialize();
  projects.initialize();
  contacts.initialize();

  const updateCards = throttle(() => {
    projects.handleUpdate();
    contacts.handleUpdate();
    headings.handleUpdate();
    aboutme.handleUpdate();
    skills.handleUpdate();
  }, 100);

  document.addEventListener('scroll', updateCards);
  window.addEventListener('resize', updateCards);
  window.addEventListener('orientationchange', updateCards);

  // - Modal
  modal.initialize();
});