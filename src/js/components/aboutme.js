const { getScrollPosition, toggleVisibilityFactory } = require('../helpers');
const bioText = document.querySelector('.bio__text');

const initialize = () => {
  handleUpdate();
}

const showList = (list) => {
  if (list.classList.contains('bio__text--hidden')) {
    list.classList.remove('bio__text--hidden');

    [...document.querySelectorAll('.bio__text li')].forEach((text, i) => {
      setTimeout(() => {
        text.classList.remove('bio__text--hidden');
        text.classList.add('bio__text-right--appear');
      }, i * 250);
    });
  }
}

const toggleVisibility = toggleVisibilityFactory('bio__text--hidden', showList);

const handleUpdate = () => {
  const pos = getScrollPosition();
  toggleVisibility(bioText, pos);
};

module.exports = {
  initialize,
  handleUpdate
}