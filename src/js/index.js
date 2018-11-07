const projects = require('./projects.js');
const contacts = require('./contacts.js');
const data = require('./data');

document.addEventListener('DOMContentLoaded', () => { 

  // Prepare cards

  let projectList = document.querySelector('.project-list');
  let contactList = document.querySelector('.contact-list');
  let modal = {
    root: document.querySelector('.modal'),
    back: document.querySelector('.modal__back'),
    front: document.querySelector('.modal__front')
  }; 

  projects.addProjectCards(projectList, modal, data);
  contacts.addContactCards(contactList, data);

  document.addEventListener('scroll', () => {
    projects.handleScroll();
    contacts.handleScroll();
  });

  modal.back.addEventListener('click', () => {
    console.log('click modal');
    modal.back.classList.add('modal__back--hidden');
    modal.back.classList.remove('modal__back--show');
  });

  modal.back.addEventListener('transitionend', () => {
    if (modal.back.classList.contains('modal__back--hidden')) {
      console.log('hide modal');
      modal.root.classList.add('modal--hidden');
    } else {
      console.log('show modal');
    }
  })
});