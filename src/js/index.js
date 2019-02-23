const { initScrollBuffer } = require('./helpers');
const modal = require('./components/modal');
const headings = require('./components/headings');
const splash = require('./components/splash');
const aboutme = require('./components/aboutme');
const skills = require('./components/skills');
const projects = require('./components/projects');
const contacts = require('./components/contacts');

const { throttle } = require('./helpers');

document.addEventListener('DOMContentLoaded', () => {

  // IE 10- detection
  if (((/*@cc_on!@*/false || Boolean(document.documentMode)) && 
       !window.MSInputMethodContext) ) {
    const warning = document.getElementById('is-ie10-');
    warning.classList.remove('hidden');
  }

  initScrollBuffer(0.1);
  headings.initialize();
  splash.initialize();
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
    splash.handleUpdate();
  }, 100);

  document.addEventListener('scroll', updateCards);
  window.addEventListener('resize', updateCards);
  window.addEventListener('orientationchange', updateCards);

  // - Modal
  modal.initialize();
});