const { getScrollPosition, toggleVisibilityFactory } = require('../helpers');
const bioText = document.querySelector('.bio__text');

const initialize = () => {
  console.log(bioText);
}

const setupTechs = () => {
  const techImgs = document.querySelectorAll('.bio__techs img');

  techs.forEach((tech, i) => {
    techImgs[i].src = tech.image;
    techImgs[i].alt = tech.name;
    techImgs[i].title = tech.name;
  });
}

const showList = (list) => {
  console.log('show');
  list.classList.remove('bio__text--hidden');

  document.querySelector('.bio__text li').forEach((text, i) => {
    setTimeout(() => {
      text.classList.remove('bio__text--hidden');
      text.classList.add('bio__text-right--appear');
    }, i * 250);
  });
}

const toggleVisibility = toggleVisibilityFactory('bio__text--hidden', showList);

const handleUpdate = () => {
  const pos = getScrollPosition();
  console.log(pos, bioText.offsetTop, );
  toggleVisibility(bioText, pos);
};

module.exports = {
  initialize,
  handleUpdate
}