const { addProjectCards } = require('./projects.js');
const { addContactCards } = require('./contacts.js');
const data = require('./data');

let projectList;
let contactList;

document.addEventListener("DOMContentLoaded", function() { 

  // Prepare cards

  projectList = document.querySelector('.project-list');
  contactList = document.querySelector('.contact-list');

  addProjectCards(projectList, data);
  addContactCards(contactList, data);
});