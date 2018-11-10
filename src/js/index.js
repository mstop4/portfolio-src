const projects = require('./projects');
const contacts = require('./contacts');
const modal = require('./modal');
const headings = require('./headings');

document.addEventListener('DOMContentLoaded', () => { 

  headings.initialize();

  // Set up cards

  projects.addProjectCards();
  contacts.addContactCards();

  const updateCards = (event) => {
    projects.handleUpdate();
    contacts.handleUpdate();
    headings.handleUpdate();
    //console.log(event.type);
  }

  document.addEventListener('scroll', updateCards);
  document.addEventListener('resize', updateCards);
  document.addEventListener('orientationchange', updateCards);

  modal.initialize();
});