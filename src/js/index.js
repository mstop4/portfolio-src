const { addProjectCards } = require('./projects.js');
const { addContactCards } = require('./contacts.js');
const data = require('./data');

let projectList;
let contactList;

document.addEventListener("DOMContentLoaded", function() { 

  // Prepare cards

  projectList = document.getElementsByClassName('project-list')[0];
  contactList = document.getElementsByClassName('contact-list')[0];

  addProjectCards(projectList, data);
  addContactCards(contactList, data);

  console.log(data);
});