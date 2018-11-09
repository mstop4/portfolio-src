const projects = require('./projects');
const contacts = require('./contacts');
const modal = require('./modal')

document.addEventListener('DOMContentLoaded', () => { 

  let projectList = document.querySelector('.project-list');
  let contactList = document.querySelector('.contact-list');
  let modalEls = {
    root: document.querySelector('.modal'),
    back: document.querySelector('.modal__back'),
    front: document.querySelector('.modal__front')
  }; 

  // Set up cards

  projects.addProjectCards(projectList);
  contacts.addContactCards(contactList);

  const updateCards = (event) => {
    projects.handleUpdate();
    contacts.handleUpdate();
    //console.log(event.type);
  }

  document.addEventListener('scroll', updateCards);
  document.addEventListener('resize', updateCards);
  document.addEventListener('orientationchange', updateCards);

  modal.initialize(modalEls);
});