const projects = require('./projects.js');
const contacts = require('./contacts.js');
const data = require('./data');

let projectList;
let contactList;

document.addEventListener("DOMContentLoaded", () => { 

  // Prepare cards

  projectList = document.querySelector('.project-list');
  contactList = document.querySelector('.contact-list');

  projects.addProjectCards(projectList, data);
  contacts.addContactCards(contactList, data);

  document.addEventListener('scroll', () => {
    projects.handleScroll();
    contacts.handleScroll();
  });
});