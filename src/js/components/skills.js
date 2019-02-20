const { getScrollPosition, toggleVisibilityFactory } = require('../helpers');
const skills = document.querySelector('.skills__list');
const techs = require('../data/techs');

const initialize = () => {
  setupTechs();
  handleUpdate();
}

const setupTechs = () => {
  const skillList = document.querySelector('.skills__list');

  techs.forEach(tech => {
    const techChip = document.createElement('li');
    const techIcon = document.createElement('img');
    const techName = document.createElement('div');
    techName.innerText = tech.name;

    techChip.classList.add('skills__tech');
    techIcon.src = tech.image;
    techIcon.alt = tech.name;

    techChip.appendChild(techIcon);
    techChip.appendChild(techName);
    skillList.appendChild(techChip);
  });
}

const showList = (list) => {
  if (list.classList.contains('skills__list--hidden')) {
    list.classList.remove('skills__list--hidden');

    [...document.querySelectorAll('.skills__list li')].forEach((text, i) => {
      setTimeout(() => {
        text.classList.remove('skills__list--hidden');
        text.classList.add('skills__tech--appear');
      }, i * 250);
    });
  }
}

const toggleVisibility = toggleVisibilityFactory('skills__list--hidden', showList);

const handleUpdate = () => {
  const pos = getScrollPosition();
  toggleVisibility(skills, pos);
};

module.exports = {
  initialize,
  handleUpdate
}