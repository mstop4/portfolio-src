const projects = require('./projects');
const contacts = require('./contacts');
const modal = require('./modal')

document.addEventListener('DOMContentLoaded', () => { 

  // Set up cards

  projects.addProjectCards();
  contacts.addContactCards();

  const updateCards = (event) => {
    projects.handleUpdate();
    contacts.handleUpdate();
    //console.log(event.type);
  }

  document.addEventListener('scroll', updateCards);
  document.addEventListener('resize', updateCards);
  document.addEventListener('orientationchange', updateCards);

  modal.initialize();
});