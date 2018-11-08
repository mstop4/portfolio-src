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

  projects.addProjectCards(projectList, modalEls);
  contacts.addContactCards(contactList);

  document.addEventListener('scroll', () => {
    projects.handleScroll();
    contacts.handleScroll();
  });

  modal.setUpListeners(modalEls);
});